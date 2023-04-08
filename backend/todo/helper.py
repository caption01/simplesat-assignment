from .models import TodoItem

class TodoClass:
    def get_order_items(self):
        return TodoItem.objects.all().order_by('order').values('id', 'name', 'order', 'is_done')

    def re_order(self, _from, _to):
        from_order = int(_from)
        to_order = int(_to) if _to else None

        change_items = []
        edit_item = None
        is_move_down = None

        if to_order:
            is_move_down = from_order < to_order
        else:
            is_move_down = True

        if to_order == None:
            change_items = TodoItem.objects.filter(order__gt=from_order)
        else:
            edit_item = TodoItem.objects.filter(order=from_order).first()
            if is_move_down:
                change_items = TodoItem.objects.filter(order__range=(from_order + 1, to_order))
            else:
                change_items = TodoItem.objects.filter(order__range=(to_order, from_order - 1))


        if change_items:
            for item in change_items:
                if is_move_down:
                    item.order = item.shift_up
                else:
                    item.order = item.shift_down
                item.save()

        if edit_item:
            edit_item.order = to_order
            edit_item.save()

        return 



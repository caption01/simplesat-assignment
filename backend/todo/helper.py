from .models import TodoItem

class TodoClass:
    def re_order(self, _from, _to):
        change_items = []
        edit_item = None

        from_order = int(_from)
        to_order = int(_to) if _to else None

        if (to_order == None):
            change_items = TodoItem.objects.filter(order__gt=from_order)
            if change_items:
                 for item in change_items:
                    item.order = item.shift_up
                    item.save()
        else:
            is_shift_down = from_order < to_order
            edit_item = TodoItem.objects.filter(order=from_order).first()

            if is_shift_down:
                change_items = TodoItem.objects.filter(order__range=(from_order + 1, to_order))
                if change_items:
                 for item in change_items:
                    item.order = item.shift_up
                    item.save()
  
                if edit_item:
                    edit_item.order = to_order
                    edit_item.save()
            else:
                change_items = TodoItem.objects.filter(order__range=(to_order, from_order - 1))
                if change_items:
                 for item in change_items:
                    item.order = item.shift_down
                    item.save()
  
                if edit_item:
                    edit_item.order = to_order
                    edit_item.save()


        items = TodoItem.objects.all().order_by('order').values('id', 'name', 'order', 'is_done')

        return items 



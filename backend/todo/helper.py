from .models import TodoItem

class TodoClass:
    def re_order(self, _from, _to):
        change_items = TodoItem.objects.filter(order__gte=_from).all()
        return []


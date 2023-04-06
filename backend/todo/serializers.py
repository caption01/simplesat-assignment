from rest_framework.serializers import ModelSerializer, Serializer, IntegerField, ModelSerializer

from .models import TodoItem

class TodoSerializer(ModelSerializer):
    class Meta:
        model = TodoItem
        fields = ('id', 'name', 'order', 'is_done')


class TodoItemUpdateSerializer(ModelSerializer):
    class Meta:
        model = TodoItem
        fields = ['id', 'name', 'order', 'is_done']


class TodoItemReOrderUpdateSerializer(Serializer):
    from_order = IntegerField(required=True)
    to_order = IntegerField(required=True)
from rest_framework.serializers import ModelSerializer, Serializer, IntegerField, ModelSerializer, BooleanField

from .models import TodoItem

class TodoSerializer(ModelSerializer):
    class Meta:
        model = TodoItem
        fields = ('id', 'name', 'order', 'is_done')


class TodoItemCreateSerializer(ModelSerializer):
    class Meta:
        model = TodoItem
        fields = ('name',)


class TodoItemUpdateSerializer(ModelSerializer):
    is_done = BooleanField(required=True)
    class Meta:
        model = TodoItem
        fields = ('name', 'is_done',)


class TodoItemReOrderUpdateSerializer(Serializer):
    from_order = IntegerField(required=True)
    to_order = IntegerField(required=True)
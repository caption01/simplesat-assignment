from rest_framework import status
from rest_framework.generics import ListCreateAPIView
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import TodoItem
from .serializers import TodoSerializer, TodoItemCreateSerializer, TodoItemUpdateSerializer, TodoItemReOrderUpdateSerializer
from .helper import TodoClass


class TodoItemList(ListCreateAPIView):
    queryset = TodoItem.objects.all().order_by('order')
    serializer_class = TodoSerializer

    def get_serializer_class(self):
        if self.request.method == 'POST':
            return TodoItemCreateSerializer
        else:
            return self.serializer_class
        
    def post(self, request, *args, **kwargs):
        name = request.data.get('name')
        total_items = self.queryset.count()

        new_todo_item = {
            'name': name,
            'order': total_items + 1,
        }

        serializer = self.serializer_class(data=new_todo_item)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        response = { 'success': True, 'data': serializer.validated_data }
        return Response(response, status=status.HTTP_201_CREATED)


class TodoItemUpdateApi(APIView, TodoClass):
    serializer_class = TodoItemUpdateSerializer
    
    def put(self, request, pk):
        item = TodoItem.objects.get(id=pk)

        serializer = self.serializer_class(instance=item, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        response = { 'success': True, 'data': serializer.validated_data }
        return Response(response, status=status.HTTP_200_OK)
    
    def delete(self, request, pk):
        item = TodoItem.objects.get(id=pk)
        deleted_order = item.order
        item.delete()

        items = super().re_order(_from=deleted_order, _to=None)
        response = { 'success': True, 'data': items }

        return Response(response, status=status.HTTP_202_ACCEPTED)


class TodoItemReOrderApi(APIView, TodoClass):
    serializer_class = TodoItemReOrderUpdateSerializer
    
    def post(self, request, pk):
        data = request.data
        from_order = data.get('from_order')
        to_order = data.get('to_order')

        items = super().re_order(_from=from_order, _to=to_order)
        response = { 'success': True, 'data': items }

        return Response(response, status=status.HTTP_202_ACCEPTED)
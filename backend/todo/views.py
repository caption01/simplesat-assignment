from rest_framework import status
from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import TodoItem
from .serializers import TodoSerializer, TodoItemUpdateSerializer, TodoItemReOrderUpdateSerializer


class TodoItemList(ListAPIView):
    queryset = TodoItem.objects.all().order_by('order')
    serializer_class = TodoSerializer


class TodoItemUpdateApi(APIView):
    serializer_class = TodoItemUpdateSerializer
    
    def put(self, request, pk):
        item = TodoItem.objects.get(id=pk)

        serializer = self.serializer_class(instance=item, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.validated_data, status=status.HTTP_200_OK)


class TodoItemReOrderApi(APIView):
    serializer_class = TodoItemReOrderUpdateSerializer
    
    def post(self, request, pk):
        data = request.data
        from_order = data.get('from_order')
        to_order = data.get('to_order')

        # TODO: implement logic to re-order

        res = { 'message': f're order for id: {pk} from {from_order} to {to_order}' }

        return Response(res)
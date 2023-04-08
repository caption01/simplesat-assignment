from django.urls import path

from .views import TodoItemList, TodoItemUpdateApi, TodoItemReOrderApi, TodoItemClearApi

urlpatterns = [
    path('todo/', TodoItemList.as_view()),
    path('todo/clear/', TodoItemClearApi.as_view()),
    path('todo/<int:pk>/', TodoItemUpdateApi.as_view()),
    path('todo/<int:pk>/order', TodoItemReOrderApi.as_view()),
]
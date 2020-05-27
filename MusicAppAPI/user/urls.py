from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import UserView, UserListView

urlpatterns = format_suffix_patterns([
    path('user/', UserListView.as_view()),
    path('user/<int:pk>/', UserView.as_view())
])

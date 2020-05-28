from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework_simplejwt.views import TokenObtainPairView

from .views import UserView, UserListView


urlpatterns = format_suffix_patterns([
    path('login/', TokenObtainPairView.as_view()),
    path('users/', UserListView.as_view()),
    path('user/', UserView.as_view())
])

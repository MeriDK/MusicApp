from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import PlaylistView, PlaylistListView

urlpatterns = format_suffix_patterns([
    path('playlist/', PlaylistListView.as_view()),
    path('playlist/<int:pk>/', PlaylistView.as_view())
])

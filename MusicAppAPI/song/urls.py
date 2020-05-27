from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import SongView, SongListView

urlpatterns = format_suffix_patterns([
    path('song/', SongListView.as_view()),
    path('song/<int:pk>/', SongView.as_view())
])

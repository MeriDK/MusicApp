from rest_framework import generics
from rest_framework.response import Response

from .models import Playlist
from .serializers import PlaylistSerializer
from user.models import User


class PlaylistListView(generics.ListCreateAPIView):
    serializer_class = PlaylistSerializer
    queryset = Playlist.objects.all()

    def get_queryset(self):
        type = self.request.query_params.get('type', None)
        queryset = Playlist.objects.all()
        if type:
            queryset = queryset.filter(type=type)
        return queryset


class PlaylistView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = PlaylistSerializer
    queryset = Playlist.objects.all()


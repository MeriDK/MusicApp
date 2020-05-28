from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from .models import Playlist
from .serializers import PlaylistSerializer


class PlaylistListView(generics.ListCreateAPIView):
    serializer_class = PlaylistSerializer
    queryset = Playlist.objects.all()
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        queryset = self.queryset.filter(user_id=self.request.user.id)
        type = self.request.query_params.get('type', None)
        if type:
            queryset = queryset.filter(type=type)
        return queryset


class PlaylistView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = PlaylistSerializer
    queryset = Playlist.objects.all()
    permission_classes = (IsAuthenticated,)


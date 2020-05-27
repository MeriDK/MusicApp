from rest_framework import generics
from .models import Song
from .serializers import SongSerializer


class SongListView(generics.ListCreateAPIView):
    serializer_class = SongSerializer
    queryset = Song.objects.all()

    def get_queryset(self):
        playlist = self.request.query_params.get('playlist', None)
        queryset = Song.objects.all()
        if playlist:
            queryset = queryset.filter(playlist=playlist)
        return queryset


class SongView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = SongSerializer
    queryset = Song.objects.all()


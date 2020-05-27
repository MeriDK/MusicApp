from django.db import models
from playlist.models import Playlist


class Song(models.Model):
    playlist = models.ForeignKey(Playlist, on_delete=models.CASCADE)
    name = models.TextField(max_length=30)
    artist = models.TextField(max_length=30)
    duration = models.TextField(max_length=10)

    def __str__(self):
        return f'id: {self.id}\nplaylist: {self.playlist}\nname: {self.name}\nartist: {self.artist}\n' \
               f'duration: {self.duration}'

from django.db import models
from django.contrib.auth.models import User


class PlaylistType(models.TextChoices):
    PRIVATE = 1
    PUBLIC = 0


class Playlist(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    type = models.SmallIntegerField(choices=PlaylistType.choices, default=PlaylistType.PUBLIC)
    name = models.TextField(max_length=30)
    description = models.TextField(max_length=300)

    def __str__(self):
        return f'id: {self.id}\nname: {self.name}\ntype: {self.type}\nuser: {self.user}\n' \
               f'description: {self.description}'

from rest_framework import serializers
from .models import Playlist


class PlaylistSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()

    def get_user(self, obj):
        return obj.user.username

    class Meta:
        model = Playlist
        fields = ('id', 'user', 'type', 'name', 'description')

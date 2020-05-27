from django.db import models


class User(models.Model):
    email = models.TextField(max_length=30)
    username = models.TextField(max_length=30)
    password = models.TextField(max_length=30)

    def __str__(self):
        return f'id: {self.id}\nemail: {self.email}\nusername: {self.username}'


from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .serializers import UserSerializer


class UserListView(generics.ListCreateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()


class UserView(generics.RetrieveUpdateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
    permission_classes = (IsAuthenticated,)

    def retrieve(self, request, *args, **kwargs):
        user = self.queryset.filter(id=request.user.id).first()
        serializer = UserSerializer(user)
        return Response(serializer.data, status=200)

    def patch(self, request, *args, **kwargs):
        self.kwargs['pk'] = self.queryset.filter(id=request.user.id).first().id
        return self.partial_update(request, *args, **kwargs)


from django.http import HttpResponse
from django.http import Http404
from django.contrib.auth.models import User
from .models import UserAccount
from .serializers import RegisterSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

def getReviews(request):
    return HttpResponse("hello");

@api_view(['POST'])
def registration(request):
    serializer = RegisterSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data,status= status.HTTP_201_CREATED)
    
    return Response(serializer.errors,status = status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def userData(request):
    
    users = UserAccount.objects.all()
    serializer = RegisterSerializer(users, many=True)
    return Response(serializer.data)

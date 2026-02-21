from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import *

# Create your views here.
def home(request):
  user = Users.objects.all()
  return JsonResponse({"name":"Hello World!"})
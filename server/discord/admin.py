from django.contrib import admin
from django.db import models

"""
Reminder to run command "python manage.py makemigrations" -> "python manage.py migrate" on any data change to update database schema
Documentation link: https://docs.djangoproject.com/en/6.0/topics/db/models/
"""

# Register your models here.

# Start of base model Tables
class Users(models.Model):
  name = models.CharField(max_length=50)

class Servers(models.Model):
  name = models.CharField(max_length=50)

class Folders(models.Model):
  name = models.CharField(max_length=50)

class Channels(models.Model):
  name = models.CharField(max_length=50)
  type = models.BigIntegerField()

class Messages(models.Model):
  Channel = models.ForeignKey(Channels, on_delete=models.CASCADE)
  text = models.CharField(max_length=500)

# Start of Relation Tables
class Friends(models.Model):
  Users = [
    models.ForeignKey(Users, on_delete=models.CASCADE),
    models.ForeignKey(Users, on_delete=models.CASCADE)
  ]
  Chanel = models.ForeignKey(Channels, on_delete=models.CASCADE)
  
class ServerToFolders(models.Model):
  server = models.ForeignKey(Servers, on_delete=models.CASCADE)
  folder = models.ForeignKey(Folders, on_delete=models.CASCADE)

class FolderToChannels(models.Model):
  folder = models.ForeignKey(Folders, on_delete=models.CASCADE)
  channel = models.ForeignKey(Channels, on_delete=models.CASCADE)

class ChannelToMessage(models.Model):
  Channel = models.ForeignKey(Channels, on_delete=models.CASCADE)
  Message = models.ForeignKey(Messages, on_delete=models.CASCADE)
  time = models.DateTimeField(auto_now_add=True)
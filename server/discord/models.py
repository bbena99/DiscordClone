from django.db import models

"""
Reminder to run command "python manage.py makemigrations" -> "python manage.py migrate" on any data change to update database schema
Documentation link: https://docs.djangoproject.com/en/6.0/topics/db/models/
"""

# Start of base model Tables
class Messages(models.Model):
  text = models.CharField(max_length=500)

class Channels(models.Model):
  name = models.CharField(max_length=50)
  type = models.BigIntegerField()#Will be used for Text channels or Voice channels
  messages = models.ManyToManyField(Messages)

class Folders(models.Model):
  name = models.CharField(max_length=50)
  channels = models.ManyToManyField(Channels)

class Servers(models.Model):
  name = models.CharField(max_length=50)
  folders = models.ManyToManyField(Folders)

class Users(models.Model):
  name = models.CharField(max_length=50)
  friends = models.ManyToManyField("self",symmetrical=False, blank=True)
  servers = models.ManyToManyField(Servers, symmetrical=True, blank=True)
  def __str__(self):
    return self.name

class FriendRequest(models.Model):
  from_user = models.ForeignKey(Users, on_delete=models.CASCADE, related_name="request_sender")
  to_user = models.ForeignKey(Users, on_delete=models.CASCADE, related_name="request_receiver")
  status = models.CharField(
    max_length=10,
    choices=[
      ("pending","Pending"),
      ("accepted", "Accepted"),
      ("blocked", "Blocked"),
    ],
    default="pending"
  )

class ServerInvite(models.Model):
  server=models.ForeignKey(Servers,on_delete=models.CASCADE)
  status = models.CharField(
    max_length=10,
    choices=[
      ("active","Active"),
      ("disabled","Disabled")
    ],
    default="active"
  )
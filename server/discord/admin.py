from django.contrib import admin
from django.db import models

"""
Reminder to run command "python manage.py makemigrations" -> "python manage.py migrate" on any data change to update database schema
"""

# Register your models here.

class Chanel(models.Model):
  name = models.CharField(max_length=50)
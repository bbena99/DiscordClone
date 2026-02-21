from django.contrib import admin
from .models import *
# Register your models here.

admin.site.register(Messages)
admin.site.register(Channels)
admin.site.register(Folders)
admin.site.register(Servers)
@admin.register(Users)
class UserAdmin(admin.ModelAdmin):
  list_display = ("name","friend_count","server_count")
  def friend_count(self,obj):
    return obj.friends.count()
  def server_count(self,obj):
    return obj.servers.count()

admin.site.register(FriendRequest)
admin.site.register(ServerInvite)
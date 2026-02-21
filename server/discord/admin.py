from django.contrib import admin
from .models import *

# Register your models here.

admin.site.register(Users)
admin.site.register(Servers)
admin.site.register(Folders)
admin.site.register(Channels)
admin.site.register(Messages)

admin.site.register(Friends)
admin.site.register(UsersToServers)
admin.site.register(ServerToFolders)
admin.site.register(FolderToChannels)
admin.site.register(ChannelToMessage)
from django.contrib import admin
from .models import Announcement

class AnnouncementAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'slug', 'date_added')

admin.site.register(Announcement, AnnouncementAdmin)

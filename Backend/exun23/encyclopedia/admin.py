from django.contrib import admin
from .models import Entry

class EntryAdmin(admin.ModelAdmin):
    list_display = ('id', 'term', 'slug', 'date_added')

admin.site.register(Entry, EntryAdmin)

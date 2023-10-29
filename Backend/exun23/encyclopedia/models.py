from django.db import models

class Entry(models.Model):
    term = models.CharField("Term", max_length=100)
    defn = models.TextField('Definition')
    date_added = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)
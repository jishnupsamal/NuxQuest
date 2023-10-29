from django.db import models
from django.utils.text import slugify
from django.db.models.signals import pre_save, post_save
from django.dispatch import receiver

class Announcement(models.Model):
    title = models.CharField("Title", max_length=100)
    content = models.TextField('Content')
    slug = models.SlugField(blank=True, null=True, unique=True)
    date_added = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

@receiver(pre_save, sender=Announcement)
def slugify_name(sender, instance, **kwargs):
    instance.slug = slugify(instance.title)
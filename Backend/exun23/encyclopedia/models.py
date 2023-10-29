from django.db import models
from django.utils.text import slugify
from django.db.models.signals import pre_save, post_save
from django.dispatch import receiver

class Entry(models.Model):
    class Meta:
        verbose_name = 'Entry'
        verbose_name_plural = 'Entries'
    image = models.ImageField('Image', upload_to='uploads/encyclopedia', blank=True, null=True)
    term = models.CharField("Term", max_length=100)
    defn = models.TextField('Definition')
    slug = models.SlugField(blank=True, null=True, unique=True)
    date_added = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)

@receiver(pre_save, sender=Entry)
def slugify_name(sender, instance, **kwargs):
    instance.slug = slugify(instance.term)
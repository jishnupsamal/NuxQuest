from django.shortcuts import render
from rest_framework import generics
from .models import Announcement
from .serializers import AnnouncementSerializer

class AnnouncementListCreateView(generics.ListCreateAPIView):
    serializer_class = AnnouncementSerializer
    queryset = Announcement.objects.all()

class AnnouncementDetailView(generics.RetrieveDestroyAPIView):
    serializer_class = AnnouncementSerializer
    queryset = Announcement.objects.all()
    lookup_field ='slug'
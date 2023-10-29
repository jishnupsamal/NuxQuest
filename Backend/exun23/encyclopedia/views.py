from django.shortcuts import render
from rest_framework import generics, parsers
from .models import Entry
from .serializers import EntrySerializer

class EntryListCreateView(generics.ListCreateAPIView):
    serializer_class = EntrySerializer
    queryset = Entry.objects.all()
    parser_classes = (parsers.MultiPartParser, parsers.FormParser)

class EntryDetailView(generics.RetrieveDestroyAPIView):
    serializer_class = EntrySerializer
    queryset = Entry.objects.all()
    lookup_field ='slug'
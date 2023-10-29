from django.urls import path
from .views import (
    EntryListCreateView,
    EntryDetailView
)

app_name = 'encyclopedia'

urlpatterns = [
    path('', EntryListCreateView.as_view(), name='list_create'),
    path('<slug:slug>', EntryDetailView.as_view(), name='detail_destroy')
]
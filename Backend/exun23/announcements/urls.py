from django.urls import path
from .views import (
    AnnouncementListCreateView,
    AnnouncementDetailView
)

app_name = 'announcement'

urlpatterns = [
    path('', AnnouncementListCreateView.as_view(), name='list_create'),
    path('<slug:slug>', AnnouncementDetailView.as_view(), name='detail_destroy')
]
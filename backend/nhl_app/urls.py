from django.urls import path, include
from nhl_app import views

urlpatterns = [
    path('teams/', views.get_teams, name='get_teams'),
]
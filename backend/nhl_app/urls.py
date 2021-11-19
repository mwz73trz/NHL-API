from django.urls import path, include
from nhl_app import views

urlpatterns = [
    path('teams/', views.get_teams, name='get_teams'),
    path('teams/<int:teamId>/', views.team_detail, name='team_detail'),
    path('teams/<int:teamId>/players/', views.team_players, name='team_players'),
    path('players/<int:playerId>/', views.player_detail, name='player_detail'),
    path('players/<int:playerId>/stats/', views.player_stats, name='player_stats'),
]
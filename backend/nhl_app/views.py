from django.shortcuts import render
from django.http import JsonResponse, response
import requests

def get_teams(request):
    response = requests.get(f"https://statsapi.web.nhl.com/api/v1/teams").json()
    return JsonResponse(response, safe=False)

def team_detail(request, teamId):
    response = requests.get(f"https://statsapi.web.nhl.com/api/v1/teams/{teamId}").json()
    return JsonResponse(response, safe=False)

def team_players(request, teamId):
    response = requests.get(f"https://statsapi.web.nhl.com/api/v1/teams/{teamId}?expand=team.roster").json()
    roster = response['teams'][0]['roster']['roster']
    return JsonResponse(roster, safe=False)

def player_detail(request, playerId):
    response = requests.get(f"https://statsapi.web.nhl.com/api/v1/people/{playerId}").json()
    player = response['people']
    return JsonResponse(player, safe=False)

def player_stats(request, playerId):
    response = requests.get(f"https://statsapi.web.nhl.com/api/v1/people/{playerId}/stats?stats=statsSingleSeason&season=20212022").json()
    all_stats = response['stats'][0]['splits'][0]['stat']
    return JsonResponse(all_stats, safe=False)


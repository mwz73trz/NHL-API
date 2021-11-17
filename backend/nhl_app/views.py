from django.shortcuts import render
from django.http import JsonResponse, response
import requests

def get_teams(request):
    response = requests.get(f"https://statsapi.web.nhl.com/api/v1/teams").json()
    return JsonResponse(response, safe=False)




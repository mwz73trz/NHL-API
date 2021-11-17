from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/', include('nhl_auth.urls')),
    path('api/', include('nhl_app.urls')),
]

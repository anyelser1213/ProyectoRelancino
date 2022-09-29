from django.urls import path
from aplicaciones.juegos.api.api import JugadaApiView

urlpatterns = [
    path('jugada/',JugadaApiView.as_view(),name='jugadaApi')
]
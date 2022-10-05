from django.urls import path
from aplicaciones.juegos.api.api import jugada_api_view# JugadaApiView

urlpatterns = [
    path('jugada2/',jugada_api_view,name='jugadaApi2')
    #path('jugada/',JugadaApiView.as_view(),name='jugadaApi')
]
from django.urls import path
from aplicaciones.juegos.api.api import jugada_api_view ,consultarJugada_api_view

urlpatterns = [

    #Normal

    #Apis
    path('jugada/',jugada_api_view,name='jugadaApi'),
    path('consultarjugada/',consultarJugada_api_view,name='consultar_jugada'),
    #path('jugada/',JugadaApiView.as_view(),name='jugadaApi')
]
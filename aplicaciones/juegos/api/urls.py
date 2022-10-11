from django.urls import path
from aplicaciones.juegos.api.api import jugada_api_view #,JugadaApiView

urlpatterns = [

    #Normal

    #Apis
    path('jugada/',jugada_api_view,name='jugadaApi'),
    #path('jugada/',JugadaApiView.as_view(),name='jugadaApi')
]
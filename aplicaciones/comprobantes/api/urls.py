from django.urls import path
from aplicaciones.comprobantes.api.api import pagar_comprobante_api_view

urlpatterns = [

    #Normal

    #Apis
    path('pagar_comprobante/',pagar_comprobante_api_view,name='pagar_comprobanteApi'),
    
    #path('consultarjugada/',consultarJugada_api_view,name='consultar_jugada'),
    #path('jugada/',JugadaApiView.as_view(),name='jugadaApi')
]
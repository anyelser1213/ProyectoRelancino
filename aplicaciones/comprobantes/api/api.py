import json

from django.http import HttpResponse, JsonResponse
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from aplicaciones.juegos.models import TipoJugadas,Jugada,Telefono,Comprobante,Jugadas_Numeros
from aplicaciones.comprobantes.api.serializers import JugadaSerializer

@api_view(['GET','POST'])
def pagar_comprobante_api_view(request):


    if request.method == 'GET':
        jugadas = Jugada.objects.all()
        jugadas_serializer = JugadaSerializer(jugadas,many=True)
        return Response(jugadas_serializer.data)
    
    elif request.method == 'POST':

        print("datos",request.data, "Usuario: ",request.user.username,request.user.id)
        #print("datos tipos:  ",request.data.get('tipos'))
        #tipos = request.data.get('tipos')
        #jugada = str(request.data.get('digitos'))
        #numero_telefonico = str(request.data.get('numeros'))
        #comprobante = str(request.data.get('comprobante'))

        #Datos que enviaremos
        datos = {}

        #posicion_index = tipos[0].find("_")
        #posicion_index +=1
        #print("Posicion : ",str(tipos[0]).find("_"))
        #print(tipos[0][posicion_index:])

        #Elemento = TipoJugadas.objects.get(nombre=tipos[0][posicion_index:])
        
        #print("Tipos Jugados: ",tipos)
        #print("Jugada: ",jugada)
        #print("Numero: ",numero_telefonico)
        #print("Comprobante: ",comprobante)
        #print("Tipo jugada: ",Elemento," Cantidad: ",Elemento.cantidad_digitos)
        
        
        #jugada_serializer = JugadaSerializer(data = request.data) #De json a objeto otra ves y guardamos
        

        #print("El tipo de dato es: ",type(datos))

        return JsonResponse(datos,safe = False)
        
        


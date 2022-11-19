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
        
        id_comprobante = str(request.data.get('id_comprobante'))
        comprobante = str(request.data.get('comprobante'))

        #Datos que enviaremos
        datos = {"Mensaje":"Exitoso"}

        Elemento = Jugadas_Numeros.objects.get(id=id_comprobante)
        Elemento.status="Pagado"
        Elemento.save()
        
        print("Elemento Jugada: ",Elemento)
        print("id_comprobante: ",id_comprobante)
        print("Comprobante: ",comprobante)
        
        
        #jugada_serializer = JugadaSerializer(data = request.data) #De json a objeto otra ves y guardamos
        

        #print("El tipo de dato es: ",type(datos))

        return JsonResponse(datos,safe = False)


@api_view(['GET','POST'])
def obtener_comprobantes_api_view(request):


    if request.method == 'GET':
        jugadas = Jugadas_Numeros.objects.all()
        jugadas_serializer = Jugadas_Numeros(jugadas,many=True)
        return Response(jugadas_serializer.data)
    

    elif request.method == 'POST':

        print("datos",request.data, "Usuario: ",request.user.username)
        
        #id_comprobante = str(request.data.get('id_comprobante'))
        #comprobante = str(request.data.get('comprobante'))

        #Datos que enviaremos
        datos = {"Mensaje":"Exitoso"}

        #Elemento = Jugadas_Numeros.objects.get(id=id_comprobante)
        #Elemento.status="Pagado"
        #Elemento.save()
        
        #print("Elemento Jugada: ",Elemento)
        #print("id_comprobante: ",id_comprobante)
        #print("Comprobante: ",comprobante)
        
        
        #jugada_serializer = JugadaSerializer(data = request.data) #De json a objeto otra ves y guardamos
        

        #print("El tipo de dato es: ",type(datos))

        return JsonResponse(datos,safe = False)
        
        


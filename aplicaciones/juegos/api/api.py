import json

from django.http import HttpResponse, JsonResponse
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from aplicaciones.juegos.models import Jugada
from aplicaciones.juegos.api.serializers import JugadaSerializer

@api_view(['GET','POST'])
def jugada_api_view(request):

    print("su madre jaja",request.data)

    if request.method == 'GET':
        jugadas = Jugada.objects.all()
        jugadas_serializer = JugadaSerializer(jugadas,many=True)
        return Response(jugadas_serializer.data)
    
    elif request.method == 'POST':

        print(request.data)
        #jugada_serializer = JugadaSerializer(data = request.data) #De json a objeto otra ves y guardamos
        
        data = {
        "name": "Vaibhav",
        "age": 20,
        "hobbies": ["Coding", "Art", "Gaming", "Cricket", "Piano"]
    }

        return JsonResponse(data,safe = False)
        #return HttpResponse(json.dumps(data), content_type = "application/json")
        
        data={'uno':1,'dos':2}
        return JsonResponse(data,safe = False)
        
        if jugada_serializer.is_valid(): #Verificamos que la data es correcta
            #jugada_serializer.save() #Guardamos la data en base de datos
            return Response(jugada_serializer.data)
        else:
            return Response(jugada_serializer.errors)
        print(request.data)



"""
class JugadaApiView(APIView):

    def get(self, request):
        jugadas = Jugada.objects.all()
        jugadas_serializer = JugadaSerializer(jugadas,many=True)
        return Response(jugadas_serializer.data)
"""

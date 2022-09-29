from rest_framework.response import Response
from rest_framework.views import APIView
from aplicaciones.juegos.models import Jugada
from aplicaciones.juegos.api.serializers import JugadaSerializer

class JugadaApiView(APIView):

    def get(self, request):
        jugadas = Jugada.objects.all()
        jugadas_serializer = JugadaSerializer(jugadas,many=True)
        return Response(jugadas_serializer.data)
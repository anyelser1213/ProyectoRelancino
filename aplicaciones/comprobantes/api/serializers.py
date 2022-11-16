from dataclasses import fields
from rest_framework import serializers
from aplicaciones.juegos.models import Jugadas_Numeros


class JugadaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Jugadas_Numeros
        #fields = '__all__'
        fields = ['status'] #cuando son campos especificos
        
        #exclude
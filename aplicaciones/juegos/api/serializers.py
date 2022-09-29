from dataclasses import fields
from rest_framework import serializers
from aplicaciones.juegos.models import Jugada


class JugadaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Jugada
        fields = '__all__'
        #fields = ['name',etc...] cuando son campos especificos
        #exclude
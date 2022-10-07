from contextlib import nullcontext
from django.db import models
from aplicaciones.usuarios.models import Usuarios

# Create your models here.

class TipoJugadas(models.Model):

    nombre = models.CharField(max_length=30,unique=True)
    cantidad_digitos = models.CharField(max_length=30)
    estado_jugada = models.BooleanField(default=False)
    monto_jugada = models.FloatField(default=0)
    cantidad_maxima_repeticion = models.PositiveIntegerField(default=0)

    def __str__(self):
         return self.nombre

    class Meta:

        verbose_name = "Tipo Jugada"
        verbose_name_plural = "1.Tipos Jugadas"

class Jugada(models.Model):

    id_tipo_jugada = models.ForeignKey(TipoJugadas, on_delete=models.CASCADE)
    id_usuario = models.ForeignKey(Usuarios, on_delete=models.CASCADE)
    digitos = models.PositiveIntegerField(blank=False, null=False)
    repetidor = models.PositiveIntegerField(default=0)
    fecha_creacion = models.DateTimeField(auto_now_add=True) 

    def __str__(self):
         return "Digitos: "+str(self.digitos)+" Usuario: "+str(self.id_usuario)

    class Meta:

        verbose_name = "Jugada"
        verbose_name_plural = "2.Jugadas"

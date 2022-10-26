
from django.utils import timezone
from django.utils.timezone import now
from django.db import models
from aplicaciones.usuarios.models import Usuarios

import datetime

# Create your models here.

class TipoJugadas(models.Model):

    """Modelo para registrar hora de inicio y cierre"""
    day  = timezone.now()
    hour = timezone.now()
    #formatedHour = hour.strftime("%Y/%m/%d %H:%M:%S")
    #formatedDay  = day.strftime("%Y/%m/%d")
    #formatedHour = hour.strftime("%H:%M:%S")

    nombre = models.CharField(max_length=30,unique=True)
    cantidad_digitos = models.CharField(max_length=30)
    estado_jugada = models.BooleanField(default=False)
    hora_inicio = models.TimeField(default=now, blank=False,null=False)#Solo hora
    hora_cierre = models.TimeField(default=now, blank=True,null=True)#Solo hora
    fecha_cierre = models.DateField(auto_now_add=False,auto_now=False,blank=True) #Solo fecha

    #fecha_cierre = models.CharField(max_length=50, default=formatedDay)
    #fecha_creacion2 = models.DateTimeField(default=now) # fecha y hora
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
    digitos = models.CharField(max_length=10,blank=False, null=False)
    repetidor = models.PositiveIntegerField(default=0)
    bloquear_repetidor = models.BooleanField(default=False)
    fecha_creacion = models.DateTimeField(auto_now_add=True) 

    def __str__(self):
         return "Digitos: "+str(self.digitos)+" Usuario: "+str(self.id_usuario)

    class Meta:

        verbose_name = "Jugada"
        verbose_name_plural = "2.Jugadas"

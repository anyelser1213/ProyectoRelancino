
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

class Telefono(models.Model):

    numero_telefono = models.CharField(max_length=11,default=0,blank=False, null=False) # 11 digitos tiene un numero telefonico(Venezuela)
    

    def __str__(self):
         return "Telefono: "+str(self.numero_telefono)

    class Meta:

        verbose_name = "Numero Telefonico"
        verbose_name_plural = "3.Numeros Telefonicos"

        permissions = [
            #(Lo que se guarda en bases de datos, lo que se ve al usuario)
            
            #Permisos para iniciar y consultar jugadas
            #("iniciarjugada", "IniciarJugada"),
            #("consultarjugada", "ConsultarJugada"),

            #Para ver los informes
            #("informejugada", "InformeJugada"),

        ]#Fin de los permisos

class Comprobante(models.Model):

    id = models.AutoField(primary_key=True)
    numero_comprobante = models.CharField(default=0,max_length=11,blank=False, null=False)

    def __str__(self):
         return "Comprobante: "+str(self.numero_comprobante)

    class Meta:

        verbose_name = "Numero comprobante"
        verbose_name_plural = "4.Comprobante"

        permissions = [
            #(Lo que se guarda en bases de datos, lo que se ve al usuario)
            
            #Permisos para iniciar y consultar jugadas
            #("iniciarjugada", "IniciarJugada"),
            ("consultarcomprobantes", "ConsultarComprobante"),

            #Para ver los informes
            #("informejugada", "InformeJugada"),

        ]#Fin de los permisos


class Jugada(models.Model):

    id_tipo_jugada = models.ForeignKey(TipoJugadas, on_delete=models.CASCADE)
    id_usuario = models.ForeignKey(Usuarios, on_delete=models.CASCADE)
    digitos = models.CharField(default=0,max_length=20,blank=False, null=False)

    #Para la tabla de M a M
    tablarelacional = models.ManyToManyField(Telefono,through='Jugadas_Numeros')

    #numero_telefono = models.CharField(max_length=11,default=0,blank=False, null=False) # 11 digitos tiene un numero telefonico
    repetidor = models.PositiveIntegerField(default=0)
    bloquear_repetidor = models.BooleanField(default=False)
    fecha_creacion = models.DateTimeField(auto_now_add=True) 

    def __str__(self):
         return "Digitos: "+str(self.digitos)

    class Meta:

        verbose_name = "Jugada"
        verbose_name_plural = "2.Jugadas"

        permissions = [
            #(Lo que se guarda en bases de datos, lo que se ve al usuario)
            
            #Permisos para iniciar y consultar jugadas
            ("iniciarjugada", "IniciarJugada"),
            ("consultarjugada", "ConsultarJugada"),

            #Para ver los informes
            ("informejugada", "InformeJugada"),

        ]#Fin de los permisos


class Jugadas_Numeros(models.Model):

    tipo_plan = [
        ('Por Pagar','Por Pagar'),
        ('Pagado','Pagado'),
    ]
    id_jugada = models.ForeignKey(Jugada,on_delete=models.CASCADE,blank=True, null=True)
    id_telefono = models.ForeignKey(Telefono,on_delete=models.CASCADE,blank=True, null=True)
    id_usuario = models.ForeignKey(Usuarios, on_delete=models.CASCADE,blank=True, null=True)
    id_comprobante = models.ForeignKey(Comprobante, on_delete=models.CASCADE,blank=True, null=True)

    status = models.CharField("status",
        max_length=150,
        choices=tipo_plan,    
        default='Por Pagar'
    )

    def __str__(self):
        #return str(self.id_jugada)+" "+str(self.id_telefono)+" Usuario: "+str(self.id_usuario)
        return " Tipo Jugada: "+str(self.id_jugada.id_tipo_jugada)+", "+str(self.id_jugada)+" "+str(self.id_usuario)+" "+str(self.id_comprobante)+" "+str(self.id_telefono)+" Usuario: "+str(self.id_usuario)+" Status: "+self.status
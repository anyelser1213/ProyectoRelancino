
from django.utils import timezone
from django.utils.timezone import now
from django.db import models
from aplicaciones.usuarios.models import Usuarios

#Estos dos modelos son para crear permisos personalizados
from django.contrib.auth.models import Permission
from django.contrib.contenttypes.models import ContentType



from django.dispatch import receiver
from django.db.models.signals import pre_save, post_save, pre_delete, post_delete


#Es necesario importar las depencendias necesarias
from datetime import date
from datetime import datetime
import calendar
import os
import shutil #libreria para borrar carpetas esten o no llenas

#Para las señales
#Era una forma de hacerlo
#from aplicaciones.juegos.borrar_permisos_de_jugadas import BorrarTipo_Jugada



#Funciones para las fechas
def ultimo_dia_mes_actual(): 

    #Día actual
    fecha = date.today()
    #Date
    #print("El día actual es {}".format(fecha.day))
    #print("El mes actual es {}".format(fecha.month))
    #print("El año actual es {}".format(fecha.year))
    #print("PROBAMOS AQUI", fecha)

    ultimo_dia = calendar.monthrange(fecha.year,fecha.month)[1]
    #print(f'{ultimo_dia}/{fecha.month}/{fecha.year}')
    #next_month = any_day.replace(day=28) + datetime.timedelta(days=4) # this will never fail return next_month - datetime.timedelta(days=next_month.day)
    return f'{ultimo_dia}/{fecha.month}/{fecha.year}'


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
    estado_jugada = models.BooleanField(default=True)
    hora_inicio = models.TimeField(default=now, blank=False,null=False)#Solo hora
    hora_cierre = models.TimeField(default=now, blank=True,null=True)#Solo hora


    fecha_cierre = models.DateField(auto_now_add=False,auto_now=False,blank=True,default=ultimo_dia_mes_actual) #Solo fecha

    #fecha_cierre = models.CharField(max_length=50, default=formatedDay)
    #fecha_creacion2 = models.DateTimeField(default=now) # fecha y hora
    monto_jugada = models.FloatField(default=10)
    cantidad_maxima_repeticion = models.PositiveIntegerField(default=100)

    def __str__(self):
         return self.nombre

    


    class Meta:

        verbose_name = "Tipo Jugada"
        verbose_name_plural = "1.Tipos Jugadas"

    
    #Editando los metodos
    def save(self, *args, **kwargs): 

        
        #existe = Categoria.objects.filter(nombre=self.nombre)
        #if existe.count()>0:
        #    print("Modificando: ",self.nombre) 
        #    super(Categoria, self).save(*args, **kwargs)
        #else:
        #    print("Creando nueva categoria...",self.nombre)
        #    if self.nombre == "descargas":
        #        os.mkdir(os.path.join(settings.MEDIA_ROOT)+"/"+self.nombre)
        #    else:
        #
        #        os.mkdir(os.path.join(settings.MEDIA_ROOT)+"/"+"videos/"+self.nombre)
        #    
            #Permisos
            content_type = ContentType.objects.get_for_model(TipoJugadas)
            if Permission.objects.filter(name=self.nombre).count()>0:
                permisos =""
            else:
                permisos = Permission.objects.create(
                codename=self.nombre,
                name=self.nombre,
                content_type=content_type,
            )
            
            #permisos = Permission.objects.create(
            #    codename='add_'+self.nombre,
            #    name='add_'+self.nombre,
            #    content_type=content_type,
            #)

            print("Se agregaron los permisos: ", permisos)
            
            super(TipoJugadas, self).save(*args, **kwargs)



#pre_delete.connect(BorrarTipo_Jugada, sender=TipoJugadas) #<-- Sin decorador

"""
#Funcion de señales en Django
@receiver(pre_delete,sender=TipoJugadas)
def BorrarTipo_Jugada(sender,instance,**kwargs):

    print(sender)
    print(instance)
    print("Tipo de jugada dentro de los modelos: ",instance.nombre)

    print("Se acaba de Borrar una Categoria jajaja")

"""



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
        return "id: "+str(self.id)+", Tipo Jugada: "+str(self.id_jugada.id_tipo_jugada)+", "+str(self.id_jugada)+" "+str(self.id_usuario)+" "+str(self.id_comprobante)+" "+str(self.id_telefono)+" Usuario: "+str(self.id_usuario)+" Status: "+self.status
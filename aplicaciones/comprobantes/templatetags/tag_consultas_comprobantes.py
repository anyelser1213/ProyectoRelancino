from django import template
from atexit import register

from aplicaciones.juegos.models import *

register = template.Library()



@register.simple_tag
def monto_total(repeticion,monto): # Only one argument.
    
    
    #print("Datos insertados: ",repeticion,monto)
    respuesta=repeticion*monto
    #print("respuestas: ",respuesta)
    #return Video.objects.all()
    return respuesta





@register.inclusion_tag('comprobantes/botones_tipos_comprobantes.html')
def crear_boton_tipos_comprobantes(elemento):

    print("Entramos en CREAR BOTON en comprobantes")
    
    Tipos = TipoJugadas.objects.filter(nombre=str(elemento))
    existen = False
    print("Probando aqui:",Tipos," cantidad: ",Tipos.count())
    archivos = [] #Creamos la lista







    #ruta = "videos/"+categoria_nombre+"/"+subcategoria_nombre
    return {
        'existe':existen,
        'tipo_jugada':elemento,
        #'ruta':"/media/"+categoria_nombre+"/"+subcategoria_nombre+"/"
    }













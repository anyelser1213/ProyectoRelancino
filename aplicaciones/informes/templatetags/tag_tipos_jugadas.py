from django import template
from atexit import register

from aplicaciones.juegos.models import *

register = template.Library()



@register.simple_tag
def visualizar_tipos(tipo): # Only one argument.
    
    
    #print("El tipo insertado es: ",tipo)
    respuesta = TipoJugadas.objects.get(nombre=tipo.nombre)
    print("respuestas: ",respuesta)
    #return Video.objects.all()
    return respuesta






@register.inclusion_tag('juegos/tipos_de_juegos.html')
def visualizar_tipos2(elemento):

    #print("La categoria insertada es: ", categoria_nombre," y el mes es: ",subcategoria_nombre)
    
    #videos = Video.objects.filter(categoria=categoriaAsig,mes=mesAsig)
    existen = False
    #print("Probando aqui:",videos," cantidad: ",videos.count())
    archivos = [] #Creamos la lista







    #ruta = "videos/"+categoria_nombre+"/"+subcategoria_nombre
    return {
        'existe':existen,
        'tipo_jugada':elemento,
        #'ruta':"/media/"+categoria_nombre+"/"+subcategoria_nombre+"/"
    }

"""


"""
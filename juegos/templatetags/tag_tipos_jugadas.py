from django import template
from atexit import register

from juegos.models import *

register = template.Library()



@register.inclusion_tag('juegos/tipos_de_juegos.html')
def tipos_jugadas():

    #print("La categoria insertada es: ", categoria_nombre," y el mes es: ",subcategoria_nombre)
    
    #videos = Video.objects.filter(categoria=categoriaAsig,mes=mesAsig)
    existen = False
    #print("Probando aqui:",videos," cantidad: ",videos.count())
    archivos = [] #Creamos la lista
    try:

        print("Probando aqui")

    except:

        pass
        #os.path.exists es para saber si existe la ruta
        #print(os.path.exists(os.path.join(settings.MEDIA_ROOT)+"/videos/zulia/enero/"))
        #print("No existe la ruta aqui")












    #ruta = "videos/"+categoria_nombre+"/"+subcategoria_nombre
    return {
        'existe':existen,
        #'archivos':archivos,
        #'ruta':"/media/"+categoria_nombre+"/"+subcategoria_nombre+"/"
    }
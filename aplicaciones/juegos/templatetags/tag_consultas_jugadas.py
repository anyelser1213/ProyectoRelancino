from django import template
from atexit import register

from aplicaciones.juegos.models import *

register = template.Library()



@register.simple_tag
def monto_total(repeticion,monto): # Only one argument.
    
    
    print("Datos insertados: ",repeticion,monto)
    respuesta=repeticion*monto
    print("respuestas: ",respuesta)
    #return Video.objects.all()
    return respuesta








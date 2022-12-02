from django import template
from atexit import register

from aplicaciones.juegos.models import *

register = template.Library()



@register.simple_tag
def tipos_permisos(usuario,tipo): # Only one argument.
    
    usuario_actual = Usuarios.objects.get(username=str(usuario))
    print("El Usuario es: ",usuario_actual.get_all_permissions())

    if usuario_actual.has_perm('juegos.'+tipo):
        print("SI TIENE EL PERMISO: "+tipo)
        return True
    else:
        print("NO TIENE EL PERMISO")
        return False
        #return Video.objects.all()
    





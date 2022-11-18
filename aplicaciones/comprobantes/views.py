from django.contrib.auth.decorators import permission_required
from django.shortcuts import redirect, render
from datetime import datetime

#Clases para las plantillas
from django.views.generic import TemplateView, CreateView, UpdateView, DetailView, ListView, DeleteView

from aplicaciones.juegos.models import TipoJugadas, Jugada,Jugadas_Numeros, Telefono


# Create your views here.


class ConsultarComprobantes(TemplateView):


    template_name = "comprobantes/comprobantes.html"

    def dispatch(self, request, *args, **kwargs):

        if request.user.is_anonymous:
            print("No estas autenticado, eres un usuario anonimo")
            return redirect("login:login")

        else:

            #Para ver todos los permisos que tiene el usuario
            #print(request.user.get_all_permissions())

            print("Probando")
            if request.user.has_perm('juegos.consultarcomprobantes'):
                print("Entramos en ConsultarComprobantes")
            else:

                print("El usuario: ",request.user," no tiene acceso en ConsultarComprobantes")
                return redirect("principal:index")


        return super().dispatch(request, *args, **kwargs)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        
        
        #Solo se mostraran en base a los permisos del usuario
        Q1 = TipoJugadas.objects.none()#Con esto concatenamos los tipos
        numero = int(TipoJugadas.objects.all().count())
        fecha_hoy = datetime.now().date() #Asi obtenemos la fecha actual
        hora_hoy = datetime.now().time() #Asi obtenemos la hora actual


        print(self.request.user.is_superuser)
        if self.request.user.is_superuser:
            context['jugadasComprobantes'] = Jugadas_Numeros.objects.all()
        else:
            context['jugadasComprobantes'] = Jugadas_Numeros.objects.filter(id_usuario=self.request.user)

        
        
        
        
        return context




import datetime
from datetime import datetime
from django.contrib.auth.decorators import permission_required
from django.shortcuts import redirect, render
from django.http import HttpResponseRedirect, JsonResponse

#Clases para las plantillas
from django.views.generic import TemplateView, CreateView, UpdateView, DetailView, ListView, DeleteView


from aplicaciones.juegos.models import TipoJugadas

# Create your views here.

class InformesJugada(TemplateView):

    template_name = "informes/informesJugadas.html"

    def dispatch(self, request, *args, **kwargs):

        if request.user.is_anonymous:
            print("No estas autenticado, eres un usuario anonimo")
            return redirect("login:login")

        else:

            if request.user.has_perm('jugada.consultarjugada'):
                print("Entramos en ConsultarJugada")
            else:

                print("El usuario: ",request.user," no tiene acceso en ConsultarJugada")
                return redirect("principal:index")
            

            
            #empresa_creada = Empresa.objects.filter(creado_por_id=request.user.id)


        return super().dispatch(request, *args, **kwargs)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        
        
        #Solo se mostraran en base a los permisos del usuario
        Q1 = TipoJugadas.objects.none()#Con esto concatenamos los tipos
        numero = int(TipoJugadas.objects.all().count())
        fecha_hoy = datetime.now().date() #Asi obtenemos la fecha actual
        hora_hoy = datetime.now().time() #Asi obtenemos la hora actual

        if numero>0:
            for tipo in TipoJugadas.objects.all():

                print(" ")
                #print(Nombre_Categoria[Nombre_Categoria.index('_')+1:])

                if fecha_hoy <= tipo.fecha_cierre:

                    if hora_hoy >= tipo.hora_inicio and hora_hoy < tipo.hora_cierre:

                        Q1 |= TipoJugadas.objects.filter(nombre=str(tipo.nombre),estado_jugada =True)
                        
                    else:#Fin de horas
                        print("Se cerro la jugada el dia de hoy")

                else:#Else de FECHAS

                    print(tipo," ","(Hora de hoy:",hora_hoy,")", tipo.hora_inicio," ",tipo.hora_cierre, " ","(Fecha de hoy:",fecha_hoy,")","---", tipo.fecha_cierre )
                    

        else:

            print("Ya no se permite la jugada")
                        

        context['tipos_de_jugadas'] = Q1.order_by("cantidad_digitos")

        return context




def api_informes(request):


    if request.method == 'POST':

        print("Probando aqui...")
        
        data={'TotalJugadas':'5'}
        data.update({'MontoTotal':'400'})
        return JsonResponse(data)


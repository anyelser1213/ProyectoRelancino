from django.contrib.auth.decorators import permission_required
from django.shortcuts import redirect, render
from datetime import datetime

#Clases para las plantillas
from django.views.generic import TemplateView, CreateView, UpdateView, DetailView, ListView, DeleteView

from aplicaciones.juegos.models import TipoJugadas, Jugada,Jugadas_Numeros, Telefono

from .form import JugadaForm

    


class IniciarJugada(TemplateView):

    template_name = "juegos/index.html"

    def dispatch(self, request, *args, **kwargs):

        if request.user.is_anonymous:
            print("No estas autenticado, eres un usuario anonimo")
            return redirect("login:login")

        else:

            print("usuario permisos: ",request.user.get_all_permissions())
            print("Estas autenticado GENIAL")
            if request.user.has_perm('juegos.iniciarjugada'):
                print("Entramos en IniciarJugada")

                jugada1 = Jugada.objects.first()
                telefono1 = Telefono.objects.first()
                #Jugadas_Numeros.objects.create()
                

            else:

                print("El usuario: ",request.user," no tiene acceso en IniciarJugada")
                return redirect("principal:index")

            


            #print("usuario permisos: ",request.user.get_all_permissions())
            #print(request.user.has_perm('src.ver_zulia'))
            



            
            #Aqui verificamos si el usuario esta activo para que ingrese
            ''' 
            if request.user.activo:   
                print("Usuario activo y validado")
            else:
                print("El usuario no esta activo")
                messages.add_message(request, messages.INFO, "Usuario Inactivo")
                return redirect("src:logout")
            '''

            #return redirect("src:index")
            #print("Usuario ",request.user)

            #Esto es algo que podria funcionar en algun momento
            #grupo="prueba"
            #print('Proyecto %s' % (grupo))

            

            
            #empresa_creada = Empresa.objects.filter(creado_por_id=request.user.id)


        return super().dispatch(request, *args, **kwargs)

    def get_context_data(self, **kwargs):


        context = super().get_context_data(**kwargs)
        #context['informacion'] = "Hola..."

        #Solo se mostraran en base a los permisos del usuario
        Q1 = TipoJugadas.objects.none()#Con esto concatenamos los tipos
        numero = int(TipoJugadas.objects.all().count())
        fecha_hoy = datetime.now().date() #Asi obtenemos la fecha actual
        hora_hoy = datetime.now().time() #Asi obtenemos la hora actual


        
        print("hora hoy: ",hora_hoy)
        print("fecha hoy: ",fecha_hoy)
        print(self.request.user)

        #jugada1 = TipoJugadas.objects.get(id=1)
        #print("nombre de jugada: ",jugada1)
        #print("hora de inicio de jugada: ",jugada1.hora_inicio)
        #print("hora de cierre de jugada: ",jugada1.hora_cierre)
        #print("fecha de cierre de jugada: ",jugada1.fecha_cierre)

        if numero>0:
            for tipo in TipoJugadas.objects.all():

                print(" ")
                #print(Nombre_Categoria[Nombre_Categoria.index('_')+1:])

                if fecha_hoy <= tipo.fecha_cierre:

                    if hora_hoy >= tipo.hora_inicio and hora_hoy < tipo.hora_cierre:

                        print(tipo," ","(Hora de hoy:",hora_hoy,")", tipo.hora_inicio," ",tipo.hora_cierre, " ","(Fecha de hoy:",fecha_hoy,")","---", tipo.fecha_cierre )    
                        print("Aun se permite la jugada")
                        #Con esto concatenamos queryset
                        Q1 |= TipoJugadas.objects.filter(nombre=str(tipo.nombre),estado_jugada =True)
                        #Q1 |= 

                    else:#Fin de horas
                        print(tipo," ","(Hora de hoy:",hora_hoy,")", tipo.hora_inicio," ",tipo.hora_cierre, " ","(Fecha de hoy:",fecha_hoy,")","---", tipo.fecha_cierre )
                        print("Se cerro la jugada el dia de hoy")

                else:#Else de FECHAS

                    print(tipo," ","(Hora de hoy:",hora_hoy,")", tipo.hora_inicio," ",tipo.hora_cierre, " ","(Fecha de hoy:",fecha_hoy,")","---", tipo.fecha_cierre )
                    
                    print("Se cerro la jugada por fecha")

        else:

            print("Ya no se permite la jugada")
                        
        
        print(Q1)

        

        


        
        

            

        context['tipos_de_jugadas'] = Q1
        #context['tipos_de_jugadas'] = TipoJugadas.objects.all()
        context['JugadaForm'] = JugadaForm()
        context['usuario'] = self.request.user.username
        return context

    


class ConsultarJugada(TemplateView):

    template_name = "juegos/consultar_jugada.html"

    def dispatch(self, request, *args, **kwargs):

        if request.user.is_anonymous:
            print("No estas autenticado, eres un usuario anonimo")
            return redirect("login:login")

        else:

            if request.user.has_perm('juegos.consultarjugada'):
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
                        
        #Con esto concatenamos los tipos
        #Q1 = TipoJugadas.objects.none()
        context['tipos_de_jugadas'] =TipoJugadas.objects.all().order_by("cantidad_digitos")
        #context['tipos_de_jugadas'] = Q1.order_by("cantidad_digitos")

        #Por ahora pedimos 1000 datos
        
        
        return context



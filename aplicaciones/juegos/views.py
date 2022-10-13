
from django.shortcuts import redirect, render
#Clases para las plantillas
from django.views.generic import TemplateView, CreateView, UpdateView, DetailView, ListView, DeleteView

from aplicaciones.juegos.models import TipoJugadas, Jugada

from .form import JugadaForm

    



class IniciarJugada(TemplateView):

    template_name = "juegos/index.html"

    def dispatch(self, request, *args, **kwargs):

        if request.user.is_anonymous:
            print("No estas autenticado, eres un usuario anonimo")
            return redirect("login:login")

        else:

            print("Estas autenticado GENIAL")
            #print("usuario: ",request.user)
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
        context['informacion'] = "Hola..."
        context['tipos_de_jugadas'] = TipoJugadas.objects.all()
        context['JugadaForm'] = JugadaForm()
        return context

    


class ConsultarJugada(TemplateView):

    template_name = "juegos/consultar_jugada.html"

    def dispatch(self, request, *args, **kwargs):

        if request.user.is_anonymous:
            print("No estas autenticado, eres un usuario anonimo")
            return redirect("login:login")

        else:

            print("Entramos en ConsultarJugada")
            

            
            #empresa_creada = Empresa.objects.filter(creado_por_id=request.user.id)


        return super().dispatch(request, *args, **kwargs)

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        #Por ahora pedimos 1000 datos
        
        print(Jugada.objects.all())

        context['jugadas1'] = Jugada.objects.all().order_by('id')[0:100]
        context['jugadas2'] = Jugada.objects.all().order_by('id')[101:200]
        context['jugadas3'] = Jugada.objects.all().order_by('id')[201:300]
        context['jugadas4'] = Jugada.objects.all().order_by('id')[301:400]
        context['jugadas5'] = Jugada.objects.all().order_by('id')[401:500]
        context['jugadas6'] = Jugada.objects.all().order_by('id')[501:600]
        context['jugadas7'] = Jugada.objects.all().order_by('id')[601:700]
        context['jugadas8'] = Jugada.objects.all().order_by('id')[701:800]
        context['jugadas9'] = Jugada.objects.all().order_by('id')[801:900]
        context['jugadas10'] = Jugada.objects.all().order_by('id')[901:1000]

        return context



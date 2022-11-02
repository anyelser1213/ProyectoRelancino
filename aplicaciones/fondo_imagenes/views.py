from django.shortcuts import render
from django.http import HttpResponseRedirect, JsonResponse
from .models import Login

# Create your views here.


def api_login(request):


    if request.method == 'GET':


        data ={}
        try:
            login = Login.objects.first()
            #print("Jamon de pierna",login)

            #En caso de que no exista el objeto
            if login is None:
                print("No hay ningun objeto para el login")
                

            #En caso de que haya objetos login
            else:
                print("Si hay imagenes del login")
                print("--I--")
                if login.fondo_login == "":
                    print("Fondo en null")

                else:
                    print("El fondo login tiene imagen")
                    data={'FondoLogin':login.fondo_login.url}
                    #data.update({'ImagenLogin':str(xxx2.url)})
                    #data.update({'IconPagWeb':str(xxx2.url)})

                
                if login.logo_login == "":
                    print("Logo en null")

                else:
                    print("El fondo login tiene imagen")
                    data.update({'ImagenLogin':str(login.logo_login.url)})
                    data.update({'IconPagWeb':str(login.logo_login.url)})



                print("Fondo del login: ",login.fondo_login)


        except Login.DoesNotExist:
            login = None
            print("No existe nada")
   
        return JsonResponse(data)
"""

        #Variables para probar
        respuestaFondoLogin = ""
        respuestaImagenLogin = ""
        #Con esto aplicamos validaciones
        print("Entramos a la api_login")


        ############# Respuesta para el fondo del login ###############
        try:
            fondoLogin = Login.objects.first().
            print(fondoLogin.imagen)

            if fondoLogin.imagen =="":
                respuestaFondoLogin = "null"
            else:
                respuestaFondoLogin = fondoLogin.imagen.url

        except Fondos.DoesNotExist:
            respuestaFondoLogin = "null"

        datos={'FondoLogin':respuestaFondoLogin}



    ############# Respuesta para la imagenLogin ###############
        try:
            ImagenLogin = Fondos.objects.get(nombre="imagen_login")
            print("Probando")
            #print("imagen: ",ImagenLogin.imagen)
            print("Imagen URL:")
            if ImagenLogin.imagen =="":

                respuestaImagenLogin = "/media/default/default.jpeg"
                #Concatenamos el diccionario
                datos.update({'ImagenLogin':str(respuestaImagenLogin)})

            else:

                respuestaImagenLogin = ImagenLogin.imagen.url
                datos.update({'ImagenLogin':respuestaImagenLogin})
        except Fondos.DoesNotExist:
            respuestaImagenLogin = "null"




        
        #ESTO ES PARA EL ICONO DE LA PAGINA
        try:
            IconoWeb = Fondos.objects.get(nombre="imagen_login")
            if IconoWeb.imagen =="":
                IconoWeb.imagen = "/media/default/default.jpeg"
                #Concatenamos el diccionario
                datos.update({'IconPagWeb':str(IconoWeb.imagen)})
            else:
                #Concatenamos el diccionario
                datos.update({'IconPagWeb':IconoWeb.imagen.url})

        except Fondos.DoesNotExist:

            IconoWeb.imagen = "/media/default/default.jpeg"
            #Concatenamos el diccionario
            datos.update({'IconPagWeb':str(IconoWeb.imagen)})


        #print(fondo)
        #print(fondo.imagen)
        #print(fondo.imagen.url)

        #
        #
        return JsonResponse(datos)

       """ 
        
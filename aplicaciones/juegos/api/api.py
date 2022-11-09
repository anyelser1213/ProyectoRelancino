import json

from django.http import HttpResponse, JsonResponse
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from aplicaciones.juegos.models import TipoJugadas,Jugada,Telefono,Jugadas_Numeros
from aplicaciones.juegos.api.serializers import JugadaSerializer

@api_view(['GET','POST'])
def jugada_api_view(request):


    if request.method == 'GET':
        jugadas = Jugada.objects.all()
        jugadas_serializer = JugadaSerializer(jugadas,many=True)
        return Response(jugadas_serializer.data)
    
    elif request.method == 'POST':

        print("datos",request.data, "Usuario: ",request.user.username,request.user.id)
        #print("datos tipos:  ",request.data.get('tipos'))
        tipos = request.data.get('tipos')
        jugada = str(request.data.get('digitos'))
        numero_telefonico = str(request.data.get('numeros'))
        comprobante = str(request.data.get('comprobante'))

        #Datos que enviaremos
        datos = {}

        #posicion_index = tipos[0].find("_")
        #posicion_index +=1
        #print("Posicion : ",str(tipos[0]).find("_"))
        #print(tipos[0][posicion_index:])

        #Elemento = TipoJugadas.objects.get(nombre=tipos[0][posicion_index:])
        
        print("Tipos Jugados: ",tipos)
        print("Jugada: ",jugada)
        print("Numero: ",numero_telefonico)
        print("Comprobante: ",comprobante)
        #print("Tipo jugada: ",Elemento," Cantidad: ",Elemento.cantidad_digitos)
        for i in tipos:
            
            posicion_index = i.find("_")
            posicion_index +=1
            Elemento = TipoJugadas.objects.get(nombre=i[posicion_index:])
            #print("Tipo: ",Elemento.nombre, " Cantidad", Elemento.cantidad_digitos)
            print("Elemento: ",Elemento," Cantidad: ",Elemento.cantidad_digitos, "monto_jugada: ", Elemento.monto_jugada," cantidad_maxima_repeticion: ",Elemento.cantidad_maxima_repeticion)
            print("Para este elemento usamos solo: ",str(jugada)[0:int(Elemento.cantidad_digitos)])
            
            ###########################################################################################
            #Aqui verificamos si el comprobante ya existe




            ###########################################################################################
 


            ############################################################################################
            #Aqui verificamos si el numero ya existe
            telefono_actual = Telefono.objects.filter(numero_telefono=str(numero_telefonico))
            if telefono_actual.exists():
                
                telefono_a_usar = Telefono.objects.get(numero_telefono=str(numero_telefonico))
                print("Existe este numero, solo lo utlizamos",telefono_a_usar.numero_telefono)
            else:
                print("No existe este numero, lo creamos y lo usamos",numero_telefonico)
                telefono_a_usar = Telefono.objects.create(numero_telefono=str(numero_telefonico))

                print("HEMOS CREADO EL NUMERO: ",telefono_a_usar.numero_telefono)
            
            ###########################################################################################

            #Aqui verificamos si la jugada ya existe
            jugada_actual = Jugada.objects.filter(id_tipo_jugada=Elemento.id,id_usuario=request.user.id,digitos=str(jugada)[0:int(Elemento.cantidad_digitos)])
            if jugada_actual.exists():
                
                jugada_actual = Jugada.objects.get(id_tipo_jugada=Elemento.id,id_usuario=request.user.id,digitos=str(jugada)[0:int(Elemento.cantidad_digitos)])
                print("Ya existe esta jugada",jugada_actual,"Bloquado",jugada_actual.bloquear_repetidor)
                
                #En caso de que tenga el bloqueador de repeticion
                if jugada_actual.bloquear_repetidor == True:
                    
                    print("No se puede ejecutar esta jugada porque tiene bloqueador de repeticiones")
                    datos.update({str(Elemento):"No se ejecuto esta jugada porque tiene bloqueador de repeticiones"})
                

                #En caso de que no se pueda repetir
                elif jugada_actual.repetidor == Elemento.cantidad_maxima_repeticion:

                    print("No se puede ejecutar esta jugada porque alcanzo el limite de repeticiones")
                    datos.update({str(Elemento):"No se ejecuto esta jugada porque se alcanzo el limite de repeticiones de esta jugada"})
                
                #En caso de que se pueda repetir
                else:
                    print("Ejecutando repeticion de la jugada")
                    #datos.update({str(Elemento):"Esta jugada ya existe y se creo una repeticion"})
                    datos.update({str(Elemento):"Ultima Jugada guardada, "+str(jugada)[0:int(Elemento.cantidad_digitos)]})
                
                    jugada_actual.repetidor +=1
                    jugada_actual.save()

                    #Aqui usamos la jugada y asociamos todo
                    Jugada_asociada = Jugadas_Numeros(id_jugada=jugada_actual, id_telefono=telefono_a_usar,id_usuario=request.user)
                    Jugada_asociada.save()

                
            else:#En caso de que no exista la jugada

                print("No existe ninguna jugada asi")
                datos.update({str(Elemento):"Ultima Jugada guardada, "+str(jugada)[0:int(Elemento.cantidad_digitos)]})
                CreandoJugada = Jugada(id_tipo_jugada=Elemento, id_usuario=request.user,digitos=str(jugada)[0:int(Elemento.cantidad_digitos)],repetidor=1)
                Jugada_nueva = CreandoJugada.save()


                #Aqui creamos la jugada y asociamos todo
                Jugada_asociada = Jugadas_Numeros(id_jugada=CreandoJugada, id_telefono=telefono_a_usar,id_usuario=request.user)
                Jugada_asociada.save()

            print(jugada_actual)
        
        #jugada_serializer = JugadaSerializer(data = request.data) #De json a objeto otra ves y guardamos
        

        #print("El tipo de dato es: ",type(datos))

        return JsonResponse(datos,safe = False)
        #return HttpResponse(json.dumps(data), content_type = "application/json")
        
        data={'uno':1,'dos':2}
        return JsonResponse(data,safe = False)
        
        if jugada_serializer.is_valid(): #Verificamos que la data es correcta
            #jugada_serializer.save() #Guardamos la data en base de datos
            return Response(jugada_serializer.data)
        else:
            return Response(jugada_serializer.errors)
        print(request.data)



"""
class JugadaApiView(APIView):

    def get(self, request):
        jugadas = Jugada.objects.all()
        jugadas_serializer = JugadaSerializer(jugadas,many=True)
        return Response(jugadas_serializer.data)
"""








@api_view(['GET','POST'])
def consultarJugada_api_view(request):


    #if request.method == 'GET':
    #    jugadas = Jugada.objects.all()
    #    jugadas_serializer = JugadaSerializer(jugadas,many=True)
    #    return Response(jugadas_serializer.data)
    
    if request.method == 'POST':

        #print("datos",request.data, "Usuario: ",request.user.username, " Id:",request.user.id)
        #print("datos tipos:  ",request.data.get('tipos'))
        tipos = request.data.get('tipos')

        #Datos que enviaremos
        datos = {}

        #posicion_index = tipos[0].find("_")
        #posicion_index +=1
        #print("Posicion : ",str(tipos[0]).find("_"))
        #print(tipos[0][posicion_index:])

        print("usuario: ",request.user," SuperUsuario: ",request.user.is_superuser)
        tipo= TipoJugadas.objects.get(nombre=tipos)
        if request.user.is_superuser:
            
            #SuperUsuario
            #ElementosSinRepetir = Jugada.objects.distinct()
            ElementosSinRepetir = Jugada.objects.values('digitos','repetidor').distinct('digitos')
            print("\n-----")
            #print("INICIANDO: ",ElementosSinRepetir)

            for model in ElementosSinRepetir:
                
                #print(model)
                #print(model['digitos']," ---- ",model['repetidor']) 
                #print(Jugada.objects.filter(digitos=model['digitos']).values('digitos','repetidor')," Cantidad: ",Jugada.objects.filter(digitos=str(model['digitos'])).count())
                

                #Tenemos que entrar en otro for(para incrementar los repetidores)
                aux = 0 #Variable para asignar las repeticiones
                for jugadaIndividual in Jugada.objects.filter(digitos=model['digitos']).values('digitos','repetidor'):
                    #print(jugadaIndividual['digitos']," ---- ",jugadaIndividual['repetidor']) 
                    aux =aux+jugadaIndividual['repetidor']

                model['repetidor'] = aux #Asignamos el valor aqui


                

            #Resultado final
            print(ElementosSinRepetir)



        else:
            #Normal
            ElementosSinRepetir = Jugada.objects.filter(id_tipo_jugada=tipo,id_usuario=request.user.id).values('digitos','repetidor').order_by('digitos')



        

        #print("Tipo de Jugada:",tipo, "Usuario: ",request.user)

        
        
        #print("Jugadas: ",Elemento, Elemento.count())
        #print("Tipo jugada: ",Elemento," Cantidad: ",Elemento.cantidad_digitos)
        

        #print("El tipo de dato es: ",type(datos))

        jugadas_serializer = JugadaSerializer(ElementosSinRepetir,many=True) #El many true es cuando son varios objetos
        
        #print(jugadas_serializer)
        #print(jugadas_serializer.data)

        return JsonResponse(jugadas_serializer.data,safe = False)

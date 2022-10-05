import {csrftoken} from "./cookiesDjango.js";

//Botones generales
var BotonEnviarJugadas = document.getElementById("GuardarJugadas");
var MensajeSubliminal = document.getElementById("MensajeAdvertencia");



//Escuchadores de eventos en javascript
BotonEnviarJugadas.addEventListener('click',function(event) {

    event.preventDefault();



    if(jugadas_activas.length == 0){//Si no hay tipos selecionados no se envia nada

        console.log("No hay tipo elegido");
        MensajeSubliminal.classList.remove("d-none");
        MensajeSubliminal.innerHTML = "Debes seleccionar un tipo y agregar los digitos para la jugada";

    }else{

        if(input_digito.value.length == 0){

            //console.log("No contiene nada");
            MensajeSubliminal.classList.remove("d-none");
            MensajeSubliminal.innerHTML = "Debes agregar los digitos correspondientes<br>Maximo: "+cantidad_maxima+" Digitos<br>Minimo: "+cantidad_maxima+" Digitos";
            
        }else if(input_digito.value.length != cantidad_maxima){
        
            //console.log("Digitos incompletos");
            MensajeSubliminal.classList.remove("d-none");
            MensajeSubliminal.innerHTML = "Los digitos estan incompletos...<br>Maximo: "+cantidad_maxima+" Digitos<br>Minimo: "+cantidad_maxima+" Digitos";
            
        }else{

            //Aqui lo primero es tomar el formulario
            var FormularioJugadas = document.getElementById("FormJugadas");
            var formData = new FormData(FormularioJugadas);



            var data = {username: 'example'};

            console.log("formulario: ",formData);
            console.log("formulario digitos: ",formData.get('digitos'));
            console.log("tipos: ",jugadas_activas);
            console.log("tipos: ",jugadas_activas.length);
            

            //AQUI ES CUANDO ES POST
            fetch("jugada/",{
                    method:"POST",
                    //body: formData,
                    body:JSON.stringify(data),
                    headers:{
                        'Content-Type': 'application/json',
                        "X-CSRFToken":csrftoken,
                        "X-Requestd-With":"XMLGttpRequest"//Con esto indicamos que es una peticion ajax
                    }

            //Promesa de javascript
            }).then(
                function(response){

                    return response.json();
                    //console.log(response.data);
                }//fin de la funcion

            ).then(
                function(data){

                    console.log("datos traidos desde la api: ",data);

                }//fin de la funcion

            ) //fin de then

        }//fin del else



        


        



    }//Fin del else de las condiciones


    

   // AQUI ES CUANDO ES GET
   /* 
   fetch("/jugada",{
            method:"GET",
            headers:{
                "X-CSRFToken":csrftoken,
                "X-Requestd-With":"XMLGttpRequest"//Con esto indicamos que es una peticion ajax
            }

    //Promesa de javascript
    }).then(
        function(response){

            return response.json();
            //console.log(response.data);
        }
    ).then(
        function(data){

            console.log("datos traidos desde la api: ",data);

        }//fin de la funcion
    ) //fin de then
    */
    //document.getElementById("inputImagenModalTeam").click(); 
    
    


});
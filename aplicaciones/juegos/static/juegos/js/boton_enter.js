



document.addEventListener("keydown", (event) => {
    
    
    var codigo = event.key;
    //console.log("Longitud: ",input_digito.value.length);

    console.log("Presionada: " + codigo);
     
    //Aqui vamos a comenzar las validaciones(Se comienza presionando el ENTER)
    if(codigo === "Enter"){
      console.log("Tecla ENTER");



        //AQUI COMENZAMOS CON LAS VALIDACIONES PARA VERIFICAR SI TENEMOS JUGADAS ELEGIDAS
        if(jugadas_activas.length == 0){
            console.log("SIN Jugadas elegidas: ",jugadas_activas);
            var elementos = document.getElementsByName("tipos[]");
            elementos[0].focus()
            console.log(elementos[0]);

            //for(var i = 0, len = elementos.length; i < len; i++) {
            //    console.log(elementos[i]);
            //}


        //EN CASO DE QUE TENGA JUGADAS ELEGIDAS PROCEDEMOS A LA SIGUIENTE VALIDACION(INPUT DE DIGITO)
        }else{





            console.log("CON Jugadas elegidas: ",jugadas_activas);



            //VERFICAMOS SI NO HAY ELEMENTOS EN EL INPUT DE DIGITOS(JUGADA)
            if(input_digito.value.length == 0){

                MensajeSubliminal.classList.remove("d-none");
                MensajeSubliminal.innerHTML = "Debes agregar los digitos correspondientes<br>Maximo: "+cantidad_maxima+" Digitos<br>Minimo: "+cantidad_maxima+" Digitos";
                input_digito.focus();
                return 0;



            //VERFICAMOS QUE HAY ELEMENTOS EN EL INPUT DE DIGITOS PERO INCOMPLETOS
            }else if(input_digito.value.length < cantidad_maxima){

                //console.log("Digitos incompletos");
                MensajeSubliminal.classList.remove("d-none");
                MensajeSubliminal.innerHTML = "Los digitos estan incompletos...<br>Maximo: "+cantidad_maxima+" Digitos<br>Minimo: "+cantidad_maxima+" Digitos";
                input_digito.focus();
                return 0;


            //VERFICAMOS QUE TODOS LOS ELEMENTOS EN EL INPUT DE DIGITOS ESTEN COMPLETOS
            }else{
                
                console.log("Los digitos estan completos");

                if(document.activeElement === input_digito){
                    console.log("FOCUS EN DIGITO");
                    input_numeros.focus();
                    return 0;
                }
                //return 0;

            }


            ///////////////////////////////////////////////////////////////////////////////////////////////
            //////////////AQUI COMENZAMOS VALIDACION DEL NUMERO TELEFONICO/////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////////////////////////



            //VERFICAMOS SI EL INPUT DE NUMEROS ESTA VACIO
            if(input_numeros.value.length == 0){

                //console.log("El campo del telefono esta vacio");
                MensajeSubliminal.classList.remove("d-none");
                MensajeSubliminal.innerHTML = "Debes agregar un numero telefónico...";
                input_numeros.focus();
                return 0;
            
            //VERFICAMOS SI EL INPUT DE NUMEROS ESTA INCORRECTO
            }else if(input_numeros.value.length != 11){

                //console.log("El campo del telefono esta INCORRECTO");
                MensajeSubliminal.classList.remove("d-none");
                MensajeSubliminal.innerHTML = "Debes agregar un numero telefónico correcto";
                input_numeros.focus();
                return 0;

            
            //AQUI ES CUANDO EL INPUT DE NUMEROS ESTA CORRECTO
            }else{

                aux_numero = input_numeros.value;
                console.log("El campo del telefono esta CORRECTO");

                if(document.activeElement === input_numeros){
                    console.log("FOCUS EN NUMERO");
                    input_comprobantes.focus();
                    return 0;
                }else if(document.activeElement === input_comprobantes){
    
                    console.log("FOCUS EN COMPROBANTE");
    
                }
            }


            /////////////////////////////////////////////////////////////////////////////////////////
            //////////////AQUI COMENZAMOS VALIDACION DEL COMPROBANTE/////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////////

            //VERFICAMOS SI EL INPUT DE NUMEROS ESTA VACIO
            if(input_comprobantes.value.length == 0){

                //console.log("El campo del telefono esta vacio");
                MensajeSubliminal.classList.remove("d-none");
                MensajeSubliminal.innerHTML = "Debes agregar un comprobante...<br>Maximo: "+12+" Digitos<br>Minimo: "+4+" Digitos";
                input_comprobantes.focus();
                return 0;
            
            //VERFICAMOS SI EL INPUT DE NUMEROS ESTA INCORRECTO
            }else if(input_comprobantes.value.length <4 ||  input_comprobantes.value.length >12){
                MensajeSubliminal.classList.remove("d-none");
                MensajeSubliminal.innerHTML = "Debes agregar un comprobante correcto...<br>Maximo: "+12+" Digitos<br>Minimo: "+4+" Digitos";
                input_comprobantes.focus();
                return 0;

            //AQUI ES CUANDO EL INPUT DE COMPROBANTES ESTA CORRECTO ESTA CORRECTO
            }else{

                console.log("El campo del COMPROBANTE esta CORRECTO");
            }




            


            /////////////////////////////////////////////////////////////////////////////////////////
            //////////////CUANDO TODO ESTA CORRECTO ENVIAMOS LA DATA/////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////////


            var formData = new FormData(FormularioJugadas);
            MensajeSubliminal.classList.add("d-none"); //alert alert-success
            MensajeSubliminal.innerHTML = "jajajtes<br>Maximo: "+cantidad_maxima+" Digitos<br>Minimo: "+cantidad_maxima+" Digitos";
    


            var data = {"tipos": 
                jugadas_activas,
                'digitos': formData.get('digitos'),
                'numeros': formData.get('numeros'),
                'comprobante': formData.get('comprobante'),
            };


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

                //Esto es para saber la longitud del Json
                //Object.keys(data).length

                //En caso de que no haya ningun mensaje

                if(Object.keys(data).length == 0){

                    console.log("No hay mensajes traidos de la api");
                
                }else{

                    console.log("Hay mensajes traidos de la api");
                    //console.log(Object.keys(data).length);
                    MensajeSubliminal.classList.remove("d-none","alert-danger");
                    MensajeSubliminal.classList.add("alert-primary"); //alert alert-success
                    MensajeSubliminal.innerHTML = "Informacion:<br> ";
                    console.log("datos traidos desde la api: ",data);
                    console.log("tipo de dato: ",typeof data);
                    console.log("datos traidos desde la api: ",data['name']);

                }

                


                //For para agregar los mensaje respectivos
                for (const element in data) {
                    console.log(`${element}: ${data[element]}`);
                    MensajeSubliminal.innerHTML += "<br> "+element+": "+data[element]+" <br>";
                  }




                  FormularioJugadas.reset();

                  input_numeros.value = aux_numero;
                  jugadas_activas = [];

            }//fin de la funcion

        ) //fin de then


            
            



        }//FIN DEL ELSE DE JUGADAS
      
    }

    
    
  });
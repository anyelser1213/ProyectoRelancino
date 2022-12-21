



document.addEventListener("keyup", (event) => {
    
    
    var codigo = event.key;
    //console.log("Longitud: ",input_digito.value.length);

    //console.log("Presionada: " + codigo);
     
    //Aqui vamos a comenzar las validaciones(Se comienza presionando el ENTER)
    if(codigo === "Enter"){
      //console.log("Tecla ENTER");





        //AQUI COMENZAMOS CON LAS VALIDACIONES PARA VERIFICAR SI TENEMOS JUGADAS ELEGIDAS
        if(jugadas_activas.length == 0){
            console.log("SIN Jugadas elegidas: ",jugadas_activas);
            var elementos = document.getElementsByName("tipos[]");
            elementos[0].focus()
            //console.log(elementos[0]);

            //for(var i = 0, len = elementos.length; i < len; i++) {
            //    console.log(elementos[i]);
            //}


        
        
        }else{//EN CASO DE QUE TENGA JUGADAS ELEGIDAS PROCEDEMOS A LA SIGUIENTE VALIDACION(INPUT DE DIGITO)





            console.log("Con Jugadas elegidas: ",jugadas_activas);



            if(input_numeros.dataset.marcado== "true"){

                console.log("Ya pasamos los inputs de los digitos");
            
            }else{

                console.log("Aun estamos en los digitos...");


                /*VERIFICAMOS MANUALMENTE (INPUTS 1)*/
                if(inputs_digitos_globales[0].value.length == 0 || inputs_digitos_globales[0].value.length != cantidad_maxima){

                    console.log("Entramos en el input[0] obligatorio: ",inputs_digitos_globales[0].dataset.marcado);
                    inputs_digitos_globales[0].dataset.marcado = "true";
                    inputs_digitos_globales[0].focus();
                    return 10;


                //VERIFICAMOS LOS OTROS CAMPOS
                }else{


                    
                    for (let index = 1;  index < 5 ; index++) {

                        console.log("Entramos en el inputs[",index,"]");


                        if(inputs_digitos_globales[index].dataset.marcado == "false"){

                            console.log("El marcado es false, inputs[",index,"]");
                            inputs_digitos_globales[index].focus();
                            inputs_digitos_globales[index].dataset.marcado="true";
                            return 10;


                        }else if(inputs_digitos_globales[index].dataset.marcado == "true" && inputs_digitos_globales[index].value.length == 0){


                            
                            //En caso de que sea 4 pasa al input de numeros
                            if(index==4){

                                inputs_digitos_globales[index].dataset.marcado="true";
                                input_numeros.dataset.marcado="true";
                                input_numeros.focus();
                                //return 10;
                            }else{

                                console.log("Sin valor, inputs[",index,"]");
                                inputs_digitos_globales[index].dataset.marcado="true";
                                //inputs_digitos_globales[index+1].dataset.marcado="true";
                                inputs_digitos_globales[index+1].focus();
                                //return 10;

                            }
                            

                        }else if(inputs_digitos_globales[index].dataset.marcado == "true" && inputs_digitos_globales[index].value.length != 0 && inputs_digitos_globales[index].value.length!=cantidad_maxima){

                        
                            inputs_digitos_globales[index].focus();
                            inputs_digitos_globales[index].dataset.marcado="true";
                            return 10;
                        
                        }



                    }//Fin del for
                





                }//fin del else
            
            
            
            
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

            //VERFICAMOS SI EL INPUT DE COMPROBANTES ESTA VACIO
            if(input_comprobantes.value.length == 0){

                //console.log("El campo del telefono esta vacio");
                MensajeSubliminal.classList.remove("d-none");
                MensajeSubliminal.innerHTML = "Debes agregar un comprobante...<br>Maximo: "+12+" Digitos<br>Minimo: "+4+" Digitos";
                input_comprobantes.focus();
                return 0;
            
            //VERFICAMOS SI EL INPUT DE COMPROBANTES ESTA INCORRECTO
            }else if(input_comprobantes.value.length <4 ||  input_comprobantes.value.length >12){
                MensajeSubliminal.classList.remove("d-none");
                MensajeSubliminal.innerHTML = "Debes agregar un comprobante correcto...<br>Maximo: "+12+" Digitos<br>Minimo: "+4+" Digitos";
                input_comprobantes.focus();
                return 0;

            //AQUI ES CUANDO EL INPUT DE COMPROBANTES ESTA CORRECTO ESTA CORRECTO
            }else{
                aux_comprobantes = input_comprobantes.value;

                console.log("El campo del COMPROBANTE esta CORRECTO");
            }




            


            /////////////////////////////////////////////////////////////////////////////////////////
            //////////////CUANDO TODO ESTA CORRECTO ENVIAMOS LA DATA/////////////////////////////////
            /////////////////////////////////////////////////////////////////////////////////////////


            var formData = new FormData(FormularioJugadas);
            MensajeSubliminal.classList.add("d-none"); //alert alert-success
            MensajeSubliminal.innerHTML = "jajajtes<br>Maximo: "+cantidad_maxima+" Digitos<br>Minimo: "+cantidad_maxima+" Digitos";
    


            var lista_digitos = [];
            
            var entrada = document.getElementsByName('digitos[]');
            for (var i = 0; i < inputs_digitos_globales.length; i++) {
                var k ="";
                //k = "array[" + i + "].value= "+ a.value + " ";
                lista_digitos.push(inputs_digitos_globales[i].value);
                
            }
            //for (const itItem of entrada) {
             //   console.log(itItem);
            //  }
            //console.log(entrada);
            console.log(lista_digitos);


            var data = {"tipos": 
                jugadas_activas,
                'digitos': lista_digitos,
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




                  //FormularioJugadas.reset();

                //For para limpiar los inputs de las jugadas
                for (const element in inputs_digitos_globales) {

                    console.log(`${element}: ${data[element]}`);
                    inputs_digitos_globales[element].value ="";
                }

                  input_numeros.value = aux_numero;
                  input_comprobantes.value = aux_comprobantes;
                  //jugadas_activas = [];

            }//fin de la funcion

        ) //fin de then


            
            



        }//FIN DEL ELSE DE JUGADAS
      
    }

    
    
  });
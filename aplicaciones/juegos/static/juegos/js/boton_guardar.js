




//Escuchadores de eventos en javascript
BotonEnviarJugadas.addEventListener('click',function(event) {

    event.preventDefault();

    console.log("Entramos aquii....");

    //var codigo = event.key;
    var codigo = event.which || event.keyCode;
    //console.log("Longitud: ",input_digito.value.length);

    //console.log(event);
    //console.log(event.keyCode);
    //console.log(event.key);
    console.log("Presionada: " + codigo);
     
    //Aqui vamos a comenzar las validaciones(Se comienza presionando el ENTER)
    if(codigo === "Enter"){
      console.log("Tecla ENTER en botonjuardar jajaj");
    //console.log(FormularioJugadas);
    }
    



    if(jugadas_activas.length == 0){//Si no hay tipos selecionados no se envia nada

        console.log("No hay tipo elegido");
        MensajeSubliminal.classList.remove("d-none");
        MensajeSubliminal.innerHTML = "Debes seleccionar un tipo y agregar los digitos y el nº telefonico para la jugada";



    
    }else{//En caso de que se seleccione algun elemento



        if(input_digito.value.length == 0){

            //console.log("No contiene nada");
            MensajeSubliminal.classList.remove("d-none");
            MensajeSubliminal.innerHTML = "Debes agregar los digitos correspondientes<br>Maximo: "+cantidad_maxima+" Digitos<br>Minimo: "+cantidad_maxima+" Digitos";
            
        }else if(input_digito.value.length != cantidad_maxima){
        
            //console.log("Digitos incompletos");
            MensajeSubliminal.classList.remove("d-none");
            MensajeSubliminal.innerHTML = "Los digitos estan incompletos...<br>Maximo: "+cantidad_maxima+" Digitos<br>Minimo: "+cantidad_maxima+" Digitos";
            
        }else if(input_numeros.value.length != 11){

            //console.log("Algo esta incompleto jajajja");
            MensajeSubliminal.classList.remove("d-none");
            MensajeSubliminal.innerHTML = "Debes agregar un numero telefónico correcto";
            input_numeros.focus();
        
        }else if(input_comprobantes.value.length <4 ||  input_comprobantes.value.length >12){

            //console.log("Algo esta incompleto jajajja");
            MensajeSubliminal.classList.remove("d-none");
            MensajeSubliminal.innerHTML = "Debes agregar un comprobante correcto...<br>Maximo: "+12+" Digitos<br>Minimo: "+4+" Digitos";
            input_comprobantes.focus();

        }else{

            //console.clear();
            aux_numero = input_numeros.value;
            aux_comprobantes =  input_comprobantes.value;
            

            var lista_digitos = [];
            
            var entrada = document.getElementsByName('digitos[]');
            for (var i = 0; i < entrada.length; i++) {
                var k ="";
                //k = "array[" + i + "].value= "+ a.value + " ";
                lista_digitos.push(entrada[i].value);
                
            }
            //for (const itItem of entrada) {
             //   console.log(itItem);
            //  }
            //console.log(entrada);
            console.log(lista_digitos);

            var formData = new FormData(FormularioJugadas);
            MensajeSubliminal.classList.add("d-none"); //alert alert-success
            MensajeSubliminal.innerHTML = "jajajtes<br>Maximo: "+cantidad_maxima+" Digitos<br>Minimo: "+cantidad_maxima+" Digitos";
    


            var data = {"tipos": 
                jugadas_activas,
                'digitos': lista_digitos,
                'numeros': formData.get('numeros'),
                'comprobante': formData.get('comprobante'),
            };

            //console.log("formulario: ",formData);
            //console.log("formulario digitos: ",formData.get('digitos'));
            //console.log("tipos: ",jugadas_activas);
            //console.log("tipos: ",jugadas_activas.length);

            //console.log("data: ",data);
            

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
                    //for (const element in data) {
                    //    console.log(`${element}: ${data[element]}`);
                    //    MensajeSubliminal.innerHTML += "<br> "+element+": "+data[element]+" <br>";
                    //  }

                    //MensajeSubliminal.innerHTML += "[ ";
                    for (const element in lista_digitos) {
                        console.log(`${element}: ${lista_digitos[element]}`);
                        MensajeSubliminal.innerHTML += "["+lista_digitos[element]+"]  ";
                    }
                    //MensajeSubliminal.innerHTML += " ]";

                      //MensajeSubliminal.innerHTML = "[ "+lista_digitos{};




                      //FormularioJugadas.reset();
                    for (let index = 0; index < inputs_digitos_globales.length; index++) {
    
                        //console.log(inputs_digitos_globales[index]);
                        //console.log(inputs_digitos_globales[index].value);
                        inputs_digitos_globales[index].value=null;
                        
                    }
                      input_numeros.value = aux_numero;
                      input_comprobantes.value = aux_comprobantes;
                      //Posicionamiento en el primer input
                      inputs_digitos_globales[0].focus();


                }//fin de la funcion

            ) //fin de then

        }//fin del else



        


        



    }//Fin del else de las condiciones


   


});
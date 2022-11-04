

function ConsultarJugadas(tipo){

    console.log("Iniciando aqui...",tipo.id);
    console.log("Monto: ",tipo.dataset.monto);
    console.log("Cantidad digitos: ",tipo.dataset.cantidad_digitos);


    var data = {'tipos': tipo.id};

    fetch("consultarjugada/",{
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
            //console.clear();

            var elemento1  = document.getElementById("jugadas1");
            var elemento2  = document.getElementById("jugadas2");
            var elemento3  = document.getElementById("jugadas3");
            var elemento4  = document.getElementById("jugadas4");
            var elemento5  = document.getElementById("jugadas5");
            var elemento6  = document.getElementById("jugadas6");
            var elemento7  = document.getElementById("jugadas7");
            var elemento8  = document.getElementById("jugadas8");
            var elemento9  = document.getElementById("jugadas9");
            var elemento10  = document.getElementById("jugadas10");

            if(Object.keys(data).length == 0){

                //////////////EN CASO DE QUE NO TRAIGAN DATOS DE LA API///////////////////////
                console.log("No hay mensajes traidos de la api");
                 // Eliminando todos los hijos de la columna jugadas1
                 

                 //Limpieza
                 for (var i = 1; i < 11; i++) {
                    var nombre = "jugadas"+i.toString();var elemento = document.getElementById(nombre)
                    CrearEncabezado(elemento);
                  }








            
            
            }else{

                //////////////EN CASO DE QUE TRAIGAN DATOS DE LA API///////////////////////
                //console.log("Hay mensajes traidos de la api",Object.keys(data).length);
                var cantidad_de_digitos = Number(tipo.dataset.cantidad_digitos);

                //console.log("datos traidos desde la api: ",data);
                //console.log("tipo de dato: ",typeof data," cantidad digitos: ",cantidad_de_digitos);
                //console.log("datos traidos desde la api: ",data['name']);

                //Limpieza
                for (var i = 1; i < 11; i++) {
                    var nombre = "jugadas"+i.toString();var elemento = document.getElementById(nombre)
                    CrearEncabezado(elemento);
                  }


                if(cantidad_de_digitos == 1){//En caso de que solo sea 1 digito

                    //0-9 |0|1|2|3|4|5|6|7|8|9| asi comienza en cada columna

                    


                    for (const element in data) {

                        //Variables a enviar
                        var aux = Number(element)+1; //Para incrementar #
                        var nombre = "jugadas"+aux.toString(); //Nombre de la jugada para llamar al div
                        var digitos = data[element].digitos;
                        var repetidor = data[element].repetidor;
                        var monto_jugada= parseFloat(tipo.dataset.monto);//Esto es solo para hacer el calculo aqui
                        var monto = monto_jugada*repetidor;




                        CrearCuerpo1(aux,nombre,digitos,repetidor,monto);
                        //console.log(element);
                        //console.log("Elemento: ",`${element}`, "Digito: ", `${data[element].digitos}`, "Repeticion: ", `${data[element].repetidor}`);
                        //MensajeSubliminal.innerHTML += "<br> "+element+": "+data[element]+" <br>";
                        
                    
                    
                    
                    }//fin del for



                }else if(cantidad_de_digitos == 2){//En caso de que solo sean 2 digitos

                    //00-99 |00|10|20|30|40|50|60|70|80|90| asi comienza en cada columna

                    //no le hagas caso a elay
                    var inicio = 0;
                    var final = 10;
                    
                    for (const element in data) {

                        
                        //Variables a enviar
                        var aux = Number(element)+1;
                         //Para incrementar #
                        var nombre = "jugadas"+aux.toString(); //Nombre de la jugada para llamar al div
                        var digitos = data[element].digitos;
                        //var repetidor = data[element].repetidor;
                        var monto_jugada= parseFloat(tipo.dataset.monto);//Esto es solo para hacer el calculo aqui
                        //var monto = monto_jugada*repetidor;
                        
                        var nuevaData = data.splice(inicio,final);
                        console.log("Data elegida: ",nuevaData,"inicio: ",inicio," final: ",final);
                        
                        
                        





                        CrearCuerpo2(aux,nombre,digitos,monto_jugada,nuevaData);
                        //console.log(element);
                        //console.log("Elemento: ",`${element}`, "Digito: ", `${data[element].digitos}`, "Repeticion: ", `${data[element].repetidor}`);
                        //MensajeSubliminal.innerHTML += "<br> "+element+": "+data[element]+" <br>";
                    
                    }//fin del for
                    

                    

                
                    
                    
                }else if(cantidad_de_digitos == 3){//En caso de que solo sea un digito

                    //000-999 |000|100|200|300|400|500|600|700|800|900| asi comienza en cada columna





                }else if(cantidad_de_digitos == 4){//En caso de que solo sea un digito

                    //0000-9999 |0000|1000|2000|3000|4000|5000|6000|7000|8000|9000| asi comienza en cada columna


                }else{

                }
                ///Continuara...










                for (const element in data) {
                    
                
                
                }//fin del for



            }//Fin del else






        }//fin de la funcion

    ) //fin de then

}//fin de la funcion consultarJugada







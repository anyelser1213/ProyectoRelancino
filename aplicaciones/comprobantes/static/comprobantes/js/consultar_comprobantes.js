

function ConsultarComprobantes(tipo){

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

            if(Object.keys(data).length == 0){

                //////////////EN CASO DE QUE NO TRAIGAN DATOS DE LA API///////////////////////
                console.log("No hay mensajes traidos de la api");
                 // Eliminando todos los hijos de la columna jugadas1
                 

                 
                 //Hacer limpieza aqui








            
            
            }else{

                //////////////EN CASO DE QUE TRAIGAN DATOS DE LA API///////////////////////
                console.log("Hay mensajes traidos de la api",Object.keys(data).length);
                







            }//Fin del else






        }//fin de la funcion

    ) //fin de then

}//fin de la funcion consultarJugada







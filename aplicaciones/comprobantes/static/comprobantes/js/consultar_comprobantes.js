
var CuerpoTabla = document.getElementById("CuerpoTablaComprobantes");

function ConsultarComprobantes(tipo){

    console.log("Jugada seleccionada...",tipo.id);
    //console.log("Monto: ",tipo.dataset.monto);
    //console.log("Cantidad digitos: ",tipo.dataset.cantidad_digitos);


    var data = {'tipos': tipo.id};

    fetch("obtener_comprobantes_api_view/",{
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
                console.log("Lista traida: ",data);
                
                //Primero limpiamos
                //CuerpoTabla.innerHTML = "";


                //Agregamos elementos de prueba
                var fila = document.createElement("tr");
                var col_1 = document.createElement("td");
                col_1.innerHTML= "as";
                var col_2 = document.createElement("td");
                var col_3 = document.createElement("td");
                var col_4 = document.createElement("td");
                var col_5 = document.createElement("td");
                var col_6 = document.createElement("td");
                fila.appendChild(col_1);
                fila.appendChild(col_2);
                fila.appendChild(col_3);
                fila.appendChild(col_4);
                fila.appendChild(col_5);
                fila.appendChild(col_6);

                //CuerpoTabla.appendChild(fila);






            }//Fin del else






        }//fin de la funcion

    ) //fin de then

}//fin de la funcion consultarJugada







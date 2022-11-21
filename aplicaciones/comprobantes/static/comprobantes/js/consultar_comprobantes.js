
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
                
                //Asi borramos los datos, esta es una forma pero seguramente hay muchas
                CuerpoTabla.innerHTML = "";
                

                console.log("Hay mensajes traidos de la api",Object.keys(data).length);
                console.log("Lista traida: ",data[0]);
                
                //Primero limpiamos,(hay muchas formas de limpiar pero usamos esta por ahora)
                //CuerpoTabla.innerHTML = "";



                
                



                for (var i = 0; i < Object.keys(data).length; i++) {

                    var fila = document.createElement("tr"); //Esto es para crear una fila nueva

                    var col_1 = document.createElement("td");//Esto es para crear un numero secuencial
                    col_1.innerHTML= i+1;

                    var col_2 = document.createElement("td");//Esto es para asignar el digito
                    col_2.innerHTML= data[i].digitos;
                    var col_3 = document.createElement("td");//Esto es para asignar el telefono
                    col_3.innerHTML= data[i].telefono;
                    var col_4 = document.createElement("td");//Esto es para asignar el comprobante
                    col_4.innerHTML= data[i].comprobante;
                    var col_5 = document.createElement("td");//Esto es para asignar el status
                    col_5.innerHTML= data[i].status;


                    //Este condicional es para verificar si esta pagado o por pagar
                    if(1 == 1){

                        var col_6 = document.createElement("td");//Esto es para asignar el status
                        
                        
                        
                        //Aqui metemos el boton candela
                        col_6.innerHTML= data[i].status;
                    
                    }else{

                    }
                    
                    console.log("Elemento "+data[i]);
                    console.log("Digitos "+data[i].digitos);
                    console.log("Telefono "+data[i].telefono);
                    console.log("comprobante "+data[i].comprobante);
                    console.log("status "+data[i].status);



                    fila.appendChild(col_1);
                    fila.appendChild(col_2);
                    fila.appendChild(col_3);
                    fila.appendChild(col_4);
                    fila.appendChild(col_5);
                    fila.appendChild(col_6);

                    CuerpoTabla.appendChild(fila);

                    console.log("\n\n");
                  }
                  

                //Agregamos elementos de prueba
                

                /* AQUI CREAMOS EL BOTON 

                <button type="button" class="btn btn-danger" id={{jugada.id}} data-status="{{jugada.status }}" data-comprobante="{{jugada.id_comprobante.numero_comprobante }}"  onclick="Pagar_Comprobante(this);">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-building-fill-check" viewBox="0 0 16 16">
                                          <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514Z"/>
                                          <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7.256A4.493 4.493 0 0 0 12.5 8a4.493 4.493 0 0 0-3.59 1.787A.498.498 0 0 0 9 9.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .39-.187A4.476 4.476 0 0 0 8.027 12H6.5a.5.5 0 0 0-.5.5V16H3a1 1 0 0 1-1-1V1Zm2 1.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5Zm3 0v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z"/>
                                        </svg> Pagar
                                      </button>
                
                
                */



                var col_6 = document.createElement("td");

                var boton =document.createElement("button")

                //col_6.innerHTML= "as";
                
                //fila.appendChild(col_6);
                
                //CuerpoTabla.appendChild(fila);






            }//Fin del else






        }//fin de la funcion

    ) //fin de then

}//fin de la funcion consultarJugada







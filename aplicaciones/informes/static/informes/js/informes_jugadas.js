


function InformeJugadas(tipo){

    console.clear();
    console.log("Probando jajaj",tipo.id);
    var data = {'tipos': tipo.id};


    //AQUI ES CUANDO ES POST
    
    fetch("api_informes/",{
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

                console.log("Hay mensajes traidos de la api",Object.keys(data).length);


                console.log("datos traidos desde la api: ",data);
                console.log("tipo de dato: ",typeof data);
                //console.log("datos traidos desde la api: ",data['digitos']);

            }

            


            //For para agregar los mensaje respectivos
            for (const element in data) {
                //console.log(`${element}: ${data[element]}`);
                //MensajeSubliminal.innerHTML += "<br> "+element+": "+data[element]+" <br>";
            }





        }//fin de la funcion

    ) //fin de then
        

}//Fin de la funcion ConsultarTipoJugada












function Pagar_Comprobante(tipo){


    //console.log(tipo.dataset.status);
    valor_status = tipo.dataset.status;
    if(valor_status == "Por Pagar"){

        console.log("Esta en Por Pagar");
        Swal.fire({
            title: 'Confirmar Pago de Comprobante: '+tipo.dataset.comprobante,
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Confirmar',
            denyButtonText: `Cancelar`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
    
    
    
    
    
                var data = {"id_comprobante": tipo.id,
                    'comprobante': tipo.dataset.comprobante,
                };
    
    
    
                //AQUI ES CUANDO ES POST
            fetch("pagar_comprobante/",{
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

                    elemento = document.getElementById("comprobante_"+tipo.id);
                    console.log(elemento);
                    console.log(elemento.childNodes[1]); //Numero incremental
                    console.log(elemento.childNodes[3]); //Digito
                    console.log(elemento.childNodes[5]); //Numero Telefonico
                    console.log(elemento.childNodes[7]); //Comprobante
                    console.log(elemento.childNodes[9]); //Status
                    console.log(elemento.childNodes[11].childNodes[1]); //Donde esta el boton


                    elemento.childNodes[9].innerHTML="Pagado";

                    elemento.childNodes[11].childNodes[1].dataset.status="Pagado";
                    elemento.childNodes[11].childNodes[1].className = "btn btn-success";


                    console.log("Hay mensajes traidos de la api");
                    console.log("datos traidos desde la api: ",data);
                    console.log("tipo de dato: ",typeof data);
                    console.log("datos traidos desde la api: ",data['name']);

                }



            }//fin de la funcion

        ) //fin de then
    
    
                //Al final dejamos este mensaje para asegurar todo
                Swal.fire('Comprobante pagado!', '', 'success')
    
    
    
            } else if (result.isDenied) {
    
    
    
              Swal.fire('Cancelado', '', 'error')
            }
          })















    }else{

        console.log("Pagado");
        Swal.fire({
            title: 'Comprobante Pagado',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }

    




}//Fin de la funcion PagarComprobante
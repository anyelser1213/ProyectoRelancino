




function Pagar_Comprobante(tipo){

    //Variables a usar
    var id;
    var estatus;
    var comprobantes;
    var Con_Apis = false;

    //Para evitar errores
    try {
        //Cuando es this(cuando es con api)
        console.log(this.dataset.status,"\n Eviste this(api)");
        id = this.id;
        estatus = this.dataset.status;
        comprobantes = this.dataset.comprobante;
        Con_Apis = true;

        
        
      } catch {

        //Cuando es tipo(cuando normal)
        console.log("\n Existe tipo(normal)");
        id = tipo.id;
        estatus = tipo.dataset.status;
        comprobantes = tipo.dataset.comprobante;
        Con_Apis = false;
        
      }
      
    
    //console.log(this.dataset.status);
    //console.log(tipo.dataset.status);
    //valor_status = tipo.dataset.status;
    if(estatus == "Por Pagar"){

        console.log("Esta en Por Pagar");
        Swal.fire({
            title: 'Confirmar Pago de Comprobante: '+comprobantes,
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: 'Confirmar',
            denyButtonText: `Cancelar`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
    
    
    
    
    
                var data = {"id_comprobante": id,
                    'comprobante': comprobantes,
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



                    //Aqui vamos a aplicar el try-catch-----PENDIENTE
                    elemento = document.getElementById("comprobante_"+id);
                    console.log(elemento);


                    console.log("PROBANDO.....");
                    //Para evitar errores

                    if(Con_Apis){
                        //Cuando es this es normal(con api)
                        console.log("\n CAMBIANDO DATOS CON API");
                        
                        //console.log(elemento.childNodes[0]); //Numero incremental
                        console.log(elemento.childNodes[0]); //Numero incremental
                        console.log(elemento.childNodes[1]); //Digito
                        console.log(elemento.childNodes[2]); //Numero Telefonico
                        console.log(elemento.childNodes[3]); //Comprobante
                        console.log(elemento.childNodes[4]); //Status
                        //console.log(elemento.childNodes[5]); //
                        //console.log("td : ",elemento.childNodes[5]); //Donde esta el boton
                        console.log("boton: ",elemento.childNodes[5].childNodes[0]); //Donde esta el boton
                        console.log("img: ",elemento.childNodes[5].childNodes[0].childNodes[0]); //Donde esta el boton
                        console.log("span: ",elemento.childNodes[5].childNodes[0].childNodes[1]); //Donde esta el boton

                        elemento.childNodes[4].innerHTML="Pagado"; 
                        elemento.childNodes[5].childNodes[0].childNodes[1].innerHTML=" Pagado";

                        elemento.childNodes[5].childNodes[0].dataset.status="Pagado";
                        elemento.childNodes[5].childNodes[0].className = "btn btn-success";

                        //elemento.childNodes[11].childNodes[1].childNodes[3].innerHTML = "Pagado";

                        
                        
                    }else{//Cuando es normal

                        //Cuando es tipo(cuando es sin api)
                        console.log("\n CAMBIANDO DATOS NORMALES SIN API");
                        //console.log(elemento.childNodes[0]); //Numero incremental
                        //console.log(elemento.childNodes[1]); //Numero incremental
                        //console.log(elemento.childNodes[3]); //Digito
                        //console.log(elemento.childNodes[5]); //Numero Telefonico
                        //console.log(elemento.childNodes[7]); //Comprobante
                        //console.log(elemento.childNodes[9]); //Status
                        //console.log("boton: ",elemento.childNodes[11].childNodes[1]); //Donde esta el boton


                        elemento.childNodes[9].innerHTML="Pagado";

                        elemento.childNodes[11].childNodes[1].dataset.status="Pagado";
                        elemento.childNodes[11].childNodes[1].className = "btn btn-success";

                        //console.log("span",elemento.childNodes[11].childNodes[1].childNodes[3]);
                        elemento.childNodes[11].childNodes[1].childNodes[3].innerHTML = "Pagado";
                        
                    }



                    
                    


                    //console.log("Hay mensajes traidos de la api");
                    //console.log("datos traidos desde la api: ",data);
                    //console.log("tipo de dato: ",typeof data);
                    //console.log("datos traidos desde la api: ",data['name']);

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
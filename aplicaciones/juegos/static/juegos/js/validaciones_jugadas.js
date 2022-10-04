

//Tomar input de digitos
input_digito = document.getElementById("id_digitos");

//Variables a usar
var cantidad_maxima = 0;
var jugadas_activas = [];


function verificar_max_min_campo_digitos(tipo){

    //console.log("Probando todo");
    console.clear();
    //console.log(jugadas_activas);
    
    //console.log(tipo);
    //console.log("valor: ",tipo.value);
    //console.log(tipo.id);

    //console.log(tipo.checked);
    
    if(tipo.checked){//En caso de que sea true se verifica y entramos aqui
        //input_digito.
        document.getElementById("id_digitos").focus();

        if(jugadas_activas.length == 0){
            //En caso de que el arrays no tenga ningun elemento agregamos aqui

            jugadas_activas.push(tipo.id);
            

            cantidad_maxima = tipo.value;
            input_digito.setAttribute("maxlength",cantidad_maxima);


        }else{//En caso de que tengamos elementos en el arrays ejecutamos aqui


            if(jugadas_activas.indexOf(tipo.id) == -1){//En caso de que no este el eLlemento en el arrays

                //console.log("Este elemento NO existe en el arrays");
                jugadas_activas.push(tipo.id);

                if(tipo.value >= cantidad_maxima){
                    //En caso de que el elemento tenga un valor mayor a la cantidad maxima ejecutamos
                    cantidad_maxima = tipo.value;
                    input_digito.setAttribute("maxlength",cantidad_maxima);

                }else{
                    //Dejamos el input igual
                }


            }//Fin del if 



        }

    
    }else{//En caso de que sea false desactivamos y verificamos

        console.log(jugadas_activas);
        eliminar = jugadas_activas.indexOf(tipo.id);
        jugadas_activas.splice(eliminar, 1);
        console.log(jugadas_activas);
        

        if(jugadas_activas.length == 0){

            cantidad_maxima = 0;
            input_digito.setAttribute("maxlength",cantidad_maxima);
            cantidad_maxima = 0;

            var temporal = input_digito.value;
            //console.log("quitando seleccion y la cantidad es: ",cantidad_maxima);
            input_digito.value =temporal.substring(0,cantidad_maxima);
            
            

        }else{

            document.getElementById("id_digitos").focus();
            let auxiliar = document.getElementById(''+jugadas_activas[0]);
            let auxiliar2 = auxiliar.value;
            console.log("Cantidad Maxima Actualmente: ",cantidad_maxima);
            for (let i = 1; i < jugadas_activas.length; i++) {

                auxiliar = document.getElementById(''+jugadas_activas[i]);


                if(auxiliar.value > auxiliar2 ){

                    console.log("resultado value interno: ",auxiliar.value);
                    console.log("Cantidad Maxima auxiliar jajaja: ",auxiliar2);
                    auxiliar2 = auxiliar.value;
                    

                //Fin del if
                }else{

                    //No pasa nada aqui
                }

                
            }//fin del for

            cantidad_maxima = auxiliar2;
            var temporal = input_digito.value;
            input_digito.value =temporal.substring(0,cantidad_maxima);

            
            

        }//Fin de else


        

        


        

    }//fin del else principal


    
    console.log(jugadas_activas);

    
}


function valideKey(evt){
    
    // code is the decimal ASCII representation of the pressed key.
    var code = (evt.which) ? evt.which : evt.keyCode;
    
    if(code==8) { // backspace.
      return true;
    } else if(code>=48 && code<=57) { // is a number.
      return true;
    } else{ // other keys.
      return false;
    }
}



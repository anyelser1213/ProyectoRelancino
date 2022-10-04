

//Tomar input de digitos
input_digito = document.getElementById("id_digitos");

//Variables a usar
var tipo_con_cantidad_mas_alta = "";
var ultimo_tipo = "";
var cantidad_maxima = 0;
var jugadas_activas = [];


function verificar_max_min_campo_digitos(tipo){

    //console.log("Probando todo");
    //console.log(tipo);
    //console.log(tipo.value);
    //console.log(tipo.id);

    //console.log(tipo.checked);
    
    if(tipo.checked){//En caso de que sea true se verifica y entramos aqui

        if(jugadas_activas.length == 0){
            //En caso de que el arrays no tenga ningun elemento agregamos aqui

            jugadas_activas.push(tipo.id);
            cantidad_maxima = tipo.value;
            input_digito.setAttribute("max",cantidad_maxima);


        }else{//En caso de que tengamos elementos en el arrays ejecutamos aqui


            if(jugadas_activas.indexOf(tipo.id) == -1){//En caso de que no este el eLlemento en el arrays

                console.log("Este elemento NO existe en el arrays");
                jugadas_activas.push(tipo.id);

                if(tipo.value >= cantidad_maxima){
                    //En caso de que el elemento tenga un valor mayor a la cantidad maxima ejecutamos
                    cantidad_maxima = tipo.value;
                    input_digito.setAttribute("max",cantidad_maxima);

                }else{
                    //Dejamos el input igual
                }


            }//Fin del if 



        }

    
    }else{//En caso de que sea false desactivamos y verificamos

        console.log("quitando seleccion y la cantidad es: ",cantidad_maxima);
        console.log("Este elemento existe en el arrays");
        eliminar = jugadas_activas.indexOf(tipo.id);
        jugadas_activas.splice(eliminar, 1)

        if(jugadas_activas.length == 0){

            cantidad_maxima = 0;
            input_digito.setAttribute("max",cantidad_maxima);

        }else{

            for (let i = 0; i < jugadas_activas.length; i++) {

                let auxiliar = document.getElementById(jugadas_activas[i]);
                console.log(auxiliar);
                console.log("tipo jugada: ",auxiliar.id," value: ",auxiliar.value);

                if(cantidad_maxima > auxiliar.value){
                    cantidad_maxima = auxiliar.value;
                    input_digito.setAttribute("max",cantidad_maxima);
                }//Fin del if
                //const element = array[index];
                
            }//fin del for

        }

        


        

    }


    
    console.log(jugadas_activas);

    
}




//Restablecer a inicio
function Restablecer_Inputs_Digitos(){

    console.log("Entramos en RESTABLECER INPUTS DIGITOS LINEA----5");
    //Aqui ajustamos los rangos limites(Solo al primero)
    for (let index = 0; index < 1; index++) {
        //for (let index = 0; index < probando_botones_globales.length; index++) {

            //console.log(probando_botones_globales[index]);
            //console.log(probando_botones_globales[index].value);
            probando_botones_globales[index].setAttribute("maxlength",cantidad_maxima);
            probando_botones_globales[index].setAttribute("minlength",cantidad_maxima);
            
        }

        //Ajustamos los demas
        for (let index = 1; index < probando_botones_globales.length; index++) {

            probando_botones_globales[index].setAttribute("maxlength",1);
            probando_botones_globales[index].setAttribute("minlength",1);
            
        }

}
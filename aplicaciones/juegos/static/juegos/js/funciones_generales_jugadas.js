

function prueba(){

    console.log("Enfocado",this);
}



//Restablecer a inicio
function Restablecer_Inputs_Digitos(){

    console.log("Entramos en RESTABLECER INPUTS DIGITOS LINEA----5");
    //Aqui ajustamos los rangos limites(Solo al primero)
    for (let index = 0; index < 1; index++) {
        //for (let index = 0; index < inputs_digitos_globales.length; index++) {

            //console.log(inputs_digitos_globales[index]);
            //console.log(inputs_digitos_globales[index].value);
            inputs_digitos_globales[index].setAttribute("maxlength",cantidad_maxima);
            inputs_digitos_globales[index].setAttribute("minlength",cantidad_maxima);
            
        }

        //Ajustamos los demas
        for (let index = 1; index < inputs_digitos_globales.length; index++) {

            inputs_digitos_globales[index].setAttribute("maxlength",0);
            inputs_digitos_globales[index].setAttribute("minlength",0);
            
        }

}//Fin de la funcion Restablecer_Inputs_Digitos




//Asignamos el elemento FOCUS
for (let index = 0; index < inputs_digitos_globales.length; index++) {
    
    console.log("Entramos");
    inputs_digitos_globales[index].addEventListener('click',prueba);
    //inputs_digitos_globales[index].setAttribute("minlength",cantidad_maxima);
    
}//Fin del for
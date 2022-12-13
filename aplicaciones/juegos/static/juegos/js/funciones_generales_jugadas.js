
function valideKey(evt){
    
    // code is the decimal ASCII representation of the pressed key.
    var code = (evt.which) ? evt.which : evt.keyCode;
    console.log("Probando codigo: ",code)
    if(code==8) { // backspace.
      return false;
    } else if(code>=48 && code<=57) { // is a number.
      return true;
    } else if(code==44) { // esto es una coma
        return false;
    } else{ // otras teclas
      return false;
    }
}


function enfoque(){

    //console.log("Enfocado",this);
    this.setAttribute("maxlength",cantidad_maxima);
    this.setAttribute("minlength",cantidad_maxima);

    //Magia con los focus

    


}


function desenfoque(){

    //console.log("Desenfocado",this);

    //console.log("Valor: ",this.value);
    
    if(this.value == ""){
    
        //console.log("esta vacio");
        if(this === document.getElementsByClassName("digito_campo")[0]){
        
            console.log("Es el primer campo");//El primer campo es obligatorio
        
        }else{

            console.log("No es el primer campo");
            this.setAttribute("maxlength",0);
            this.setAttribute("minlength",0);
        }

        //console.log(document.getElementsByClassName("digito_campo")[0]);
        
    
    }else{

    }
    //this.setAttribute("maxlength",cantidad_maxima);
    //this.setAttribute("minlength",cantidad_maxima);
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
    //inputs_digitos_globales[index].addEventListener('focus', (event) => {
    //    event.target.style.background = 'pink';
    //  });

    inputs_digitos_globales[index].addEventListener('focus',enfoque,false);
    inputs_digitos_globales[index].addEventListener('blur',desenfoque,false);
    //inputs_digitos_globales[index].setAttribute("minlength",cantidad_maxima);
    
}//Fin del for
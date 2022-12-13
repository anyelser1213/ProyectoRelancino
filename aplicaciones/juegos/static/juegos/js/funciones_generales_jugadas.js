
function valideKey(evt){
    
    // code is the decimal ASCII representation of the pressed key.
    var code = (evt.which) ? evt.which : evt.keyCode;
    console.log("Probando codigo: ",code)
    if(code==8) { // backspace.
      return false;
    } else if(code>=48 && code<=57) { // is a number.
        
        //Aqui aplicamos para que se direccione al siguiente inputs
        console.log(evt);
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

    inputs_digitos_globales[0].className = "digito_campo  digito_campo_enfoque digito_primero_enfoque";
    inputs_digitos_globales[1].className = "digito_campo  digito_campo_enfoque ";
    inputs_digitos_globales[2].className = "digito_campo  digito_campo_enfoque ";
    inputs_digitos_globales[3].className = "digito_campo  digito_campo_enfoque ";
    inputs_digitos_globales[4].className = "digito_campo  digito_campo_enfoque digito_ultimo_enfoque";

    //console.log(inputs_digitos_globales[0].value.length);
    //console.log("maximo",inputs_digitos_globales[0].getAttribute("maxlength"));
    //console.log("maximo:",this.value.length);


    //HACEMOS LAS VALIDACIONES DE MANERA MANUAL
    //HACEMOS LAS VALIDACIONES DE MANERA MANUAL[0,1,2,3,4]
    //AQUI ES EL INPUT[0]  
    if(this === inputs_digitos_globales[0]){

        console.log("inputs[0]");


    //AQUI ES EL INPUT[1]  
    }else if(this === inputs_digitos_globales[1]){

        console.log("inputs[1]");
        if(inputs_digitos_globales[0].value.length == 0){

            console.log("el input["+0+"] esta vacio");
            inputs_digitos_globales[0].focus();
            
            return 10;

        }//fin de if

    //AQUI ES EL INPUT[2]    
    }else if(this === inputs_digitos_globales[2]){


        for (let index = 0; index < 2; index++) {
        
            //Aqui es cuando entramos en los inputs [0,1,2,3]
            if(inputs_digitos_globales[index].value.length == 0){

                console.log("el input["+index+"] esta vacio");
                inputs_digitos_globales[index].focus();
                
                return 10;
    
            }//fin de if
            
            
            
        }//Fin del for
        

    //AQUI ES EL INPUT[3]    
    }else if(this === inputs_digitos_globales[3]){


        for (let index = 0; index < 3; index++) {
        
            //Aqui es cuando entramos en los inputs [0,1,2,3]
            if(inputs_digitos_globales[index].value.length == 0){

                console.log("el input["+index+"] esta vacio");
                inputs_digitos_globales[index].focus();
                
                return 10;
    
            }//fin de if
            
            
            
        }//Fin del for


    //AQUI ES EL INPUT[4]    
    }else if(this === inputs_digitos_globales[4]){


        for (let index = 0; index < 4; index++) {
        
            //Aqui es cuando entramos en los inputs [0,1,2,3]
            if(inputs_digitos_globales[index].value.length == 0){

                console.log("el input["+index+"] esta vacio");
                inputs_digitos_globales[index].focus();
                
                return 10;

            }//fin de if
            
            
            
        }//Fin del for
    }



       

    



    


}


function desenfoque(){

    //console.log("Desenfocado",this);

    //console.log("Valor: ",this.value);
    
    if(this.value == ""){
    
        //console.log("esta vacio");
        if(this === document.getElementsByClassName("digito_campo")[0]){
        
            //console.log("Es el primer campo");//El primer campo es obligatorio
        
        }else{

            //console.log("No es el primer campo");
            this.setAttribute("maxlength",0);
            this.setAttribute("minlength",0);
        }


        //Magia con los focus

        inputs_digitos_globales[0].className = "digito_campo  digito_campo digito_primero";
        inputs_digitos_globales[1].className = "digito_campo  digito_campo ";
        inputs_digitos_globales[2].className = "digito_campo  digito_campo ";
        inputs_digitos_globales[3].className = "digito_campo  digito_campo ";
        inputs_digitos_globales[4].className = "digito_campo  digito_campo digito_ultimo";

        //console.log(document.getElementsByClassName("digito_campo")[0]);
        
    
    }else{

    }
    //this.setAttribute("maxlength",cantidad_maxima);
    //this.setAttribute("minlength",cantidad_maxima);
}



//Restablecer a inicio
function Restablecer_Inputs_Digitos(){

    //console.log("Entramos en RESTABLECER INPUTS DIGITOS LINEA----5");
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


function avanzarInputs(){

    //console.log("avanzarInputs",this);

    //console.log("Valor: ",this.value);
    if(this === document.getElementsByClassName("digito_campo")[5]){

        //console.log("AQUI YA NO PODEMOS AVANZAR AUTOMATICAMENTE");

    }else if(this === document.getElementsByClassName("digito_campo")[0]){
        
        if(this.value.length == cantidad_maxima){
            inputs_digitos_globales[1].focus();
        }
        //console.log("");//El primer campo es obligatorio
    
    }else if(this === document.getElementsByClassName("digito_campo")[1]){
        
        if(this.value.length == cantidad_maxima){
            inputs_digitos_globales[2].focus();
        }
        //console.log("");//El primer campo es obligatorio
    
    }else if(this === document.getElementsByClassName("digito_campo")[2]){
        
        if(this.value.length == cantidad_maxima){
            inputs_digitos_globales[3].focus();
        }
        //console.log("");//El primer campo es obligatorio
    
    }else if(this === document.getElementsByClassName("digito_campo")[3]){
        
        if(this.value.length == cantidad_maxima){
            inputs_digitos_globales[4].focus();
        }
        //console.log("");//El primer campo es obligatorio
    }
    
    
}//Fin de la funcion AVANZARINPUTS

//Asignamos el elemento FOCUS
for (let index = 0; index < inputs_digitos_globales.length; index++) {
    
    //console.log("Entramos");
    //inputs_digitos_globales[index].addEventListener('focus', (event) => {
    //    event.target.style.background = 'pink';
    //  });

    inputs_digitos_globales[index].addEventListener('focus',enfoque,false);
    inputs_digitos_globales[index].addEventListener('blur',desenfoque,false);

    //Para validar texto
    inputs_digitos_globales[index].addEventListener('keyup',avanzarInputs);
    //inputs_digitos_globales[index].setAttribute("minlength",cantidad_maxima);
    
}//Fin del for
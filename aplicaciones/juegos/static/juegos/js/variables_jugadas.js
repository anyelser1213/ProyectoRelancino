
//Tomar input de digitos
var input_digito = document.getElementById("id_digitos");

var probando_botones_globales = document.getElementsByClassName("digito_campo");

for (let index = 0; index < probando_botones_globales.length; index++) {
    
    console.log(probando_botones_globales[index]);
    console.log(probando_botones_globales[index].value);
    
}



//Tomar input de numeros
var input_numeros = document.getElementById("id_numeros");

console.log(input_numeros);


//Tomar input de numeros
var input_comprobantes = document.getElementById("id_comprobante");

//Variables a usar
var aux_numero;
var aux_comprobantes;
var cantidad_maxima = 0;
var cantidad_minima = 0;
var jugadas_activas = [];
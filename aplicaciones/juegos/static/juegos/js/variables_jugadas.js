
//Tomar input de digitos
var input_digito = document.getElementById("id_digitos");

//Ahora son 5 input de digitos
var probando_botones_globales = document.getElementsByClassName("digito_campo");



//Tomar input de numeros(telefono numerico)
var input_numeros = document.getElementById("id_numeros");



//Tomar input de comprobantes
var input_comprobantes = document.getElementById("id_comprobante");


//Botones generales
var BotonEnviarJugadas = document.getElementById("GuardarJugadas");
var MensajeSubliminal = document.getElementById("MensajeAdvertencia");

//Aqui lo primero es tomar el formulario
var FormularioJugadas = document.getElementById("FormJugadas");

//Variables a usar
var aux_numero;
var aux_comprobantes;
var cantidad_maxima = 0;
var cantidad_minima = 0;
var jugadas_activas = [];
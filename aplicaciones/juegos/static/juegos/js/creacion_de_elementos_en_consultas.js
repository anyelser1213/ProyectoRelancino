


function CrearEncabezado(elemento){

    //console.log("Creamos encabezado");
    while (elemento.firstChild) {
                 
        elemento.removeChild(elemento.firstChild);
    }


    //Div principal(ROW)
   var DivRow = document.createElement("div");
   DivRow.className += "row abs-center";

   //Div columnas(COL)
   var Divcol1 = document.createElement("div");
   Divcol1.className += "col-1 border";

   var Divcol2 = document.createElement("div");
   Divcol2.className += "col-3 border";

   var Divcol3 = document.createElement("div");
   Divcol3.className += "col-2 border";

   var Divcol4 = document.createElement("div");
   Divcol4.className += "col-2 border";
   

   //Parrafos
   var p1 = document.createElement("p");
   var p2 = document.createElement("p");
   var p3 = document.createElement("p");
   var p4 = document.createElement("p");
   p1.className += "consultaP letraPrincipal";
   p2.className += "consultaP letraPrincipal";
   p3.className += "consultaP letraPrincipal";
   p4.className += "consultaP letraPrincipal";
   p1.innerHTML = "#";
   p2.innerHTML = "Num";
   p3.innerHTML = "Rep";
   p4.innerHTML = "Mon";
   
   //Metemos dentro de la columna general el div Row
   elemento.appendChild(DivRow);

   //Metemos las columnas dentro del div row
   DivRow.appendChild(Divcol1); 
   DivRow.appendChild(Divcol2); 
   DivRow.appendChild(Divcol3); 
   DivRow.appendChild(Divcol4); 

   //Metemos los parrafos dentro de los div col
   Divcol1.appendChild(p1); 
   Divcol2.appendChild(p2); 
   Divcol3.appendChild(p3); 
   Divcol4.appendChild(p4);

}//Fin de la funcion CrearEncabezado



//Cuando es un solo digito
function CrearCuerpo1(aux,nombre,digitos,repetidor,monto){

    
    //CrearCuerpo1(aux,nombre,digitos,repetidor,monto);
    var elemento = document.getElementById(nombre);

    //Div principal(ROW)
   var DivRow = document.createElement("div");
   DivRow.className += "row abs-center";

   //Div columnas(COL)
   var Divcol1 = document.createElement("div");
   Divcol1.className += "col-1 border";

   var Divcol2 = document.createElement("div");
   Divcol2.className += "col-3 border";

   var Divcol3 = document.createElement("div");
   Divcol3.className += "col-2 border";

   var Divcol4 = document.createElement("div");
   Divcol4.className += "col-2 border";
   

   //Parrafos
   var p1 = document.createElement("p");
   var p2 = document.createElement("p");
   var p3 = document.createElement("p");
   var p4 = document.createElement("p");
   p1.className += "consultaP letraPrincipal";
   p2.className += "consultaP letraPrincipal";
   p3.className += "consultaP letraPrincipal";
   p4.className += "consultaP letraPrincipal";
   p1.innerHTML = aux;
   p2.innerHTML = digitos;
   p3.innerHTML = repetidor;
   p4.innerHTML = monto;
   
   //Metemos dentro de la columna general el div Row
   elemento.appendChild(DivRow);

   //Metemos las columnas dentro del div row
   DivRow.appendChild(Divcol1); 
   DivRow.appendChild(Divcol2); 
   DivRow.appendChild(Divcol3); 
   DivRow.appendChild(Divcol4); 

   //Metemos los parrafos dentro de los div col
   Divcol1.appendChild(p1); 
   Divcol2.appendChild(p2); 
   Divcol3.appendChild(p3); 
   Divcol4.appendChild(p4);

}//Fin de la funcion CrearCuerpo1













function CrearCuerpo2(aux,nombre,digitos,monto,data){

    
    if(aux ==1){
        console.log("nada");
    }else if(aux == 2){
        aux =11;
    }else if(aux == 3){
        aux =21;
    }else if(aux == 4){
        aux =31;
    }else if(aux == 5){
        aux =41;
    }else if(aux == 6){
        aux =51;
    }else if(aux == 7){
        aux =61;
    }else if(aux == 8){
        aux =71;
    }else if(aux == 9){
        aux =81;
    }else if(aux == 10){
        aux =91;
    }


    for(var i=0;i<Object.keys(data).length;i++){

        //console.log("Probando aqui....",data[i].digitos);
        //CrearCuerpo1(aux,nombre,digitos,repetidor,monto);
        var elemento = document.getElementById(nombre);

        //Div principal(ROW)
        var DivRow = document.createElement("div");
        DivRow.className += "row abs-center";

        //Div columnas(COL)
        var Divcol1 = document.createElement("div");
        Divcol1.className += "col-1 border";

        var Divcol2 = document.createElement("div");
        Divcol2.className += "col-3 border";

        var Divcol3 = document.createElement("div");
        Divcol3.className += "col-2 border";

        var Divcol4 = document.createElement("div");
        Divcol4.className += "col-2 border";
        

        //Parrafos
        var p1 = document.createElement("p");
        var p2 = document.createElement("p");
        var p3 = document.createElement("p");
        var p4 = document.createElement("p");
        p1.className += "consultaP letraPrincipal";
        p2.className += "consultaP letraPrincipal";
        p3.className += "consultaP letraPrincipal";
        p4.className += "consultaP letraPrincipal";
        p1.innerHTML = aux;
        aux+=1;
        p2.innerHTML = data[i].digitos;
        p3.innerHTML = data[i].repetidor;
        p4.innerHTML = monto*data[i].repetidor;
        
        //Metemos dentro de la columna general el div Row
        elemento.appendChild(DivRow);

        //Metemos las columnas dentro del div row
        DivRow.appendChild(Divcol1); 
        DivRow.appendChild(Divcol2); 
        DivRow.appendChild(Divcol3); 
        DivRow.appendChild(Divcol4); 

        //Metemos los parrafos dentro de los div col
        Divcol1.appendChild(p1); 
        Divcol2.appendChild(p2); 
        Divcol3.appendChild(p3); 
        Divcol4.appendChild(p4);

        
    }
                

    

}//Fin de la funcion CrearCuerpo2





function CrearCuerpo3(aux,nombre,digitos,monto,data){

    
    if(aux ==1){
        console.log("nada");
    }else if(aux == 2){
        aux =101;
    }else if(aux == 3){
        aux =201;
    }else if(aux == 4){
        aux =301;
    }else if(aux == 5){
        aux =401;
    }else if(aux == 6){
        aux =501;
    }else if(aux == 7){
        aux =601;
    }else if(aux == 8){
        aux =701;
    }else if(aux == 9){
        aux =801;
    }else if(aux == 10){
        aux =901;
    }

    
    for(var i=0;i<Object.keys(data).length;i++){

        //console.log("Probando aqui....",data[i].digitos);
        //CrearCuerpo1(aux,nombre,digitos,repetidor,monto);
        var elemento = document.getElementById(nombre);

        //Div principal(ROW)
        var DivRow = document.createElement("div");
        DivRow.className += "row abs-center";

        //Div columnas(COL)
        var Divcol1 = document.createElement("div");
        Divcol1.className += "col-1 border";

        var Divcol2 = document.createElement("div");
        Divcol2.className += "col-3 border";

        var Divcol3 = document.createElement("div");
        Divcol3.className += "col-2 border";

        var Divcol4 = document.createElement("div");
        Divcol4.className += "col-2 border";
        

        //Parrafos
        var p1 = document.createElement("p");
        var p2 = document.createElement("p");
        var p3 = document.createElement("p");
        var p4 = document.createElement("p");
        p1.className += "consultaP letraPrincipal";
        p2.className += "consultaP letraPrincipal";
        p3.className += "consultaP letraPrincipal";
        p4.className += "consultaP letraPrincipal";
        p1.innerHTML = aux;
        aux+=1;
        p2.innerHTML = data[i].digitos;
        p3.innerHTML = data[i].repetidor;
        p4.innerHTML = monto*data[i].repetidor;
        
        //Metemos dentro de la columna general el div Row
        elemento.appendChild(DivRow);

        //Metemos las columnas dentro del div row
        DivRow.appendChild(Divcol1); 
        DivRow.appendChild(Divcol2); 
        DivRow.appendChild(Divcol3); 
        DivRow.appendChild(Divcol4); 

        //Metemos los parrafos dentro de los div col
        Divcol1.appendChild(p1); 
        Divcol2.appendChild(p2); 
        Divcol3.appendChild(p3); 
        Divcol4.appendChild(p4);

        
    }
                

    

}//Fin de la funcion CrearCuerpo3



function CrearCuerpo4(aux,nombre,digitos,monto,data){

    
    if(aux ==1){
        console.log("nada");
    }else if(aux == 2){
        aux =1001;
    }else if(aux == 3){
        aux =2001;
    }else if(aux == 4){
        aux =3001;
    }else if(aux == 5){
        aux =4001;
    }else if(aux == 6){
        aux =5001;
    }else if(aux == 7){
        aux =6001;
    }else if(aux == 8){
        aux =7001;
    }else if(aux == 9){
        aux =8001;
    }else if(aux == 10){
        aux =9001;
    }

    
    for(var i=0;i<Object.keys(data).length;i++){

        //console.log("Probando aqui....",data[i].digitos);
        //CrearCuerpo1(aux,nombre,digitos,repetidor,monto);
        var elemento = document.getElementById(nombre);

        //Div principal(ROW)
        var DivRow = document.createElement("div");
        DivRow.className += "row abs-center";

        //Div columnas(COL)
        var Divcol1 = document.createElement("div");
        Divcol1.className += "col-1 border";

        var Divcol2 = document.createElement("div");
        Divcol2.className += "col-3 border";

        var Divcol3 = document.createElement("div");
        Divcol3.className += "col-2 border";

        var Divcol4 = document.createElement("div");
        Divcol4.className += "col-2 border";
        

        //Parrafos
        var p1 = document.createElement("p");
        var p2 = document.createElement("p");
        var p3 = document.createElement("p");
        var p4 = document.createElement("p");
        p1.className += "consultaP letraPrincipal";
        p2.className += "consultaP letraPrincipal";
        p3.className += "consultaP letraPrincipal";
        p4.className += "consultaP letraPrincipal";
        p1.innerHTML = aux;
        aux+=1;
        p2.innerHTML = data[i].digitos;
        p3.innerHTML = data[i].repetidor;
        p4.innerHTML = monto*data[i].repetidor;
        
        //Metemos dentro de la columna general el div Row
        elemento.appendChild(DivRow);

        //Metemos las columnas dentro del div row
        DivRow.appendChild(Divcol1); 
        DivRow.appendChild(Divcol2); 
        DivRow.appendChild(Divcol3); 
        DivRow.appendChild(Divcol4); 

        //Metemos los parrafos dentro de los div col
        Divcol1.appendChild(p1); 
        Divcol2.appendChild(p2); 
        Divcol3.appendChild(p3); 
        Divcol4.appendChild(p4);

        
    }
                

    

}//Fin de la funcion CrearCuerpo4




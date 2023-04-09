
let x,y;
let l=0;
let acierto=0;
let i;
let j;
let iteracion=1000000;
let cont=0;
var cualquiera= [];

function genera_tabla() {

    // Obtener la referencia del elemento body
    // var body = document.getElementsByTagName("body")[0];
    var t = document.querySelector('.tabla');
  
    // Crea un elemento <table> y un elemento <tbody>
    var tabla   = document.createElement("table");
    tabla.classList.add('tabla');
    var tblBody = document.createElement("tbody");
    tabla.innerHTML="";
  
    // Crea las celdas
    for (i = 0; i < 11; i++) {

      while(((iteracion/10)*(i))>l){
        l++;
        x=Math.random()*2;
        y=Math.random()*2;
            if (blanco(x,y)){
            acierto++;
            }
        var pi=4*(acierto/l);
    }
    cualquiera.push(pi);
    console.log(acierto);
    console.log(pi);
        // Crea las hileras de la tabla

      var hilera = document.createElement("tr");
  
      for (j = 0; j < 4; j++) {
        
        if(i==0 && j==0){
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode("Numero de iteraciones");
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
        }
        if(i==0 && j==1){
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode("cantidad de tiros");
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
        }
        if(i==0 && j==2){
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode("cantidad de aciertos");
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
        }
        if(i==0 && j==3){
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode("aproximacion de pi");
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
        }

        if(j==3 && i>0){
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(pi);
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
        }
        if(j==2 && i>0){
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(acierto);
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
        }
        if(j==1 && i>0){
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(l);
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
        }
        if(j==0 && i>0){
            cont++;
            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(cont);
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);
        }
      }
      // agrega la hilera al final de la tabla (al final del elemento tblbody)
      tblBody.appendChild(hilera);
    }

    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    t.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("border", "2");

    // Obtener una referencia al elemento canvas del DOM
    const $grafica = document.querySelector("#grafica");
    // Las etiquetas son las que van en el eje X. 
    var datos= [];
    var etiquetas = [];
    var pie= [];
    for ( i = 0; i < 10; i++) {
        datos.push(parseFloat(cualquiera[i+1]));
        etiquetas.push("Iteracion " + (i+1));
        pie.push(3.1415);
    }

    // Podemos tener varios conjuntos de datos. Comencemos con uno
    const aprox = {
        label: "Aprox de pi",
        data: datos, // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
        backgroundColor: 'rgba(54, 162, 235, 0)', // Color de fondo
        borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
        borderWidth: 1,// Ancho del borde
    };
    const pivalor = {
        label: "Valor de pi",
        data: pie, // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
        backgroundColor: 'rgba(162, 52, 78, 0)', // Color de fondo
        borderColor: 'rgba(200, 50, 50, 1)', // Color del borde
        borderWidth: 1,// Ancho del borde
    };
    new Chart($grafica, {
        type: 'line',// Tipo de gráfica
        data: {
            labels: etiquetas,
            datasets: [
                aprox,pivalor,
            // Aquí más datos...
            ]
         },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }],
            },
        }
    });
 
}

function blanco(x,y){
    if(((x-1)*(x-1)+(y-1)*(y-1)>1)){
        return 0;
    }else{
        return 1;
    }
}

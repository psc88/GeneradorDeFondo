var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

//-------funcion normales sin refactorizacion-------

// color1.addEventListener("input", function() {
//     body.style.background = 
//     "linear-gradient(to right, "
//     + color1.value 
//     +", "
//     + color2.value 
//     + ")";
// })

// color2.addEventListener("input", function() {
//     body.style.background = 
//     "linear-gradient(to right, "
//     + color1.value 
//     +", "
//     + color2.value 
//     + ")";
// })


//--------------refactorizacion --------------
function setGradient() {
    body.style.background = "linear-gradient(to right, " 
    + color1.value 
    +", "
    + color2.value 
    + ")";

    //muestra el color escrito en pantalla
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// -------punto1 - que el fondo aparezca con el color de entrada-------
body.style.background = "linear-gradient(to right, " + color1.value +", "+ color2.value + ")";

// -------punto2 - mostrar la propieda de degradado al iniciar la pagina-------
css.textContent = body.style.background + ";";

// punto3 - agregue un botón aleatorio que genere dos números aleatorios para las entradas de color.-------
function randomColor() {
    var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
    var randomColor2 = Math.floor(Math.random()*16777215).toString(16);
    
    body.style.background = "linear-gradient(to right, " 
    +"#"
    + randomColor1 
    +", "
    +"#"
    + randomColor2 
    + ")";

    css.textContent = body.style.background + ";";
    color1.removeAttribute("value");
    color1.setAttribute("value", "#" + randomColor1);
    color2.removeAttribute("value");
    color2.setAttribute("value", "#" + randomColor2);

    button.style.background = "#" + randomColor1;
}

button.addEventListener("click", randomColor);
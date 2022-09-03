var texto = document.getElementById("texto1");
var boton = document.getElementById("longitud");
var boton2 = document.getElementById("mayuscula");

var btn = function palabra()
{
    alert(`La longitud es: ${texto.value.length}`);
}
boton.addEventListener(`click`,btn)


var btn2 = function palabra2()
{
    alert(`La palabra en mayuscula es  ${texto.toLowerCase}`);
}
boton2.addEventListener(`click`,btn2)


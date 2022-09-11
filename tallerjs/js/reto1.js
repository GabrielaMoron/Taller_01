var texto = document.getElementById("texto1");
var boton = document.getElementById("longitud");
let mayu = document.getElementById('may');

var btn = function palabra()
{
    alert(`La longitud es: ${texto.value.length}`);
}
boton.addEventListener(`click`,btn)


let maya=function buena(){
    const texto = document.getElementById('texto').value;
     alert(`La palabra en mayuscula es : ${texto}`+texto.toUpperCase());
}; mayu.addEventListener(`click`, maya)

//3
var minu= document.getElementById('min');
minu.addEventListener('click', function(){
    const texto = document.getElementById('texto').value;
    window.alert('La palabra covertida "${texto}" a minúsculas es'+ texto.toLowerCase());
});

//4
let pCaracter = document.getElementById('pCaracter');
pCaracter.addEventListener('click',function(){
    const texto = document.getElementById('texto').value;
    window.alert('El primer caracter de la palabra ${texto} es  '+ texto.charAt());
});
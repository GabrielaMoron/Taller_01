let texto = document.getElementById("texto1");
let boton = document.getElementById("longitud");
let deslizar = document.getElementById("rojo");
let cambio = document.getElementById("morado");
let display = document.getElementById("pantalla");

function palabra()
{
    alert(`La longitud es: ${texto.value.length}`);
}
boton.addEventListener(`click`,palabra)


deslizar.addEventListener(`mouseover`, function() 
{
    deslizar.classList.replace("rojo","azul")
});

deslizar.addEventListener(`mouseout`, function() 
{
    deslizar.classList.replace("azul","rojo")
});


cambio.addEventListener(`click`, function()
{
    cambio.classList.replace("morado","lila")
});


display.addEventListener(`click`, () => {
    console.log('Acabas de pinchar');
    console.log('Dejaste de pinchar');
});
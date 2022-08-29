let frutas= []
let ejecutar
ejecutar = prompt("ingrese la cantidad de  ingredientes para hacer un pastel de fruta")
 ejecutar = parseInt(ejecutar)
for(pastel=0;pastel<ejecutar;pastel++){
    ingre=prompt("ingrese los ingredientes")
    frutas.push(ingre)
}
ejecutar.forEach(function (cap, ep, array) {
    console.info(cap, ep);
})
alert(frutas)

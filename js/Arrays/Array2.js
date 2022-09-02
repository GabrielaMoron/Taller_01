let ejecutar

ejecutar = prompt("ingrese la cantidad de  ingredientes para hacer un pastel de fruta")
 ejecutar = parseInt(ejecutar)
let frutas= []

for(pastel=0; pastel < ejecutar;pastel++){


    let ingre=prompt("ingrese los ingredientes")
    frutas.push(ingre)
   

}
frutas.forEach(ejecutar => {
    console.log(ejecutar,[]);
  
})
alert(frutas)

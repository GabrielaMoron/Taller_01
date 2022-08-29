
 let ejecutar
ejecutar = prompt("ingrese la cantidad de colores que le gustan entre 1 y 5")
 ejecutar = parseInt(ejecutar)
 
 for (let count = 0; count < ejecutar; count++) {
let opc1= prompt("elija sus color que le gusta, 1.rojo 2.verde 3.amarillo 4.morado 5.azul")
opc1=parseInt(opc1)

switch(opc1){

     case 1: 
     alert (" rojo")
     break;
     case 2: 
     alert (" verde")
    
     break;
     case 3: 
     alert ("amarillo")
     break;
     case 4: 
     alert ("morado")
     break;
     case 5: 
     alert ("azul")
     break;
}
     
     }
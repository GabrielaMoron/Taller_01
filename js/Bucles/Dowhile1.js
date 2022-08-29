
 let precioFinal = 0
 let precioa = 0
 let preciob = 0
 let ejecutar
 let pedido
 let adicion
 let incremento = 0
 let seguir = true
 
 do {
 
     pedido = prompt("ingrese su pedido")
     adicion = prompt("ingrese la adiciòn que desea ")
 
     incremento = incremento + 1
 
     if (adicion == "papa salada") {
         precioa = 1000
     } else if (adicion == "gaseosa") {
         precioa = 1500
     } else if (adicion == "papas fritas") {
         precioa = 1000
     } else if (adicion == "postre") {
         precioa = 2000
     } else {
         alert("adicion no disponible , lo sentimos. ")
         console.log("adicion no disponible, lo sentimos. ")
         precioa = 0
     }
 
     if (pedido == "pizza") {
         preciob = 3000
     } else if (pedido == "lasaña") {
         preciob = 6000
     } else if (pedido == "hamburguesa") {
         preciob = 5000
     } else if (pedido == "perro caliente") {
         preciob = 7000
     } else {
         alert("producto no disponible, lo sentimos. ")
         console.log("producto no disponible, lo sentimos. ")
         preciob = 0
     }
 
     seguir = confirm("desea realizar otro pedido")
 }
 
 while (seguir != false)
 
 precioFinal = (precioa + preciob) * incremento
 alert("su cuenta es " + " $" + precioFinal + " y el numero de pedidos es " + incremento)
 console.log("su cuenta es " + " $" + precioFinal + " y el numero de pedidos es " + incremento)
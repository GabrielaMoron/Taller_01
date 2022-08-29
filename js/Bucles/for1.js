
/*En  la tienda se solicita el pedido, las adicion y la cantidad de pedidos que desea realizar, mostrara el total de su pedido y
 si no hay el producto que dese se le mostrarà el "producto no disponible" */
 let precioFinal = 0
 let precioa = 0
 let preciob = 0
 let ejecutar
 let pedido
 let adicion 
 
 ejecutar = prompt("ingrese la cantidad de pedidos a realizar")
 ejecutar = parseInt(ejecutar)
 
 for (let count = 0; count < ejecutar; count++) {
 
	 pedido = prompt("ingrese su pedido")
	 adicion = prompt("ingrese la adiciòn que desea ")
 
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
 
 }
 
 precioFinal = (precioa + preciob) * ejecutar
 alert("su cuenta es " + " $" + precioFinal)
 console.log("su cuenta es " + " $" + precioFinal)
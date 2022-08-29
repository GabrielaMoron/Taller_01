// Reto 2 alcancia

let dinero= 0
let  ahorro = 0
let confirmar = true

while (confirmar != false) {

    dinero = prompt("Ingrese la cantidad de dinero que desea ahorrar")
    dinero = parseInt(dinero)
    ahorro =  dinero + ahorro

    console.log("usted dijo:" + confirmar)
    confirmar = confirm("Desea continuar ingresando dinero?")

}

alert("La cantidad de dinero que tiene en su alcancia es:" + ahorro)

console.log("La cantidad de dinero que tiene en su alcancia es:" + ahorro)
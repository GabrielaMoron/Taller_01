// Reto 1 grados

let gradosC
let gradoF

      gradoF = prompt("Ingrese los grados Fahrenheit a convertir")
      gradoF = parseInt(gradoF)
      gradoC = (gradoF - 32) / 1.8

             alert("El total es:" + gradoC)
             alert(`El  total es: ${gradoC}`)
             console.log("El total es:" + gradoC)
             console.log(`El total es: ${grados}`)

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

// Reto 3 datos personales

let nombre
let apellido
let edad
let tel


        nombre = prompt("Ingrese su nombre")
        apellido = prompt("Ingrese su apellido")
        edad = prompt("Ingrese edad")
        tel = prompt("Ingrese su telefono")

        alert("Su nombre es:" + nombre + "su apellido es:" 
        + apellido + "su edad es:" + edad + "su telefono es:" + tel)
        console.log("Su nombre es:" + nombre + "su apellido es:" + apellido
        + "su edad es:" + edad + "su telefono es:" + tel)

    //Bar

 let mayor

    mayor = prompt("Ingrese su edad")

    if (mayor >= 18) {
         alert(" bienvenido al Bar ")
                console.log(" bienvenido al Bar")
}

    else if (mayor < 18 && mayor> 0) {
        alert("Eres menor de edad, no puedes ingresar")
            console.log("Eres menor de edad, no puedes ingresar")
}
        else {
             alert("ingrese una edad valida")
             console.log("ingrese una edad valida")
            }
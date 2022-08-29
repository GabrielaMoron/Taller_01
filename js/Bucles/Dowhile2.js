let lloviendo,viento
let incremento = 0
let seguir = true
do {
lloviendo=prompt("ingrese true si esta lloviendo, de lo contrario ingrese false")
viento=prompt("ingrese true si hay viento, de lo contrario ingrese false")

if(lloviendo==true) {
    
    alert("Esta lloviendo y hara frio, no salga sin su paraguas")
    console.log("Esta lloviendo y hara frio, no salga sin su paraguas")
} 
else if (lloviendo==true&&viento==false) {
alert ("no hay viento, pero si esta lloviendo")
console.log("no hay viento, pero si esta lloviendo")
}

else if(viento==true) {
    alert ("no esta lloviendo pero si hay viento, no olvides tu abrigo")
console.log("no esta lloviendo pero si hay viento, no olvides tu abrigo")

} else{
    alert ("no esta lloviendo y no hay nada de viento, disfruta el clima")
console.log("no esta lloviendo y no hay nada de viento, disfruta el clima")
}
seguir = confirm("desea realizar otro pronostico?")
}

while (seguir != false)
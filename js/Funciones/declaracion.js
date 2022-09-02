
function mayor() {
    let persona=prompt(" ingresa tu nombre ")

    let edad=prompt("ingresa tu edad")
    edad=parseInt(edad)


    if(edad >= 18){

        alert(`Bienvenid@ ${persona} tu edad es ${edad} puedes entrar al bar`);
               }else if(edad>=1 && edad<18){
       
        alert(`lo sentimos ${persona} tu edad es ${edad}  no puedes entrar al bar`);
       }
        else if(edad<1){
       
        alert(` ${persona} por favor ingresa un  valor valido`);
       
       }
    }
    mayor();

  

 let cantidad
 let meses = []
 let mes
 let cont;

cantidad = prompt("Cuantos meses quiere digitar: ");
cantidad = parseInt(cantidad);

for(let i = 0; i < cantidad; i++)
{
    cont = i +1;
    mes = prompt("Digite el nombre del mes " + cont);
    meses.push(mes);
    console.log(meses);
}

meses.forEach(cantidad => {
    console.log(cantidad,[]);
   
});
alert(meses)
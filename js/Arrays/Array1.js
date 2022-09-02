let netflix= []
for(serie=0;serie<5;serie++){
    plataforma=prompt("ingrese  las cinco series de netflix que le gusten más")
    netflix.push(plataforma)
}
netflix.forEach(function (cap, ep, array) {
    console.info(cap, ep);
})
alert(netflix)
console.log(netflix)


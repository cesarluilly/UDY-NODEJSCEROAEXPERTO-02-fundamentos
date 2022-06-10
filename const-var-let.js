var nombre = "Wolverine";

//  //Los prblemas de var, es que son de ambito global.
if (true){
    var nombre = "Magneto";
}

console.log(nombre);

console.log("-----------------------------------------------");

let OtroNombrenombre = "Wolverine";

//  //Los prblemas de var, es que son de ambito global.
if (true){
    let OtroNombrenombre = "Magneto";
}
console.log(OtroNombrenombre);

console.log("-----------------------------------------------");

//  //Como recomendacion, es que todos las declaracion ya no utilizemos
//  //  no las utilizemos como var, que mejor en lugar de eso utilizemos
//  //  simmpre constatns ademas de que son mas ligeras, y en caso de 
//  //  que sus valor cambies, 
//  //  
const OtroNombrenombre2 = "Wolverine";

//  //Los prblemas de var, es que son de ambito global.
if (true){
    const OtroNombrenombre2 = "Magneto";
}
console.log(OtroNombrenombre2);






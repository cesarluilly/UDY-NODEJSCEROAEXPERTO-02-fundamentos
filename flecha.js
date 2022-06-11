//  //Funcion tradicional
function sumar(a, b){
    return a + b;
}
console.log(sumar(5, 10));

console.log("Example 2************************************");

//  //Funcion de flecha.
const sumarFlecha = (a, b = 5) => {
    return a + b;
};
console.log(sumarFlecha(5));

console.log("Example 3************************************");
//  //Elementos importantes de funciones de flecha.

//  //Funcion de flecha.
const sumarFlecha2 = (a, b = 5) => a + b ;
console.log(sumarFlecha2(5));


const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    edad: 50,
    getNombre: function(){
        return `${this.nombre} ${this.apellido}`
    }
};

console.log(deadpool.getNombre());

//  //Para evitar este codigo para extraer estas
//  // propiedades necesitamos hacerlo de manera mas
//  // eficiente.   
const nombre1 = deadpool.nombre; 
const apellido1 = deadpool.apellido; 
const poder1 = deadpool.poder; 
console.log(nombre1, apellido1, poder1);

console.log("1*************************************");

//  //Aplicando desescructuracion.
//  //Ojo, Aque se tienen que poner las propiedades tal
//  // como vienen en el objeto.
const {nombre2, apellido, poder, edad = 0 } = deadpool;
console.log(nombre2, apellido, poder, edad);

console.log("2*************************************");
function imprimeHeroe(heroe) {
    const {nombre, apellido, poder, edad = 0 } = deadpool;
    console.log(nombre, apellido, poder, edad);
}

imprimeHeroe();

console.log("3*************************************");
function imprimeHeroe2({nombre, apellido, poder, edad = 0 }) {
    console.log(nombre, apellido, poder, edad);
}

imprimeHeroe2(deadpool);

console.log("4*************************************");
//  //Tambien podemos desescructurar arreglos.

//  //Ejemplo SIN desescructuracion.
const heroes = ['Deadpool', 'Superman', 'Batman'];

const h0 = heroes[0];
const h1 = heroes[1];
const h2 = heroes[2];

console.log(h0, h1, h2);

console.log("5*************************************");
//  //Ejemplo de desescructuracio de arreglos.

const [hh1, hh2, hh3] = heroes;
console.log(hh1, hh2, hh3);











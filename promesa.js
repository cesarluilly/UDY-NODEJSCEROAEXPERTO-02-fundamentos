const empleados = [
    {
    id:1,
    nombre: 'Cesar'
    },
    {
    id:2,
    nombre: 'Linda'
    },
    {
    id:3,
    nombre: 'Karen'
    }
];

const salarios = [
    {
    id:1,
    salario: 1000
    },
    {
    id:2,
    salario: 1500
    }
];

//  //Promesa que devuelve el empleado
const getEmpleado = (id) => {
    
    //  //El resolve es algo que nosotros vamos a llamar cuando
    //  //  todo se hace correctamente.
    //  //El reject es algo que nosotros vamos a ejecutar
    //  //  si sucede un erro.
    return new Promise((resolve, reject) => {
        const empleado = empleados.find((e) => {
            return e.id === id})?.nombre;
        if (empleado) {
            resolve(empleado);
        }
        else
        {
            //  //el reject es algo asi como lanzar una excepcion.
            //  //  y esto es algo que tiene que ser controlado con 
            //  //  catch.
            reject(`No existe empleado con id ${id}`)
        }
        
    });
}

//  //Promesa que devuelve el salario.
const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(s => s.id === id)?.salario;
        (salario)  
            ? resolve(salario)
            : reject(`No existe el salario con id ${ id }`);
    });
};

//  //NOTA. TODAS LAS PROMESAS TIENEN QUE SER CONTROLADOS.
const id = 10;
console.log("Example 1************************************");
//  //Aqui devolvemos el empleado y el salario por separado.
//  //Mandamos a llamar las promesas.
// getEmpleado(id)
//     .then(empleado => console.log(empleado))
//     .catch(err => console.log(err));

// getSalario(id)
//     .then(salario => console.log(salario))
//     .catch(err => console.log(err));    

console.log("Example 2************************************");
//  //Aqui vamos a devolver el empleado junto con su salario
//  //  para resolver la problematica que teniamos con callback hell
//  //  (del archivo callbackhell.js).
//  //De esta forma logramos resolverlo, PERO si nos damos cuenta
//  //  dentro de un then ejecutamos otra promesa y eso es dificil
//  //  de mantener con el tiempo.
// getEmpleado(id)
//     .then( empleado => {

//         getSalario(id)
//             .then( salario => {
//                 console.log('El empleado:', empleado, 'tiene un salario de: ', salario);

//             })
//             .catch(err => console.log(err));
//     })
//     .catch(err => console.log(err));

console.log("Example 3************************************");
//  //Ejercicio del video 24 - Promesas en cadena.
//  //Lo que se quiere devolver es el empleado junto con su salario.

let nombre;
getEmpleado(id)
    .then(empleado => {
        nombre = empleado;
        //  //como esto devuelve una promesa, no necesito
        //  //  ponerle el .then al getSalario si no que 
        //  //  el then los ponemos en cadena eso significa
        //  //  que el siguiente then pertenece al del 
        //  //  getSalario.
        return getSalario(id);
    })
    .then( salario => console.log('El empleado ', nombre, 'tiene un salario de: ', salario))
    .catch(err => console.log(err));
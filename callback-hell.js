//  //

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

console.log("Example 1************************************");
//  //Ejemplo tradicional.
// const getEmpleado = (id) => {
//     const empleado = empleados.find((e) => {
//         return e.id === id
//     });

//     if( empleado )
//     {
//         return empleado;
//     }
//     else {
//         return `Empleado con id ${id} no existe`;
//     }

//     return empleado;
// }

// console.log(getEmpleado(1));

console.log("Example 2************************************");
//  //Ejemplo utilizando callbacks.

// const getEmpleado = (id, callback) => {
//     const empleado = empleados.find((e) => {
//         return e.id === id
//     });

//     if ( empleado )
//     {
//         //  //En este caso, si sabemos que lo que le pasamos
//         //  // al callback si es un empleado.
//         callback(empleado);
//     }
//     else {
//         //  //Este es una de las problematicas de callbacks, 
//         //  // ya que en este punto no se sabe si lo que le 
//         //  // pasamos a la funcion es un callback
//         callback(`Empleado con id ${id} no existe`);
//     }

// }

// //  //Nota. Aqui le estamos pasando un ID de un empleado que 
// //  // no existe.
// console.log(getEmpleado(5, (empleado) => {
//     console.log(empleado);
// }));

console.log("Example 3************************************");
//  //SOLUCION AL EJEMPLO 2(anterior)
//  //NOTA. De esta forma hay muchos ejemplos de como funcionan alguns callbacks 
//  // y esta manera de hacerlo, es muy comun ya que so soluciones rapidas.

const getEmpleado = (id, callback) => {
    const empleado = empleados.find((e) => {
        return e.id === id
    });
    if ( empleado )
    {
        //  //En este caso, si sabemos que lo que le pasamos
        //  // al callback si es un empleado.

        //  //En este caso, como si se esta mandando el empleado, 
        //  // significa que no hay un error y por eso ponemos null
        callback(null, empleado);
    }
    else {
        //  //Este es una de las problematicas de callbacks, 
        //  // ya que en este punto no se sabe si lo que le 
        //  // pasamos a la funcion es un callback
        callback(`Empleado con id ${id} no existe`);
    }
}

//  //Nota. Aqui le estamos pasando un ID de un empleado que 
//  // no existe.
console.log(getEmpleado(10, (err, empleado) => {
    //  //Si el error existe.
    if ( err ) {
        console.log('Error!!');
        
        return console.log(err);
    }
    console.log('Empleado existe');
    console.log(empleado);
}));

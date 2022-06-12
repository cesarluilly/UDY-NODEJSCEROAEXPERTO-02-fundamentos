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
        return e.id === id})?.nombre;
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

// //  //Nota. Aqui le estamos pasando un ID de un empleado que 
// //  // no existe.
getEmpleado(10, (err, empleado) => {
    //  //Si el error existe.
    if ( err ) {
        console.log('Error!!');
        return console.log(err);
    }
    console.log('Empleado existe');
    console.log(empleado);
})

console.log("Example 4************************************");
//  //Devolver el salario.

const getSalario = (id, callback) => {
    const salario = salarios.find((s) => 
        s.id === id)?.salario;

    if (
        //  //hay un valor en la variable s
        salario
    ) {
        callback(null, salario);
    } else {
        callback(`Salario con id ${id} no existe`);
    }
};

getSalario(1, (error, salario) => {
    if (
        //  //hay algo en error o existe.
        error
    ) {
        return console.log(error); 
    } 
    console.log(salario);
})

console.log("Example 5************************************");
//  //Aqui realmente viene lo del CALLBACK HELL, ya que si yo necesitara
//  // el nombre del usuario y despues concatenarle su salario junto
//  // con el id, nosotros tendriamos que hacer una carpinteria UN POCO
//  // INCOMODA como lo siguiente. 

//  //Nota. Que exista el empleado, no significa que tambien va a existir
//  // su salario.

const getEmpleadoYSalario = (id, callback) => {
    const empleado = empleados.find((e) => {
        return e.id === id})?.nombre;
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

//  //NOTA. SI NOSOTROS PROBAMOS CON EL ID 3 (que si hay un empleado pero no tiene salario)
//  // probamos, entonces no nos va a dar el resultado, al menos de que tiene un nombre.
//  //PERO AQUI EL CALLBACK HELL es cuando llamamos callback dentro de otro callback, y eso se vuelve 
//  // complicado despues, entonces por eso HAY QUE EVITARLO.
const id = 3;
getEmpleadoYSalario(id, (err, empleado) => {
    //  //Si el error existe.
    if ( err ) {
        return console.log(err);
    }

    getSalario(id, (error, salario) => {
        if (
            //  //hay algo en error o existe.
            error
        ) {
            return console.log(error); 
        } 
        
        console.log('El empleado:', empleado, 'tiene un salario de: ', salario);
    });
});
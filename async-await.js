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

console.log("Example 1************************************");
// //  //Invocacion de una funcion asincrona para que devuelva 
// //  //  una promesa.
// const getInfoUsuario = async() => {
//     return 'Hola Mundo';
// };

// getInfoUsuario().then(msg => console.log(msg));
// const id = 1;

console.log("Example 2************************************");

const id = 1;
const getInfoUsuario = async(id) => {
    try {
        //  //El await se tiene que invocar en una funcion que 
        //  //  trabaje con una promesa.
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario del empleado: ${ empleado} es 
            de ${ salario }`;        
    } catch (error) {
        return error; 
        //  //O comentamos el return error; y descomentamos
        //  //  lo de abajo para ver el comportamiento.
        
        //throw error;
    }
};

getInfoUsuario(3)
    .then(msg => {
        console.log('TODO BIEN!');        
        console.log(msg)
    })
    .catch(err => {
        console.log('TODO MAL!');        
        console.log(err)
    });











































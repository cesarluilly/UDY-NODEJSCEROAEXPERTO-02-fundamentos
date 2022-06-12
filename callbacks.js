//  //El setTimeOut es una funcion que ejecuta un callback 
//  // en cierto momento del tiempo.

console.log("Example 1************************************");

// //  //Lo que estamos diciendo aqui es que esta funcion que recibe
// //  // el setTimeOut se va a ejecutar despues de 1 segundo.
// setTimeout(function(){
//     console.log("Hola mundo");    
// }, 1000)

console.log("Example 2************************************");

// const getUsuarioByID = (id1, id2) => {
//     const usuario = {
//         //  //Nota. Aqui decimos que el id1 que se recibe de parametro
//         //  // se va assignar al id1 del objeto
//         id1,
//         id2 : id2,
//         nombre : 'Cesar'
//     }

//     //  //Ahora vamos a hacer una simulacion con setTimeOut como si estuvieramos
//     //  // agregando elementos a la DB.
//     setTimeout(() => {
//         console.log(usuario);
//     }, 3000)
// };

// getUsuarioByID(10, 11);

console.log("Example 3************************************");
//  //

// const getUsuarioByID = (id1, id2) => {
//     const usuario = {
//         //  //Nota. Aqui decimos que el id1 que se recibe de parametro
//         //  // se va assignar al id1 del objeto
//         id1,
//         id2 : id2,
//         nombre : 'Cesar'
//     }

//     //  //Ahora vamos a hacer una simulacion con setTimeOut como si estuvieramos
//     //  // agregando elementos a la DB.
//     setTimeout(() => {
//         console.log(usuario);
//     }, 3000)
// };

// //  //Si nos damos cuenta, no se esta disparando hola mundo, ya
// //  // precisamente el metodo no esta recibiendo el callback.
// getUsuarioByID(10, 11, () => {
//     console.log("Hola mundo");
// });

console.log("Example 4************************************");

//  //

const getUsuarioByID = (id1, id2, callback) => {
    //  //Aqui hacemos una simulacion de que esta es informacion
    //  // que se manda a la DB.
    const user = {
        //  //Nota. Aqui decimos que el id1 que se recibe de parametro
        //  // se va assignar al id1 del objeto
        id1,
        id2 : id2,
        nombre : 'Cesar'
    }

    //  //Ahora vamos a hacer una simulacion con setTimeOut como si estuvieramos
    //  // agregando elementos a la DB.
    setTimeout(() => {
        callback(user)
    }, 3000)
};

getUsuarioByID(10, 11, (usuario) => {
    console.log(usuario);
});




console.log("Example 5************************************");

















































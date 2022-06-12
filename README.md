# UDY-NODEJSCEROAEXPERTO-02-fundamentos

<style>
    red { color: red; }
    yellow { color: yellow }
    orange {color: orange}
    green {color: green}
    blue { color: blue}
</style>

<!-- La forma de utilizar estilos es
    <red>Texto algo</red>
 -->

## Video 16 Const vs Let vs Var>
### [Ver archivo const-var-let.js](./const-var-let.js)
* `var` no es recomendable ya que este trata a nivel de context 
incluso si se declara dentro de un metodo, ya que lo estara 
poniendo en un contexto global, 

* `let` es recomendable
ya que si se declara dentro de un metodo, el contexto de 
esa declaracion solo es visble dentro del metodo.

* `const` debemos acostumbrarnos a que todo lo que declaremos 
lo hagamos con const ya que es mas ligero, a menos de que su valor se llegara a modificar en algun otro punto, 
entonces ahora si ya escojeremos
a `let` pero siempre hay que acostumbrarnos a elegir `const` 
ya que incluso si lo declaramos dentro de un metodo, este estara
visible en ese contexto del metodo.

## Video 17 Templates literales
### [Ver archivo template-string.js](./template-string.js)

Los templates se logran hacer con los simbolos ``` `cadena o ${variable}` ``` y de esa forma tenemos mas ventajas al escribir cadenas y por eso es importante ubicar rapidamente estas teclas en el teclado. 

## Video 18 Desescructuracion de objetos.
### [Ver archivo desescructuracion.js](./desescructuracion.js)
La desescruturacion es importante para ahorrar codigo para acceder a todas las variables de una funcion, 
objeto, etc. y de esa forma es mas entendible y rapido de codificar.

```
const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    edad: 50,
    getNombre: function(){
        return `${this.nombre} ${this.apellido}`
    }
};

const {nombre2, apellido, poder, edad = 0 } = deadpool;
console.log(nombre2, apellido, poder, edad);
```

## Video 19 Funciones flecha
### [Ver archivo flecha.js](./flecha.js)

Las funciones de flecha son indispensables, un ejemplo seria el siguiente.
```
//  //Funcion de flecha.
const sumarFlecha = (a, b = 5) => {
    return a + b;
};
console.log(sumarFlecha(5));


//  //Funcion de flecha.
const sumarFlecha2 = (a, b = 5) => a + b ;
console.log(sumarFlecha2(5));
```

## Video 20 Callbacks.
### [Ver archivo callbacks.js](./callbacks.js)

Un termino que es dificil de comprender, y es que un callback 
no es mas que una funcion que se va a ejecutar despues de un cierto
punto del tiempo.

La cosa es que los callbacks no son mas que una funcion que se manda
como argumento a otra funcion.

```
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
```

## Video 21 Problemas comunes con los callbacks
### [Ver archivo callback-hell.js](./callback-hell.js)
Asi como se plantea la solucion, asi hay muchos lugares en nodejs
que utilizan esta misma forma a contruir los callbacks.

```

console.log('Example 3************************************');
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


```

## Video 22 Callback Hell
### [Ver archivo callback-hell.js](./callback-hell.js)
Un callback hell es cuando llamamos a callbacks dentro de otro callback, 
es algo que hay que evitarlo, porque si lo hacemos nos puede complicar el codigo
despues.

```
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
```

## Video 23 Promesas
### [Ver archivo **promesa.js**](./promesa.js)
Las promesas en javascript son algo que nos ayuda muchisimo a trabajar con
el `callback hell` pero si no lo usamos bien, puede resultar incluso mas confuso
que el propio callback hell.

```
console.log("Example 2************************************");
//  //Aqui vamos a devolver el empleado junto con su salario
//  //  para resolver la problematica que teniamos con callback hell
//  //  (del archivo callbackhell.js).
//  //De esta forma logramos resolverlo, PERO si nos damos cuenta
//  //  dentro de un then ejecutamos otra promesa y eso es dificil
//  //  de mantener con el tiempo.
getEmpleado(id)
    .then( empleado => {

        getSalario(id)
            .then( salario => {
                console.log('El empleado:', empleado, 'tiene un salario de: ', salario);

            })
            .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
```
**El el siguiente video, se mostrara la solucion para este tipo
de casos**

## Video 24 Promesas en cadena
### [Ver archivo **promesa.js**](./promesa.js)
Tomando como base las promesas construidas en el 
video 23 vamos a resolver el ultimo ejercicio del 
[video 23](#video-23-promesas) de una mejor manera.

```
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
```

## Video 25 Async - Await
### [Ver archivo async-await.js](./async-await.js)

Asycn y await es un termino muy popular que rodea el mundo de
las promesas.

> En pocas palabras el await le dise 'esperate aqui hasta que
tengas la respuesta de la promesa, y cuando tengas la respuesta
de la promesa se la asignas al lugar donde sea que se necesite
'

> <orange>El unico inconveniente es que el **await** tiene que
estar dentro de una funcion o metodo **asincrono**</orange>

Cuando al invocar un metodo asincrono y le ponemos punto para 
seleccionar `then` para que la funcion la conviertamos en
una promesa devuelta.
```
console.log("Example 1************************************");
//  //Invocacion de una funcion asincrona para que devuelva 
//  //  una promesa.
const getInfoUsuario = async() => {
    return 'Hola Mundo';
};

getInfoUsuario().then(msg => console.log(msg));
```

***
Ahora vamos a resolver el ejercicio del [video 24](#video-24-promesas-en-cadena) con async await.
```
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
```























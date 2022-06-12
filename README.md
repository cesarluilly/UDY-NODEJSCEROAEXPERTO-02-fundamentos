# UDY-NODEJSCEROAEXPERTO-02-fundamentos

## Video 16 Const vs Let vs Var

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

Los templates se logran hacer con los simbolos ``` `cadena o ${variable}` ``` y de esa forma tenemos mas ventajas al escribir cadenas y por eso es importante ubicar rapidamente estas teclas en el teclado. 

## Video 18 Desescructuracion de objetos.
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

































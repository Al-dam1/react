// Primera forma de crear funciones

// function greet(name:string):string{
//      return `Hola ${name}!!`;

// const message = greet('Goku');
// console.log(message);

//funciones de flecha: sirven para crear funciones de manera mas rapida y sencilla
const greet2 = (name:string)=>`Hola ${name}!!`;

const message2 = greet2('Vegetta');
console.log(message2);

//ejercicio con funcion de flechas
function getUsuarioActivo(nombre:string){
    return{
        uid:'ABC-567',
        username: nombre,
    };
}

const saludo = ()=>{
    return {
        uid:'ABC-123',
        username: 'EL_Papi23',
    };
}
const user2 = saludo();
console.log(user2);

interface User{
    uid: string;
    username: string;
}


function getUser (){ //esta es una funcion que retorna un objeto
    ({
        uid:'ABC-123',
        username: 'EL_Papi23',
    });
}
const user= getUser();
console.log(user);


// const myNumbers :number[] = [1,2,3,4,5];
// myNumbers.forEach(function(value){
//     console.log({value});
    
// })

//ESTO ES UNA FUNCION DE FLECHA Y SIRVE PARA    Declarar funciones de manera mas rapida y sencilla
const myNumbers :number[] = [1,2,3,4,5];
myNumbers.forEach((value)=>{
    console.log({value});
    
});
myNumbers.forEach(console.log); //esta es otra forma de declarar una funcion de flecha

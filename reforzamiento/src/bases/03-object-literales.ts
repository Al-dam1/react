//interface
interface Person{
    firstName: string;
    lastName: string;
    age: number;
    address?:Address; 
} 
interface Address{ //esta interfaces en typescript es una forma de definir la estructura de un objeto, es decir, que propiedades tiene y que tipo de datos son
        postalCode: string;
        city: string;   
    }
const iroman: Person = {
    firstName: 'Damian',
    lastName: 'Alderete',
    age: 30,
    address: {
        postalCode: '1000',
        city: 'Springfield',
    }   
};  
const spiderman: Person = {
    firstName: 'Peter',
    lastName: 'Parker',
    age: 25,
};
console.log(iroman);
console.log(spiderman);

// const spiderman = structuredClone(iroman); //es una forma de clonar un objeto, pero no es compatible con todos los navegadores 

// spiderman.name = 'Damian Nicolas';
// spiderman.lastName= 'parker';
// spiderman.age = 40;
// spiderman.address.street = 'Calle Falsa';
// console.log(iroman, spiderman);

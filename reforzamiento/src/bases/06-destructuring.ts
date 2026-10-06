//La destructuración es una forma de extraer valores de arreglos u objetos y asignarlos a variables. Esto permite acceder a los valores de manera más sencilla y legible.
const person = {
    name: 'Juan',
    age: 30,
    key: 'Iroman',
};

// const {key,name:ironmanName,age} = person;

// console.log(name,age,key);

interface Hero{
    name:string;
    age:number;
    key:string;
    rank?:string;
}
const useContext = ({key,name,age,rank='Sin Rango'}:Hero)=>{
    return{
        keyName:key,
        user:{
            name,
            age,
        },
        rank:rank,
    };
};
// const {rank} = useContext(person);
//esto es destructuración de objetos, se puede hacer de esta manera para extraer los valores de un objeto y asignarlos a variables.
const {
    rank,
    keyName,
    user,
    // user:{name}
} = useContext(person);
const {name} = user;

console.log({rank,keyName, name});









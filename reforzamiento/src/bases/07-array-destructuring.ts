//esto es destructuración de arreglos, se puede hacer de esta manera para extraer los valores de un arreglo y asignarlos a variables.
const characterNames = ['goku', 'vegeta', 'trunks', 'gohan', 'piccolo'];
const [,,trunks] = characterNames
console.log({trunks});

const returnArray = ()=> {
    return ['ABC', 123] as const;
}
const [letters, numbers] = returnArray();
console.log(letters , numbers);


const useState = (value: string) => {
    return [value, (newvalue:string)=>{
        console.log(newvalue);
        
    },
] as const;
};

const [name, setName] = useState('Goku');
console.log(name);       // Goku
setName('Vegeta');       // Imprime: Vegeta

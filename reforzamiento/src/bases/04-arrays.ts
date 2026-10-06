const myArrays:number[] = [1, 2, 3, 4, 5,6]; //esta es una forma de declarar un array en typescript, y le estamos diciendo que solo puede contener 

const myArrays2 = structuredClone(myArrays); //esta es otra forma de declarar un array en typescript, y le estamos diciendo que solo puede contener numeros

myArrays2.push(7);
console.log({myArrays,myArrays2})

for (const myNumber of myArrays) {
   console.log(myNumber + 10);
}
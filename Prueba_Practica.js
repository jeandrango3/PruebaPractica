//Crea una variable llamada "nombre" y asígnale tu nombre como valor.
Let nombre = “Jessica”;
//Crea una función llamada "suma" que reciba dos parámetros (a y b) y retorne la suma //de ambos.
function suma(a, b){
Let resultado = a+b;
Console.log(resultado)
}
suma(3,2)
//Escribe un condicional que verifique si una persona es mayor de edad. Si es mayor de edad, //imprime "Es mayor de edad", de lo contrario, imprime "Es menor de edad".
let edad=15;
if(edad >= 18) {
    accion = 'Es mayor de edad'
} else { 
    accion = 'Es menor de edad '
}
console.log(accion);

//Crea un ciclo "for" que imprima los números del 1 al 5.
for(let i=1 ; i<=5; i++){
console.log(i)
}

//Crea una función llamada "imprimirArray" que reciba como parámetro un array y lo imprima //elemento por elemento. 
function imprimirArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
const miArray = [1, 2, 3, 4, 5];
imprimirArray(miArray);
//¿Cuánto es 2 + 2? Respuesta: 4
//El bucle while se va arepetir hasta que el usuario responda correctamente la pregunta 
i = 0;
while (i != 4) {
    i = prompt("¿Cuánto es 2 +2 ?");
}


//Crea una función llamada "primerElementoArray" que reciba como parámetro un array y //retorne el primer elemento.
let array = [1,2,3,4]
function primerElementoArray(array) {
  if (array.length > 0) {
    return array[0];
  } 
}

var primerElemento = primerElementoArray(miArray);
console.log(primerElemento)

//Crea una función llamada "imprimirElementosArray" que reciba como parámetro un array y lo //imprima usando un ciclo "for".
let miarray = [1,2,3,4]

function imprimirElementosArray(array) {
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}
imprimirElementosArray(miarray);


/*Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
 *Implemente la función denominada sumNumbers que toma un array de números como argumento
 *y devuelve la suma de todos los números de la matriz.*/
const numbers = [1, 2, 3, 5, 45, 37, 58];

//Practicando con foreach tras haberlo hecho con for normal. 
function sumNumber(numbers) {
  let count = 0;
  numbers.forEach(function (number) {
    count += number;
  })
  return count;
}
let count = sumNumber(numbers);
console.log(count);





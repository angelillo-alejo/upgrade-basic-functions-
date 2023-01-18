/* Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.*/

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];

let count = 0;
const otroArray = [];
function repeat (array) {
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array.length; j++) {
      if (array[i] === array[j]) {
        count++;
      }
    }
    if (!otroArray.includes(array[i])) {
      otroArray.push(array[i], count);
    }
    count = 0;
  }
}
repeat (counterWords);
console.log(otroArray);



/*Completa la función que tomando un array de strings como argumento devuelva el más largo, 
en caso de que dos strings tenga la misma longitud deberá devolver el primero.*/

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

let max = '';
function find(element) {
  for (let i = 0; i < element.length; i++) {
    if (element[i].length > max.length) {
       max = element[i]
    }
  }
}
find(avengers);
console.log(max);
//Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:
const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numbers) {
  let count = 0;
  numbers.forEach (function(number){
    count += number;
  })
  count = count /numbers.length;
  return count;
 
}

let count = average(numbers) ;
console.log(count);
/*Crea una función que reciba por parámetro un array y compruebe si existen elementos 
duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados.*/

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function deletes (element) {
    for (let i = 0; i < element.length; i++) {
      for (let j = 0; j < element.length; j++) {
        if (element[i] === element[j] && i !== j) {
            element.splice(j, 1);
        } 
      }
    }
  }
  deletes (duplicates)
  console.log(duplicates)
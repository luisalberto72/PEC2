// La función 'findOne' busca un elemento en una lista utilizando un par key-value,
// y devuelve una promesa que se resolverá con el elemento encontrado o se rechazará con un mensaje de error.
const findOne = (list, { key, value }) => {
    // Se devuelve una nueva promesa que contiene la búsqueda del elemento
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Busca el elemento en la lista utilizando el método 'find' de los arrays.
        const element = list.find(element => element[key] === value);
        // Si se encuentra el elemento, se resuelve la promesa con el elemento encontrado,
        // de lo contrario, se rechaza la promesa con un objeto de mensaje de error.
        element ? resolve(element) : reject({ msg: 'ERROR: Element Not Found' });
      }, 2000); // Retraso de 2000 milisegundos (2 segundos) antes de ejecutar la búsqueda.
    });
  };
  
  // Array de usuarios.
  const users = [
    {
      name: 'Carlos',
      rol: 'Teacher'
    },
    {
      name: 'Ana',
      rol: 'Boss'
    }
  ];
  
  // Ejecución de la función 'findOne' con un par key-value que se espera que tenga éxito.
  console.log('findOne success');
  // Se pasa el array de usuarios y un objeto con la key 'name' y el value 'Carlos' para buscar dicho elemento.
  // Se consume la promesa usando 'then' para manejar el éxito y 'catch' para manejar el error.
  findOne(users, { key: 'name', value: 'Carlos' })
    .then(element => console.log(`user: ${element.name}`)) // Si la promesa se resuelve con éxito, se imprime el nombre del usuario.
    .catch(error => console.log(error.msg)); // Si la promesa se rechaza, se imprime el mensaje de error.
  
  // Ejecución de la función 'findOne' con un par key-value que se espera que falle.
  console.log('findOne error');
  // Se pasa el array de usuarios y un objeto con la key 'name' y el value 'Fermin' para buscar este elemento
  // (que no existe en el array).
  // Se consume la promesa usando 'then' para manejar el éxito (que no ocurrirá en este caso) y 'catch' para manejar el error.
  findOne(users, { key: 'name', value: 'Fermin' })
    .then(element => console.log(`user: ${element.name}`)) // Esta parte del código no se ejecutará debido al rechazo de la promesa.
    .catch(error => console.log(error.msg)); // Si la promesa se rechaza, se imprime el mensaje de error.
  
  /*
  Resultado esperado:
  findOne success
  findOne error
   // Esperar 2 segundos
  user: Carlos
  ERROR: Element Not Found
  */
  
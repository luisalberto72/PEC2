// La función 'findOne' busca un elemento en una lista utilizando un par key-value,
// y ejecuta una función de éxito o una función de error después de un retraso de 2000 milisegundos.
const findOne = (list, { key, value }, { onSuccess, onError }) => {
    setTimeout(() => {
      // Busca el elemento en la lista utilizando el método 'find' de los arrays.
      const element = list.find(element => element[key] === value);
      // Si se encuentra el elemento, se llama a la función 'onSuccess' con el elemento encontrado,
      // de lo contrario, se llama a la función 'onError' con un objeto de mensaje de error.
      element ? onSuccess(element) : onError({ msg: 'ERROR: Element Not Found' });
    }, 2000); // Retraso de 2000 milisegundos (2 segundos) antes de ejecutar la búsqueda.
  };
  
  // Función de éxito que imprime el nombre del usuario en la consola.
  const onSuccess = ({ name }) => console.log(`user: ${name}`);
  // Función de error que imprime el mensaje de error en la consola.
  const onError = ({ msg }) => console.log(msg);
  
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
  // Se pasa el array de usuarios, un objeto con la key 'name' y el value 'Carlos' para buscar dicho elemento,
  // También se pasan los objetos que contienen las funciones de éxito y error definidas anteriormente.
  findOne(users, { key: 'name', value: 'Carlos' }, { onSuccess, onError });
  
  // Ejecución de la función 'findOne' con un par key-value que se espera que falle.
  console.log('findOne error');
  // Se pasa el array de usuarios, un objeto con la key 'name' y el value 'Fermin' para buscar este elemento
  // (que no existe en el array), y los objetos que contienen las funciones de éxito y error definidas anteriormente.
  findOne(users, { key: 'name', value: 'Fermin' }, { onSuccess, onError });
  
  /*
  Resultado esperado:
  findOne success
  findOne error
   // Esperar 2 segundos
  user: Carlos
  ERROR: Element Not Found
  */
  
  
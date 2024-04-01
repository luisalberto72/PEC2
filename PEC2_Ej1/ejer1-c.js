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
  
  // Función asincrónica que maneja la ejecución de 'findOne' con async/await
  const execFindOne = async () => {
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
  
    try {
      // Ejecución de la función 'findOne' con un par key-value que se espera que tenga éxito.
      console.log('findOne success');
      // Se consume la promesa usando 'await' para esperar la resolución de la misma.
      const element = await findOne(users, { key: 'name', value: 'Carlos' });
      console.log(`user: ${element.name}`); // Si la promesa se resuelve con éxito, se imprime el nombre del usuario.
    } catch (error) {
      console.log(error.msg); // Si la promesa se rechaza, se imprime el mensaje de error.
    }
  
    try {
      // Ejecución de la función 'findOne' con un par key-value que se espera que falle.
      console.log('findOne error');
      // Se consume la promesa usando 'await' para esperar la resolución de la misma.
      const element = await findOne(users, { key: 'name', value: 'Fermin' });
      console.log(`user: ${element.name}`); // Esta parte del código no se ejecutará debido al rechazo de la promesa.
    } catch (error) {
      console.log(error.msg); // Si la promesa se rechaza, se imprime el mensaje de error.
    }
  };
  
  // Llamada a la función para ejecutar 'findOne' con async/await.
  execFindOne();
  
  /*
  Resultado esperado:
  findOne success
  findOne error
   // Esperar 2 segundos
  user: Carlos
  ERROR: Element Not Found
  */

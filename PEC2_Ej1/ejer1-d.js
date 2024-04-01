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

// Función asincrónica que maneja la ejecución paralela de 'findOne' con async/await
const execFindOneParallel = async () => {
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
        // Ejecución paralela de las funciones 'findOne' con un par key-value que se espera que tenga éxito.
        console.log('findOne parallel');
        // Se usa Promise.all para ejecutar todas las llamadas a 'findOne' en paralelo.
        const results = await Promise.all([
            findOne(users, { key: 'name', value: 'Carlos' }),
            findOne(users, { key: 'name', value: 'Fermin' }).catch(error => error) // Añadimos catch para manejar el rechazo de la promesa sin detener la ejecución de Promise.all
        ]);
        // Si todas las promesas se resuelven con éxito, se imprime el nombre de cada usuario encontrado.
        results.forEach(element => {
            if (!element.msg) {
                console.log(`user: ${element.name}`);
            } else {
                console.log(element.msg);
            }
        });
    } catch (error) {
        console.log(error.msg); // Si alguna de las promesas se rechaza, se imprime el mensaje de error correspondiente.
    }
};

// Llamada a la función para ejecutar 'findOne' en paralelo con async/await.
execFindOneParallel();

/*
Resultado esperado:
findOne parallel
 // Esperar 2 segundos
user: Carlos
ERROR: Element Not Found
*/

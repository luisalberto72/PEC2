- lmesamart

- Luis Alberto Mesa Martos

- En la PEC2_Ej1 he desarrollado una función  búsqueda en una lista de elementos, donde he aplicado un retraso de 2 segundos antes de que se complete la búsqueda y se ejecute una función de éxito o de error dependiendo del resultado.

Esta función la he realizado usando distintas formas de implementarla:

a. La primera forma es usando callbacks, aunque en este ejercicio es muy simple su utilización , podríamos tener problemas si se agregan más operaciones asíncronas o anidadas (callback hell) y sería difícil reutilizar el mismo código en diferentes partes de la aplicación ya que los callback están relacionados con el contexto en el que se utilizan, lo que dificulta su extracción y reutilización en otros lugares.Además si se encuentra el elemento, se llama a onSuccess con el elemento encontrado y si no se encuentra el elemento, se llama a onError con un objeto que contiene un mensaje de error.

b.La segunda forma es usando Promesas para manejar la asincronía, lo que proporciona un mejor flujo de control y evita el callback hell.Además si se encuentra el elemento, se resuelve la promesa con el elemento encontrado y si no se encuentra el elemento, se rechaza la promesa con un objeto que contiene un mensaje de error. 

c.La tercera forma es usando async/await que simplifica la estructura del código, haciéndolo más fácil de leer y comprender en comparación con el uso de Promesas con then/catch.

d.En la última forma es usando promesas y async/await la versión paralela, es decir, que se ejecuten todas las llamadas a la función findOne en paralelo, sin necesidad de esperar a que concluya la primera para ejecutarse la
segunda.Aunque las operaciones se ejecutan en paralelo, los resultados aún se manejan en el orden en que se pasan a Promise.all(). Esto significa que el orden de los resultados puede variar según el orden de las llamadas a findOne().

Si findOne() resuelve la promesa con éxito, la operación continua y el resultado se añade al array de resultados que se pasará a Promise.all().Por el contrario si findOne() es rechazada (es decir, no encuentra el elemento "Fermin"), el .catch() atrapa el error, pero en lugar de lanzar un nuevo error o ejecutar una lógica adicional, simplemente devuelve el objeto de error original. Esto garantiza que la ejecución de Promise.all() continúe sin interrupciones, y los resultados de las demás búsquedas se manejen correctamente en paralelo.

- En la PEC2_Ej2 he desarrollado una aplicación completa usando el patrón MVC programada en VanillaJS, donde he creado una aplicación MVC de control de gastos.Para ello he construido las clases relativas a modelos, controladores, servicios, vistas y lanzador de la aplicación.

En el archivo expense.model.js uso el constructor para inicializar las propiedades id, text y amount, lo que sigue el principio de encapsulamiento al proporcionar una forma coherente de crear instancias de la clase Expense.

En el archivo expense.controllers.js vinculo los métodos del controlador a eventos en la vista (bindAddExpense y bindDeleteExpense), lo que promueve el desacoplamiento entre el controlador y la vista, y esto facilita los cambios en la interfaz de usuario sin afectar la lógica del controlador.Aparte el método updateView() actualiza la vista en función de los datos proporcionados por el servicio. Esto ayuda a mantener el código limpio y coherente.

En el archivo expense.service.js que actúa como un servicio para gestionar los datos de la aplicación relacionados con los gastos, he usado los métodos getTotalBalance(), getIncome() y getExpense() para calcular el balance total, los ingresos y los gastos respectivamente, basados en los datos almacenados en expenses.Por otra parte la inicialización del array expenses la he realizado en el constructor, lo que garantiza que cada instancia de ExpenseService tenga su propia lista de gastos.De tal manera que el proyecto tiene implementado la actualización de un gasto concreto.

El código podría mejorarse con la validación de datos en los métodos addExpense() y deleteExpense().Por tanto he agregado validaciones de datos antes de agregar o eliminar un gasto.
De tal manera que se comprueba si el texto del gasto es una cadena no vacía y si el monto es un número válido y se lanza una excepción con un mensaje descriptivo si se detecta algún problema con los datos proporcionados. 

En el archivo expense.views.js defino una clase llamada ExpenseView, que se encarga de manejar la representación visual de los datos del modelo en la interfaz de usuario.Esta clase proporciona métodos para actualizar la interfaz de usuario con los datos del modelo y para manejar las interacciones del usuario, como agregar y eliminar gastos.

Finalmente en el archivo app.js creo una instancia de ExpenseController y le asigno a la variable expenseController. Para crear esta instancia, se pasan dos argumentos al constructor de ExpenseController: una instancia de ExpenseService y una instancia de ExpenseView.De esta manera, la variable expenseController creada estará lista para manejar las interacciones del usuario y actualizar la interfaz de usuario en consecuencia utilizando la lógica proporcionada por ExpenseService.


- En la PEC2_Ej3 he desarrollado funciones que operan en matrices y arrays:

multiplyBy10(array): Multiplica cada elemento del array por 10 y devuelve el nuevo array resultante.

shiftRight(array): Desplaza los elementos del array una posición a la derecha, es decir, el último elemento pasa a ser el primero, el penúltimo pasa a ser el último, y así sucesivamente. Devuelve el nuevo array resultante.

onlyVowels(array): Filtra cada cadena en el array para mantener solo las vocales y elimina las consonantes. Devuelve un nuevo array con las cadenas resultantes.

doubleMatrix(array): Multiplica cada elemento de la matriz por 2 y devuelve la nueva matriz resultante.

onlyEven(array): Filtra los números pares de un array, devolviendo un nuevo array que contiene solo los números pares.

onlyOneWord(array): Filtra las cadenas de un array para mantener solo aquellas que consisten en una sola palabra, es decir, que no contienen espacios en blanco. Devuelve un nuevo array con las cadenas resultantes.

positiveRowsOnly(array): Filtra las filas de una matriz para mantener solo aquellas que contienen todos números positivos. Devuelve un nuevo array con las filas resultantes.

allSameVowels(array): Filtra las palabras de un array para mantener solo aquellas que contienen todas las mismas vocales. Utiliza un conjunto (Set) para determinar las vocales únicas en cada palabra y comprueba si solo hay una vocal única presente. Devuelve un nuevo array con las palabras resultantes.


sum(array): Calcula la suma de todos los elementos en un array utilizando el método reduce().

productAll(array): Calcula el producto de todos los elementos en un array. Si algún elemento es un array anidado, se calcula recursivamente el producto de sus elementos. Utiliza recursión y reduce() para lograr esto.

objectify(array): Convierte un array de pares [clave, valor] en un objeto, donde cada par se convierte en una propiedad y su valor correspondiente en el objeto resultante.

luckyNumbers(array): Encuentra los "números de la suerte" en un array. Estos son los números que contienen su propio valor en su representación como cadena.La función devuelve una cadena "Your lucky numbers are: seguido de los números de la suerte en el array".

allEven(input): Verifica si todos los elementos en el array son números pares.

allSameType(input): Comprueba si todos los elementos en el array son del mismo tipo.

positiveMatrix(input): Comprueba si todos los elementos en la matriz son arrays y si todos los elementos en los arrays son mayores que 0.

allSameVowels(input): Verifica que todos los elementos en el array son strings y que contienen solo las mismas vocales.

anyGreaterThan10(input): Verifica si algún número en el array es mayor que 10.

longWord(input): Comprueba si alguna palabra en el array tiene una longitud mayor que 10 caracteres.

truePossibilities(input): Verifica si hay algún valor booleano true dentro de un array de arrays.

lostCarcosa(input): Comprueba si alguna frase en el array incluye la palabra 'Lost'.

entryCalculator(entrants): Calcula el precio total de entrada según la cantidad de visitantes de diferentes categorías y los precios definidos.

schedule(dayName): Devuelve el horario de apertura y cierre para un día específico o para toda la semana si no se especifica un día.

animalCount(species): Devuelve el número de animales de una especie específica o el recuento de todas las especies si no se especifica ninguna.

animalMap(options): Genera un mapa de los animales agrupados por su ubicación en el zoológico, opcionalmente incluyendo los nombres de los residentes y filtrando por sexo.

animalPopularity(rating): Devuelve un objeto que agrupa las especies de animales por su popularidad, ordenadas de menos a más populares, o solo las especies con una calificación específica si se proporciona.

animalsByIds(ids): Devuelve los detalles de los animales que coinciden con los IDs proporcionados.

animalByName(animalName): Busca un animal por nombre y devuelve sus detalles, incluido su nombre, sexo, edad y especie.

employeesByIds(ids): Devuelve los detalles de los empleados que coinciden con los IDs proporcionados.

employeeByName(employeeName): Busca un empleado por nombre y devuelve sus detalles.

managersForEmployee(idOrName): Devuelve los detalles de los gerentes de un empleado específico.

employeeCoverage(idOrName): Devuelve un objeto que contiene la cobertura de responsabilidad de cada empleado sobre las especies de animales.
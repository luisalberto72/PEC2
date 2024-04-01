Prueba a cambiar el código del fichero todo.controller.js para comprender qué está sucediendo
cuando se modifica la siguiente línea:

this.view.bindAddTodo(this.handleAddTodo);

Por esta:

this.view.bindAddTodo(this.service.addTodo);

¿Por qué en este caso el valor de this es undefined?


El valor de this es undefined cuando se llama a this.handleAddTodo directamente en lugar de pasar una función de flecha, como this.service.addTodo. Esto se debe a cómo funciona el contexto de this en JavaScript.

Cuando se utiliza una función de flecha, el valor de this dentro de esa función se determina por el contexto en el que se define la función de flecha, en lugar de ser determinado por cómo se llama la función. Esto significa que el valor de this dentro de una función de flecha es el mismo que el valor de this en el ámbito que rodea la función de flecha.

Un ejemplo sería el siguiente:

const obj = {
  name: 'Objeto',
  ejemploFunction: function() {
    console.log(this.name);
  },
  arrowFunction: () => {
    console.log(this.name);
  }
};

obj.ejemploFunction(); // Imprime: "Objeto"
obj.arrowFunction();   // Imprime: undefined

Cuando la función flecha arrowFunction, se llama en el mismo contexto, this dentro de la función de flecha hace referencia al contexto global (o al contexto que rodea al objeto obj, si este código está dentro de una función), y en este caso, name no está definido en el contexto global, por lo que imprime undefined.

Por tanto la razón por la que this se vuelve undefined en relación a la pregunta que nos ocupa ,es debido a cómo funciona el contexto de this en JavaScript. Cuando bindAddTodo se ejecuta posteriormente y llama a addTodo, this dentro de addTodo se establece en undefined porque no hay un contexto definido para esa función.Para solucionar este problema, necesitamos asegurarnos de que this dentro de addTodo mantenga el valor correcto, es decir, que haga referencia al objeto service.
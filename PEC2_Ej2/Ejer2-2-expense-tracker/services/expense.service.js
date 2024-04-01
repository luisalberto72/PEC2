class ExpenseService {
  constructor() {
    this.expenses = [];
  }

  addExpense(text, amount) {
    // Validación de datos
    if (typeof text !== 'string' || text.trim() === '' || !/^[a-zA-Z0-9\s]+$/.test(text.trim()) || /^-?\d+$/.test(text.trim())) {
      throw new Error('Expense text must be a non-empty string without special characters.');
    }
    if (typeof amount !== 'number' || isNaN(amount)) {
      throw new Error('Expense amount must be a valid number.');
    }
    
    // Crear el gasto
    const id = Date.now().toString();
    const expense = new Expense(id, text.trim(), amount); // Utilizamos trim() para eliminar espacios en blanco al principio y al final
    
    // Agregar el gasto al array
    this.expenses.push(expense);
    
    // Retornar el gasto agregado
    return expense;
  }

  deleteExpense(id) {
    // Validación de datos
    if (typeof id !== 'string' || id.trim() === '') {
      throw new Error('Expense ID must be a non-empty string.');
    }

    // Filtrar el array para eliminar el gasto con el ID especificado
    this.expenses = this.expenses.filter(expense => expense.id !== id);
  }

  getTotalBalance() {
    return this.expenses.reduce((total, expense) => total + expense.amount, 0);
  }

  getIncome() {
    return this.expenses
      .filter(expense => expense.amount > 0)
      .reduce((total, expense) => total + expense.amount, 0);
  }

  getExpense() {
    return this.expenses
      .filter(expense => expense.amount < 0)
      .reduce((total, expense) => total + expense.amount, 0);
  }
}

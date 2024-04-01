/**
 * @class Controller
 *
 * Links the user input and the view output.
 *
 * @param model
 * @param view
 */

class ExpenseController {
    constructor(service, view) {
      this.service = service;
      this.view = view;
  
      this.view.bindAddExpense(this.handleAddExpense.bind(this));
      this.view.bindDeleteExpense(this.handleDeleteExpense.bind(this));
  
      this.updateView();
    }
  
    handleAddExpense(text, amount) {
      this.service.addExpense(text, amount);
      this.updateView();
    }
  
    handleDeleteExpense(id) {
      this.service.deleteExpense(id);
      this.updateView();
    }
  
    updateView() {
      const totalBalance = this.service.getTotalBalance();
      const income = this.service.getIncome();
      const expense = this.service.getExpense();
      const expenses = this.service.expenses;
  
      this.view.displayBalance(totalBalance);
      this.view.displayIncome(income);
      this.view.displayExpense(expense);
      this.view.displayExpenses(expenses);
    }
}
  
/**
 * @class View
 *
 * Visual representation of the model.
 */

class ExpenseView {
    constructor() {
      this.balanceElement = document.getElementById('balance');
      this.incomeElement = document.getElementById('money-plus');
      this.expenseElement = document.getElementById('money-minus');
      this.listElement = document.getElementById('list');
      this.textInput = document.getElementById('text');
      this.amountInput = document.getElementById('amount');
      this.form = document.getElementById('form');
    }
  
    displayBalance(balance) {
      this.balanceElement.textContent = `$${balance.toFixed(2)}`;
    }
  
    displayIncome(income) {
      this.incomeElement.textContent = `+$${income.toFixed(2)}`;
    }
  
    displayExpense(expense) {
      this.expenseElement.textContent = `-$${Math.abs(expense).toFixed(2)}`;
    }
  
    displayExpenses(expenses) {
      this.listElement.innerHTML = expenses.map(expense => this.createExpenseListItem(expense)).join('');
    }
  
    createExpenseListItem(expense) {
      return `
        <li class="${expense.amount < 0 ? 'minus' : 'plus'}">
          ${expense.text} <span>${expense.amount > 0 ? '+' : ''}$${Math.abs(expense.amount).toFixed(2)}</span><button class="delete-btn" data-id="${expense.id}">x</button>
        </li>
      `;
    }
  
    bindAddExpense(handler) {
      this.form.addEventListener('submit', event => {
        event.preventDefault();
        const text = this.textInput.value.trim();
        const amount = parseFloat(this.amountInput.value.trim());
        if (text !== '' && !isNaN(amount)) {
          handler(text, amount);
          this.textInput.value = '';
          this.amountInput.value = '';
        }
      });
    }
  
    bindDeleteExpense(handler) {
      this.listElement.addEventListener('click', event => {
        if (event.target.classList.contains('delete-btn')) {
          const id = event.target.dataset.id;
          handler(id);
        }
      });
    }
  }
  
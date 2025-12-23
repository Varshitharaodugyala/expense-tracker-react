import React, { useState } from 'react';
import { Card, ExpenseItemContainer, PriceTag, DeleteButton } from './styles/FormStyles';
import NewExpense from './components/NewExpense';
import ExpenseFilter from './components/ExpenseFilter';

const DUMMY_EXPENSES = [];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [filteredYear, setFilteredYear] = useState('2025');
  const [filteredMonth, setFilteredMonth] = useState('2'); 

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  const deleteExpenseHandler = (expenseId) => {
    setExpenses((prevExpenses) => prevExpenses.filter(ex => ex.id !== expenseId));
  };

 
  const filteredExpenses = expenses.filter((expense) => {
    const matchesYear = expense.date.getFullYear().toString() === filteredYear;
    const matchesMonth = expense.date.getMonth().toString() === filteredMonth;
    return matchesYear && matchesMonth;
  });

  

  let expenseContent = (
    <p style={{ color: 'white', textAlign: 'center', padding: '1rem' }}>
      No expenses found for this period.
    </p>
  );

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItemContainer key={expense.id}>
        <div>
          {expense.date.toLocaleDateString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
          })}
        </div>
        <h2>{expense.title}</h2>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <PriceTag>Rs{expense.amount.toFixed(2)}</PriceTag>
          <DeleteButton onClick={() => deleteExpenseHandler(expense.id)}>Delete</DeleteButton>
        </div>
      </ExpenseItemContainer>
    ));
  }

  const totalAmount = filteredExpenses.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div style={{ padding: '20px' }}>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Card>
        <ExpenseFilter 
          selectedYear={filteredYear} 
          selectedMonth={filteredMonth}
          onChangeYear={(year) => setFilteredYear(year)}
          onChangeMonth={(month) => setFilteredMonth(month)}
        />
        
        {expenseContent}

        {filteredExpenses.length > 0 && (
          <div style={{ marginTop: '1rem', color: 'white', textAlign: 'right', fontWeight: 'bold' }}>
            Monthly Total: Rs{totalAmount.toFixed(2)}
          </div>
        )}
      </Card>
    </div>
  );
}

export default App;

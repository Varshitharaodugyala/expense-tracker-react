import React, { useState } from 'react';

const NewExpense = ({ onAddExpense }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    onAddExpense({
      id: Math.random().toString(),
      title,
      amount: +amount,
      date: new Date(date),
    });
    setTitle(''); setAmount(''); setDate('');
  };

  return (
    <div style={{ backgroundColor: '#a892ee', padding: '1rem', borderRadius: '12px', margin: '2rem auto', width: '50rem', maxWidth: '95%' }}>
      <form onSubmit={submitHandler} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default NewExpense;
import React from 'react';

// Notice we use selectedYear, selectedMonth, onChangeYear, and onChangeMonth
const ExpenseFilter = ({ selectedYear, selectedMonth, onChangeYear, onChangeMonth }) => {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div style={{ color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 1rem', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '10px' }}>
      <label style={{ fontWeight: 'bold' }}>Filter Expenses</label>
      <div style={{ display: 'flex', gap: '10px' }}>
        
        {/* Year Dropdown */}
        <select 
          value={selectedYear} 
          onChange={(e) => onChangeYear(e.target.value)} // Uses the new prop name
          style={{ padding: '0.5rem', borderRadius: '6px' }}
        >
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
        </select>

        {/* Month Dropdown */}
        <select 
          value={selectedMonth} 
          onChange={(e) => onChangeMonth(e.target.value)} // Uses the new prop name
          style={{ padding: '0.5rem', borderRadius: '6px' }}
        >
          {months.map((month, index) => (
            <option key={month} value={index.toString()}>{month}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
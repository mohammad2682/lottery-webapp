import React, { useState } from 'react';

function NameEntry({ onSubmit }) {
  const [name, setName] = useState('');
  const [chance, setChance] = useState('1 in 10');

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ name, chance });
    setName('');
    setChance('1 in 10');
  }

  return (
    <form onSubmit={handleSubmit} className='lottery-form'>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter name"
      />
      <select value={chance} onChange={(event) => setChance(event.target.value)}>
        <option value="1 in 10">1 in 10</option>
        <option value="1 in 50">1 in 50</option>
        <option value="1 in 100">1 in 100</option>
      </select>
      <button type="submit">Add</button>
    </form>
  );
}

export default NameEntry;

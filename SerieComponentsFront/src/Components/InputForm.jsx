import React, { useState } from 'react';

const InputForm = ({ onSubmit }) => {
  const [n, setN] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (n === '') {
      setError('Please enter a value.');
    } else if (isNaN(n) || n <= 0) {
      setError('Porfavor ingresa numeros reales mayores a 0.');
    } else {
      setError('');
      onSubmit(n);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    if (value === '' || !isNaN(value)) {
      setN(value);
      setError('');
    } else {
      setError('Porfavor ingresa numeros reales, no se aceptan letras o cualquier otro caracter.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="numero">Número "n" : </label>
      <input
        className='pantalla'
        type="text"
        id="numero"
        value={n}
        onChange={handleChange}
      />
      <button className='button' type="submit">Calcular</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default InputForm;

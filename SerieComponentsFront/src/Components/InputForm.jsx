
import React, { useState } from 'react';

const InputForm = ({ onSubmit }) => {
    const [n, setN] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit(n);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="numero">Número "n" : </label>
        <input
        className='pantalla'
          type=""
          id="numero"
          value={n}
          onChange={(e) => setN(e.target.value)}
        />
        <button className='button' type="submit">Calcular</button>
      </form>
    );
};

export default InputForm;

import React, { useState } from 'react';
import InputForm from './Components/InputForm'
import Result from './Components/Result';

const App = () => {
  const [resultadoN, setResultadoN] = useState('')

  const handleSubmit = (valorN) => {
    setResultadoN(valorN);
  };

  return (
    <div className="App">
      <h1>Calcula la siguiente serie</h1>
      <h2>serie(n)=primo(n+1)-2triangular(n)+fibonacci(n+1)</h2>
      <div className='calculadora'>
        <h2>Formulario</h2>
      <InputForm onSubmit={handleSubmit} />
      <Result n={resultadoN} />
      </div>
    </div>
  );
};

export default App;

import React from 'react';
import CalcularSerie from './CalcularSerie';

const Result = ({ n }) => {
    const calcularSerie = new CalcularSerie();

    const calcularTerminoSerie = () => {
      const termino = calcularSerie.calcularTerminoSerie(Number(n));
      return termino;
    };
    return (
      <div className='resultado'>
        El resultado del término "n" de la serie es: <h2>{calcularTerminoSerie()}</h2>
      </div>
    );
};

export default Result;

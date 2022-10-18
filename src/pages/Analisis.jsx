import React from 'react';
import '../styles/Analisis.css';

const Analisis = () => {
  return (
    <section className='Analisis'>
      <h2>Análisis Alarmas</h2> 
      <form action="" >
        <fieldset>
        <legend>Elegir el intervalo de tiempo</legend>
          <fieldset className='campo'>
            <label htmlFor="">Inicio</label>
            <input type="date" />
          </fieldset>
          <fieldset className='campo'>
            <label htmlFor="">Fin</label>
            <input type="date" />
          </fieldset>
          <button className='btn btn-enviar'>Enviar</button>
        </fieldset>
      </form>
    </section>
  )
}

export default Analisis
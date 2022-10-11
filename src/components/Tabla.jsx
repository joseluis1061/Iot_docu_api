import React from 'react';
import '../styles/Tabla.css';
const Tabla = ({jsonTable}) => {
  return (
    <table className='Tabla'>
        <tbody className='tabla_body'>
        {
          jsonTable?.length >0 &&
          jsonTable.map((fila, key) =>

            <tr key = {key} className='tabla_row'>
              {fila.map((celda, key) => {
                return <td key = {key} className='tabla_celda'>{celda}</td>
              })}
            </tr>
          )
        }
        </tbody>
    </table>
    
  )
}

export default Tabla
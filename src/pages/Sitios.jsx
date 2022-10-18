import React from 'react'
import { useState, useContext } from 'react';
import AppContext from '../context/AppContext';
import Tabla from '../components/Tabla';
import * as XLSX from "xlsx";
import '../styles/Sitios.css';


const Sitios = () => {
  const {postData} = useContext(AppContext);
  const [fileName, setFileName] = useState(null);
  const [columns, setColumns] = useState([]);
  const [jsonTable, setJsonTable] = useState([]);

  const fileHandler = async (e) => {
    const file = e.target.files[0];


    setFileName(file.name); //AlarmLogs.xlsx

    const data = await file.arrayBuffer();
    //const workbook = XLSX.read(data);
    const workbook = XLSX.readFile(data, { sheetRows:7 });//Para seleccionar solo 5 filas

    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    //const jsonData = XLSX.utils.sheet_to_json(worksheet);
    const jsonData = XLSX.utils.sheet_to_json(worksheet, {
      header: 1, //Toma la fila 1 como los titulos
      defval: "",
    }); //Con esto puedo segmentar las columnas del JSON
    setColumns(jsonData[0]);
    console.log(`jsonData ${typeof(jsonData)}`);
    console.log('Tipo jsonData'+typeof(jsonData));   
    console.log(jsonData);   
    setJsonTable(jsonData)
    postData(jsonData)
  }
  return (
    <section className='Sitios'>
      <h2>Sitios RADII</h2>
      {
        fileName && <p>{fileName}</p> 
      }
      <div className='sitios-container'>
        <input className = 'input_excel' type="file" onChange={(e)=>fileHandler(e)}/>
      </div>

      {

      }
      <div className='tabla-container'>
        {
          jsonTable.length > 0?<Tabla
            jsonTable = {jsonTable}
          />: <p> </p>
        }        
      </div>

      <nav className='sitios-menu'>
        <div className='campo-download'>          
          <button className='btn'>
            <i className="fa-solid fa-download"></i>
            Bajar Excel
          </button>
        </div>
      </nav>

    </section>
  )
}

export default Sitios
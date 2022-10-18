import React, {useState, useContext} from 'react';
import AppContext from '../context/AppContext';
import {ExcelRenderer, OutTable} from 'react-excel-renderer';
import Tabla from '../components/Tabla';
import * as XLSX from "xlsx";
import '../styles/Alarmas.css';
import { type } from '@testing-library/user-event/dist/type';


const Alarmas = () => {
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
    <section className='Alarmas'>
      <h2>Log de Alarmas U2020</h2>
      {
        fileName && <p>{fileName}</p> 
      }
      <div className='alarmas-container'>
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

      <nav className='alarmas-menu'>
        <div className='alarmas-actualizar'>
          <button className='btn btn-datos-sitio'>
            Actualizar Datos de sitio
          </button>
          <button className='btn btn-datos-tower'>
            Actualizar Tower Track
          </button>
        </div>
        <button className='btn'>
          Subir Log U2020
        </button>
        <button className='btn'>
          Descargar Log
        </button>
      </nav>

    </section>
  )
}

export default Alarmas;
import './App.css';
import Layout from './Layout/Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alarmas from './pages/Alarmas';
import Analisis from './pages/Analisis';
import Sitios from './pages/Sitios';
import AppContext from './context/AppContext';
import { useContext } from 'react';
import useApi from './hook/useApi';

function App() {
  const api = useApi();
  return (
    <AppContext.Provider value={api}>    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Layout/> }>
            <Route index element={ <Alarmas/> }/>
            <Route path='/analisis' element={ <Analisis/> }/>
            <Route path='/sitios' element={ <Sitios/> }/>
          </Route>
        </Routes>    
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Importa BrowserRouter y Routes
import './App.css';

import Lista from './Componentes/Lista';
import Aleatorios from './Componentes/Aleatorios';
import Capturados from './Componentes/Capturados';
import Favoritos from './Componentes/Favoritos';
import Usuario from './Componentes/Usuario';
import Menu from './Componentes/Menu';
import Pokemon from './Componentes/Pokemon';

function App() {
  return (
    <BrowserRouter> {/* BrowserRouter envuelve toda la aplicación */}
      <Menu />
      
      <Routes> {/* Routes maneja las rutas en v6 */}
        <Route path="/" element={<Lista />} />
        <Route path="/aleatorios" element={<Aleatorios />} />
        <Route path="/capturados" element={<Capturados />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/pokemon/:name" element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

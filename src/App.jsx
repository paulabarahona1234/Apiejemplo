import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AppProvider } from './Contexto/contexto';

import { supabase } from "./supabase";
import Menu from './Componentes/Menu';
import Aleatorios from './Componentes/Aleatorios';
import Lista from './Componentes/Lista';
import Capturados from './Componentes/Capturados';
import Favoritos from './Componentes/Favoritos';
import Usuarios from './Componentes/Usuario';
import Pokemon from './Componentes/Pokemon';
import Login from './Componentes/Login';
import Registro from './Componentes/Registro';
import Administrador from './Componentes/Administrador';

function App() {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    async function verificarSesion() {
      const { data: { session } } = await supabase.auth.getSession();
      setUsuario(session?.user || null);
      setCargando(false);
    }

    verificarSesion();

    // Escucha cambios en la sesión
    supabase.auth.onAuthStateChange((_event, session) => {
      setUsuario(session?.user || null);
    });
  }, []);


  if (cargando) return <p>Cargando...</p>;

  return (
    <AppProvider>
      <Router>
        {usuario && <Menu />}

        <Routes>
          <Route path="/" element={usuario ? <Lista /> : <Navigate to="/login" />} />
          <Route path="/Usuarios" element={usuario ? <Usuarios /> : <Navigate to="/login" />} />
          <Route path="/Aleatorios" element={usuario ? <Aleatorios /> : <Navigate to="/login" />} />
          <Route path="/Capturados" element={usuario ? <Capturados /> : <Navigate to="/login" />} />
          <Route path="/Favoritos" element={usuario ? <Favoritos /> : <Navigate to="/login" />} />
          <Route path="/Pokemon/:name" element={usuario ? <Pokemon /> : <Navigate to="/login" />} />

          <Route path="/Login" element={<Login/>} />
          <Route path="/Registro" element={<Registro/>} />
          <Route path="/Administrador" element={<Administrador/>} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
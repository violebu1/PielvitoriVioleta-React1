import ReactDom from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import Contacto from './pages/contacto/Contacto';
import SobreNosotros from './pages/sobreNosotros/SobreNosotros';
import Venta from './pages/venta/Venta';
import NavBar from './pages/navBar/NavBar';
import Inicio from './pages/inicio/Inicio';
import Inexistente from './pages/inexistente/Inexistente';
//import logo from './logo.svg';
//import './App.css';
//import './Inicio.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"element={<NavBar />}>
          <Route index element={<Inicio/>} />
          <Route path="venta" element={<Venta/>} />
          <Route path="sobreNosotros" element={<SobreNosotros/>} />
          <Route path="contacto" element={<Contacto/>} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

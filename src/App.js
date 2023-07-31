import "./App.css";

//import ReactDom from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Contacto from "./pages/contacto/Contacto";
import SobreNosotros from "./pages/sobreNosotros/SobreNosotros";
//import Venta from "./pages/venta/Venta";
//import NavBar from './pages/navBar/NavBar';
import Inicio from "./pages/inicio/Inicio";
import Inexistente from "./pages/inexistente/Inexistente";
//import Footer from "./componentes/Footer";
//import Header from "./componentes/Header";

import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./componentes/Navbar";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import MySideNav from "./componentes/MySideNav";





class App extends Component {
  render(){
    return (
    <Router>
      
      <Navbar/>
      <br/>
      Ningun texto booewihv 
      roivnwNI
      Onvrofivn
      worivnWVINOw
      nrowbiENOVen
      <br/>
      <Footer />
      
      <Routes>
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/sobreNosotros" element={<SobreNosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/inexistente" element={<Inexistente />} />
        {/* <Route path="/venta" element={<Venta />} /> */}

      </Routes>
      
    </Router>
    );

}
}

export default App;

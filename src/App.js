import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacto from "./pages/contacto/Contacto";
import SobreNosotros from "./pages/sobreNosotros/SobreNosotros";
import Tienda from "./pages/tienda/Tienda";
import Inicio from "./pages/inicio/Inicio";
import Inexistente from "./pages/inexistente/Inexistente";
import "./App.css";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";

class App extends Component {
  render(){
    return (
    <Router>
      <Navbar/>
           
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/inicio" element={<Inicio />} />
        <Route exact path="/sobreNosotros" element={<SobreNosotros />} />
        <Route exact path="/contacto" element={<Contacto />} />
        <Route exact path="/tienda" element={<Tienda />} />
        <Route path='/notfoundpage' element={<Inexistente />} /> 
        <Route exact path="/*" element={<Inexistente />} />

      </Routes>
      <Footer/>
    </Router>
    );

}
}

export default App;

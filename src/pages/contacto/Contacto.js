import React from "react";

import "./Contacto.css";

import '../../componentes/FormContacto';

import FormContacto from "../../componentes/FormContacto";




function Contacto() {

  return (
    <div className="contenedor">
            <h2 className="catalogo text-center my-4">CONTACTO</h2>

      <div className="formucontacto">
        <FormContacto />
        <div className="piedepagina">
          *Por favor no olvides dejarnos tus datos para que podamos contactarnos con vos.
        </div>

      </div>
    </div>
  )
}


export default Contacto;

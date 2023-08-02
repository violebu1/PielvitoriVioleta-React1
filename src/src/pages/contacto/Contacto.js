import React from "react";

import "./Contacto.css";

import '../../componentes/FormContacto';
import { useState } from "react";
import FormContacto from "../../componentes/FormContacto";




function Contacto() {

  return (
    <div className="contenedor">
            <h1 className="catalogo text-center my-4">CONTACTO</h1>

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

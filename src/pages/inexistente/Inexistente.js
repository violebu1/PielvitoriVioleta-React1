import React from 'react';
import './Inexistente.css';
import '../../assetsMisiotronica/logo192.png';

const  Inexistente=()=> {
    return (
      
<div class="contenedor">
    <div class="row">
        <div class="col-md-12">
            <div class="error-template">
                <div className='imagen-de-error'>
                <img src="../../images/attention.jpg" alt="imagen-de-error" />
                </div>
                
                    <h1>Oops!</h1>
                <h2>
                    Parece que te perdiste!!</h2>
                <div >
                    Mejor volvé al inicio!!!
                </div>
                <div class="error-actions">
                    <a href= '/inicio' 
                    class="btn btn-outline-warning btn-lg">
                      <span class="glyphicon glyphicon-home"></span>
                        Volver a inicio </a>
                </div>
            </div>
        </div>
    </div>
    
</div>

    );
  }



export default Inexistente;


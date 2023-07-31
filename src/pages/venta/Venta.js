import React from "react";
import Productos from "../../repositories/Productos";
import Card from "../../componentes/Cards";
import Apartado from "../../componentes/Titulo";
import "./Venta.css";
import Busqueda from "../../componentes/Busqueda";



function Venta () {
    return (
        <div>
            <div>
                <Apartado titulares="Nuestros productos" />
            </div>
            <div>
                <Busqueda />
            </div>
            <div class="listadoProductos">
                {productos.map(function (elem){
                    return(
                        <Card
                            nombre={elem.nombre}
                            imagen={elem.imagen}
                            descripcion={elem.descripcion}
                            precio={elem.precio}
                        />
                    );
                })};
            </div>
        </div>
    );
};
 
 export default Venta;


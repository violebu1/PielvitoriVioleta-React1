
import React from "react";

//importar imagenes!!!//

// NO LO TOMA DE ACÁ, LO TOMA DEL HARDCODEADO DENTRO DEL TIENDA.JS - REVISAR

const productsData = [
    {
      id: 1,
      name: "Arduino",
      description: 'El Arduino Nano es una pequeña y completa placa basada en el ATmega328 (Arduino Nano 3.0) que se usa conectándola a una protoboard. Tiene más o menos la misma funcionalidad que el Arduino Duemilanove, pero con una presentación diferente. No posee conector para alimentación externa, y funciona con un cable USB Mini-B.',
      price: 13540,
      imageUrl: '../../data/arduino.png',
    },
    {
      id: 2,
      name: 'Detector de CO2',
      description: 'Monitorea la calidad del aire en escuelas, edificios de oficinas, invernaderos, fábricas, hoteles, hospitales, líneas de transporte y en cualquier lugar que se generan altos niveles de dióxido de carbono. Sensor NDIR, autocalibrable.',
      imageUrl: '../../data/detectorco2.jpg',
    },
    
  ];
  
  export default productsData;
  
import React, { useEffect, useState, useMemo } from 'react';
import Inicio_ArgInternacional from "../components/Inicio_ArgInternacional.jsx"
import Inicio_ExploraPaquetes from "../components/Inicio_ExploraPaquetes.jsx"
import Inicio_Introduccion from "../components/Inicio_Introduccion.jsx"
import Inicio_Populares from "../components/Inicio_Populares.jsx"
import Inicio_Soporte from "../components/Inicio_soporte.jsx"
import Footer from './Footer.jsx';
const Inicio = () => {
  return (
    <div className="">    
    <Inicio_Introduccion/>
    <Inicio_ExploraPaquetes/>
    
    <Inicio_ArgInternacional/>
    <Inicio_Soporte/>
    <Footer/>

    </div>
  );
};

export default Inicio;

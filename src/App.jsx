import './App.css'
import { Routes, Route } from 'react-router-dom';
 
import PanelUsuario from "../src/components/PanelUsuario.jsx"
import PanelJefe from "../src/components/PanelJefe.jsx"
import Nosotros from "../src/components/Nosotros.jsx"
import Nav from "./components/Nav.jsx"
//Hay que agregarle el logo de velo en blanco arriba a la izquierda. Problema cuando entra a algun servicio continua
//apareciendo el logo

//Detalles components
import Detalles_Vuelos from "./components/Detalles_Vuelos.jsx"
import Detalles_Hoteles from "./components/Detalles_Hoteles.jsx"
import Detalles_Paquetes from "./components/Detalles_Paquetes.jsx"

//Login components
import Login_IniciarSesion from "./components/Login_IniciarSesion.jsx"
import Login_Registro from "./components/Login_Registro.jsx"
import Login_ConfirmarMail from "./components/Login_ConfirmarMail.jsx"

//Inicio components
import Inicio from './components/Inicio.jsx'

import Alojamientos from './pages/Alojamientos.jsx';
import Vuelos from './pages/Vuelos.jsx';
import Paquetes from "./pages/Paquetes.jsx"
import Vehiculos from "./pages/Vehiculos.jsx"

// Carrito components
import Carrito from "../src/components/Carrito_agregar.jsx"
import CarritoPagar from "../src/components/Carrito_pagar.jsx"
import CarritoPagoFinalizado from "../src/components/Carrito_pagofinalizado.jsx"
import CarritoSinProductos from "../src/components/Carrito_sinProductos.jsx"
//falta ponerle navegation a los destinos en carritoSinproductos
//el continuar comprando de CarritoAgregar me tiene que llevar a paquetes/servicios (ludmila)
//Al agregar Carrito_Recomendaciones se me rompe el codigo en Carrito agregar.
//cambiar la ruta raiz por la de main 
//en ver detalles en Carrito_agregar a cada producto hay que agregarle navegate a la pagina de eros Detalles

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/Registro' element={<Login_Registro />} />
        <Route path='/Login' element={<Login_IniciarSesion />} />
        <Route path='/Confirmar' element={<Login_ConfirmarMail />} /> 

        <Route path='/PanelUsuario' element={<PanelUsuario />} />
        <Route path='/PanelJefe' element={<PanelJefe />} />
        <Route path='/Nosotros' element={<Nosotros />} />

        <Route path='/Carrito' element={<Carrito />} />
        <Route path='/Pagando' element={<CarritoPagar />} />
        <Route path='/PagoFinalizado' element={<CarritoPagoFinalizado />} />
        <Route path='/CarritoVacio' element={<CarritoSinProductos />} />

        <Route path='/DetalleVuelo' element={<Detalles_Vuelos />} />
        <Route path='/DetallePaquete' element={<Detalles_Paquetes />} />
        <Route path='/DetalleHotel' element={<Detalles_Hoteles />} />

        <Route path='/Paquetes' element={<Paquetes />} />
        <Route path='/Vuelos' element={<Vuelos />} />
        <Route path='/Alojamientos' element={<Alojamientos />} />
        <Route path='/Vehiculos' element={<Vehiculos />} />
      </Routes>
    </>
  );
};

export default App;







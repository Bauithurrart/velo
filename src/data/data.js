export const serviciosData = {
  alojamientos: [
    {
      nombre: "Hotel Boutique El Mirador",
      ubicacion: "Mendoza, Argentina",
      descripcion: "Hotel con vista a los viñedos y piscina climatizada.",
      precioPorNoche: 120,
      imagen: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Boutique_hotel_interior.jpg",
      detalles: {
        servicios: ["Piscina", "WiFi", "Desayuno", "Estacionamiento"],
        habitaciones: "Dobles y suites",
        checkIn: "14:00",
        checkOut: "11:00"
      }
    },
    {
      nombre: "Cabañas Las Cascadas",
      ubicacion: "Villa General Belgrano, Córdoba",
      descripcion: "Cabañas rústicas rodeadas de bosque y senderos.",
      precioPorNoche: 85,
      imagen: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Cabin_in_the_woods.jpg",
      detalles: {
        servicios: ["Parrilla", "Estacionamiento", "Senderismo", "Pet-friendly"],
        habitaciones: "Cabañas completas",
        checkIn: "13:00",
        checkOut: "10:30"
      }
    },
    {
      nombre: "Hostel Punto Sur",
      ubicacion: "Bariloche, Río Negro",
      descripcion: "Ambiente joven, desayuno incluido y cerca del lago.",
      precioPorNoche: 30,
      imagen: "https://upload.wikimedia.org/wikipedia/commons/7/75/Hostel_bedroom.jpg",
      detalles: {
        servicios: ["WiFi", "Cocina compartida", "Lockers", "Bar nocturno"],
        habitaciones: "Compartidas y privadas",
        checkIn: "12:00",
        checkOut: "10:00"
      }
    },
    {
      nombre: "Hotel Costa Azul",
      ubicacion: "Mar del Plata, Buenos Aires",
      descripcion: "Frente al mar, con servicio de spa y restaurante.",
      precioPorNoche: 110,
      imagen: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Beachfront_hotel.jpg",
      detalles: {
        servicios: ["Spa", "Desayuno buffet", "WiFi", "Vista al mar"],
        habitaciones: "Suites y dobles",
        checkIn: "15:00",
        checkOut: "11:30"
      }
    },
    {
      nombre: "Eco Lodge Tierra Viva",
      ubicacion: "Tilcara, Jujuy",
      descripcion: "Alojamiento sustentable entre montañas y naturaleza.",
      precioPorNoche: 75,
      imagen: "https://upload.wikimedia.org/wikipedia/commons/7/72/Mountain_lodge.jpg",
      detalles: {
        servicios: ["Paneles solares", "Comida orgánica", "Trekking guiado"],
        habitaciones: "Domos ecológicos",
        checkIn: "14:00",
        checkOut: "10:30"
      }
    },
    {
      nombre: "Depto Palermo Chic",
      ubicacion: "Buenos Aires, Capital Federal",
      descripcion: "Moderno departamento con terraza privada y WiFi.",
      precioPorNoche: 95,
      imagen: "https://upload.wikimedia.org/wikipedia/commons/4/47/Modern_apartment_interior.jpg",
      detalles: {
        servicios: ["WiFi", "Aire acondicionado", "Terraza", "TV Smart"],
        habitaciones: "1 dormitorio",
        checkIn: "16:00",
        checkOut: "11:00"
      }
    },
    {
      nombre: "Estancia El Ombú",
      ubicacion: "San Antonio de Areco, Buenos Aires",
      descripcion: "Experiencia rural con comidas típicas y cabalgatas.",
      precioPorNoche: 140,
      imagen: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Estancia_rural.jpg",
      detalles: {
        servicios: ["Cabalgatas", "Comidas regionales", "Piscina"],
        habitaciones: "Habitaciones familiares",
        checkIn: "12:00",
        checkOut: "11:00"
      }
    },
    {
      nombre: "Posada del Río",
      ubicacion: "Colón, Entre Ríos",
      descripcion: "Posada familiar cerca de las termas y el río.",
      precioPorNoche: 60,
      imagen: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Small_guesthouse_exterior.jpg",
      detalles: {
        servicios: ["Termas cercanas", "Patio", "Desayuno continental"],
        habitaciones: "Simples y dobles",
        checkIn: "13:00",
        checkOut: "10:00"
      }
    }
  ],
 vehiculos: [
    {
      nombre: "Toyota Corolla",
      descripcion: "Auto mediano, ideal para ciudad o viajes cortos.",
      precio: 70,
      asientos: 6,
      imagen: "/img/toyota corolla.jpg",
    },
    {
      nombre: "Volkswagen Amarok",
      descripcion: "Camioneta ideal para viajes largos y terrenos rurales.",
      precio: 120,
      imagen: "/img/Volkswagen Amarok.jpg",
    },
    {
      nombre: "Chevrolet Tracker",
      descripcion: "SUV compacta, cómoda y segura para toda la familia.",
      precio: 95,
      imagen: "/img/Chevrolet Tracker.jpg",
    },
    {
      nombre: "Ford Ranger",
      descripcion: "Camioneta potente con excelente capacidad de carga.",
      precio: 130,
      imagen: "/img/Ford Ranger.jpg",
    },
  ], 
  vuelos: [
    {
      nombre: "Vuelo Buenos Aires - Nueva York",
      destino: "Nueva York",
      salida: "Buenos Aires",
      fecha: "20 Ago 2025",
      precio: 950,
      aerolinea: "Aerolineas Argentinas",
      imagen: "/img/V-nuevayork.jpg",
      detalles: {
        tipo: "Directo",
        duracion: "11h 20m",
        clase: "Económica",
        equipaje: "Incluye 1 valija + 1 bolso de mano"
      }
    },
    {
      nombre: "Vuelo Buenos Aires - Madrid",
      destino: "Madrid",
      salida: "Buenos Aires",
      fecha: "12 Sep 2025",
      precio: 720,
      aerolinea: "Iberia",
      imagen: "/img/V-madrid.jpg",
      detalles: {
        tipo: "Con escala",
        duracion: "13h 50m",
        clase: "Premium Economy",
        equipaje: "1 valija despachada incluida"
      }
    },
    {
      nombre: "Vuelo Buenos Aires - París",
      destino: "París",
      salida: "Buenos Aires",
      fecha: "25 Nov 2025",
      precio: 890,
      aerolinea: "Air France",
      imagen: "/img/V-paris.jpg",
      detalles: {
        tipo: "Directo",
        duracion: "13h 10m",
        clase: "Económica",
        equipaje: "Equipaje de mano + snack incluido"
      }
    },
    {
      nombre: "Vuelo Buenos Aires - Río de Janeiro",
      destino: "Río de Janeiro",
      salida: "Buenos Aires",
      fecha: "10 Ene 2026",
      precio: 490,
      aerolinea: "Gol",
      imagen: "/img/V-riodejaneiro.jpg",
      detalles: {
        tipo: "Directo",
        duracion: "3h 30m",
        clase: "Económica",
        equipaje: "Solo bolso de mano"
      }
    },
    {
      nombre: "Vuelo Córdoba - Bariloche",
      destino: "Bariloche",
      salida: "Córdoba",
      fecha: "5 Jul 2025",
      precio: 180,
      aerolinea: "Aerolineas Argentinas",
      imagen: "/img/V-bariloche.jpg",
      detalles: {
        tipo: "Directo",
        duracion: "2h 15m",
        clase: "Económica",
        equipaje: "Equipaje de mano"
      }
    },
    {
      nombre: "Vuelo Mendoza - Iguazú",
      destino: "Iguazú",
      salida: "Mendoza",
      fecha: "18 Oct 2025",
      precio: 220,
      aerolinea: "Latam",
      imagen: "/img/V-iguazu.jpg",
      detalles: {
        tipo: "Con escala",
        duracion: "5h 40m",
        clase: "Económica",
        equipaje: "1 pieza de equipaje despachado"
      }
    },
    {
      nombre: "Vuelo Rosario - Salta",
      destino: "Salta",
      salida: "Rosario",
      fecha: "3 Ago 2025",
      precio: 160,
      aerolinea: "Flybondi",
      imagen: "/img/V-salta.jpg",
      detalles: {
        tipo: "Directo",
        duracion: "1h 45m",
        clase: "Básica",
        equipaje: "No incluye equipaje"
      }
    },
    {
      nombre: "Vuelo Buenos Aires - Ushuaia",
      destino: "Ushuaia",
      salida: "Buenos Aires",
      fecha: "15 Sep 2025",
      precio: 260,
      aerolinea: "Aerolineas Argentinas",
      imagen: "/img/V-ushuaia.jpg",
      detalles: {
        tipo: "Directo",
        duracion: "3h 45m",
        clase: "Económica",
        equipaje: "1 bolso de mano"
      }
    }
  ],

  paquetes: [
    {
      nombre: "Paquete Brasil",
      precio: 1500,
      noches: 7,
      destino: "Brasil",
      salida: "Buenos Aires",
      alojamiento: "Hotel Boutique El Mirador",
      fechaSalida: "01 Sep 2025",
      fechaRegreso: "08 Sep 2025",
      imagen: "/img/paquete-brasil.jpg",
      detalles: {
        incluye: ["Aéreo", "Hotel", "Desayuno", "Traslados"],
        excursiones: ["Cristo Redentor", "Pan de Azúcar"],
        categoria: "Turista"
      }
    },
    {
      nombre: "Paquete Argentina Norte",
      precio: 1200,
      noches: 5,
      destino: "Salta",
      salida: "Buenos Aires",
      alojamiento: "Posada del Río",
      fechaSalida: "15 Oct 2025",
      fechaRegreso: "20 Oct 2025",
      imagen: "/img/paquete-norte.jpg",
      detalles: {
        incluye: ["Aéreo", "Traslados", "Hotel con desayuno"],
        excursiones: ["Quebrada de Humahuaca", "Salinas Grandes"],
        categoria: "Económico"
      }
    },
    {
      nombre: "Paquete Patagonia",
      precio: 1800,
      noches: 8,
      destino: "Bariloche",
      salida: "Buenos Aires",
      alojamiento: "Cabañas Las Cascadas",
      fechaSalida: "10 Nov 2025",
      fechaRegreso: "18 Nov 2025",
      imagen: "/img/paquete-patagonia.jpg",
      detalles: {
        incluye: ["Aéreo", "Alojamiento", "Media pensión", "Traslados"],
        excursiones: ["Circuito Chico", "Isla Victoria y Bosque de Arrayanes"],
        categoria: "Superior"
      }
    }
  ]
};



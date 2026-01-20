/**
 * Datos de destinos turísticos de Colombia
 * Estructura tipo e-commerce para mostrar destinos como "productos"
 */

import { getImagenesDestino } from './imagenes'

export interface Plan {
  nombre: 'Básico' | 'Estándar' | 'Premium'
  precio: number // En COP
  descripcion: string
  caracteristicas: string[]
}

export interface Destino {
  id: string
  nombre: string
  slug: string
  fraseCorta: string
  fraseInspiracional: string
  imagen: string // 1.jpg para card
  imagenHero: string // 1.jpg para hero
  imagen2: string // 2.jpg para galería
  imagen3: string // 3.jpg para galería
  descripcion: string
  precioDesde: number // Precio base en COP
  incluye: {
    alojamiento: boolean
    transporte: boolean
    tours: boolean
    asistencia: boolean
  }
  planes: Plan[]
}

// Helper para obtener imágenes locales
const getImagenes = (nombre: string) => {
  const imagenes = getImagenesDestino(nombre)
  return {
    imagen: imagenes.imagen1, // 1.jpg para card
    imagenHero: imagenes.imagen1, // 1.jpg para hero
    imagen2: imagenes.imagen2, // 2.jpg para galería
    imagen3: imagenes.imagen3, // 3.jpg para galería
  }
}

export const destinos: Destino[] = [
  {
    id: 'cartagena',
    nombre: 'Cartagena',
    slug: 'cartagena',
    fraseCorta: 'La heroica ciudad amurallada del Caribe',
    fraseInspiracional: 'Descubre la magia colonial en el corazón del Caribe colombiano',
    ...getImagenes('Cartagena'),
    descripcion: 'Cartagena de Indias es una joya del Caribe colombiano que combina historia, cultura y playas paradisíacas. Recorre sus calles coloniales, admira las murallas que protegieron la ciudad y disfruta de sus playas cristalinas. Una experiencia que mezcla el encanto del pasado con la vibrante vida nocturna y la exquisita gastronomía caribeña.',
    precioDesde: 2500000,
    incluye: {
      alojamiento: true,
      transporte: true,
      tours: true,
      asistencia: true
    },
    planes: [
      {
        nombre: 'Básico',
        precio: 2500000,
        descripcion: 'Perfecto para exploradores independientes',
        caracteristicas: [
          'Hotel 3 estrellas en zona turística',
          'Transporte terrestre',
          'Tour histórico básico',
          'Asistencia 24/7'
        ]
      },
      {
        nombre: 'Estándar',
        precio: 3500000,
        descripcion: 'Equilibrio perfecto entre confort y aventura',
        caracteristicas: [
          'Hotel 4 estrellas frente al mar',
          'Transporte aéreo + terrestre',
          'Tours históricos y playa',
          'Almuerzos incluidos',
          'Asistencia premium'
        ]
      },
      {
        nombre: 'Premium',
        precio: 4800000,
        descripcion: 'Experiencia de lujo en la ciudad amurallada',
        caracteristicas: [
          'Hotel 5 estrellas boutique',
          'Vuelos y transporte VIP',
          'Tours privados exclusivos',
          'Todas las comidas incluidas',
          'Experiencias gastronómicas',
          'Concierge personal'
        ]
      }
    ]
  },
  {
    id: 'santa-marta',
    nombre: 'Santa Marta',
    slug: 'santa-marta',
    fraseCorta: 'Donde la montaña se encuentra con el mar',
    fraseInspiracional: 'Aventura, naturaleza y playas en la primera ciudad de Colombia',
    ...getImagenes('Santa Marta'),
    descripcion: 'Santa Marta ofrece la combinación perfecta entre playas caribeñas, montañas nevadas y parques naturales únicos. Desde sus playas cristalinas hasta la mágica Ciudad Perdida, vive una experiencia que conecta el mar con la montaña en un destino que lo tiene todo.',
    precioDesde: 2200000,
    incluye: {
      alojamiento: true,
      transporte: true,
      tours: true,
      asistencia: true
    },
    planes: [
      {
        nombre: 'Básico',
        precio: 2200000,
        descripcion: 'Ideal para mochileros y aventureros',
        caracteristicas: [
          'Hotel 3 estrellas cerca de playa',
          'Transporte terrestre',
          'Acceso a parques naturales',
          'Asistencia básica'
        ]
      },
      {
        nombre: 'Estándar',
        precio: 3200000,
        descripcion: 'Aventura y confort en equilibrio',
        caracteristicas: [
          'Hotel 4 estrellas con vista al mar',
          'Vuelos incluidos',
          'Tours a parques naturales',
          'Algunas comidas',
          'Guía local'
        ]
      },
      {
        nombre: 'Premium',
        precio: 4500000,
        descripcion: 'Lujo y aventura en la costa caribeña',
        caracteristicas: [
          'Resort 5 estrellas',
          'Transporte VIP',
          'Tours exclusivos privados',
          'Todas las comidas',
          'Experiencias eco-turísticas',
          'Spa y wellness'
        ]
      }
    ]
  },
  {
    id: 'san-andres',
    nombre: 'San Andrés',
    slug: 'san-andres',
    fraseCorta: 'Paraíso caribeño de aguas cristalinas',
    fraseInspiracional: 'Sumérgete en el azul turquesa del mar de los siete colores',
    ...getImagenes('San Andrés'),
    descripcion: 'San Andrés es el paraíso caribeño por excelencia de Colombia. Con sus playas de arena blanca, aguas turquesas y la cultura raizal única, este destino te ofrece relax total y aventuras acuáticas inolvidables. El Mar de los Siete Colores te espera.',
    precioDesde: 2800000,
    incluye: {
      alojamiento: true,
      transporte: true,
      tours: true,
      asistencia: true
    },
    planes: [
      {
        nombre: 'Básico',
        precio: 2800000,
        descripcion: 'Escape caribeño accesible',
        caracteristicas: [
          'Hotel 3 estrellas cerca de playa',
          'Vuelos incluidos',
          'Snorkel básico',
          'Asistencia turística'
        ]
      },
      {
        nombre: 'Estándar',
        precio: 3800000,
        descripcion: 'Experiencia completa en el paraíso',
        caracteristicas: [
          'Hotel 4 estrellas con playa privada',
          'Vuelos y traslados',
          'Tours acuáticos incluidos',
          'Almuerzos en isla',
          'Equipos de snorkel'
        ]
      },
      {
        nombre: 'Premium',
        precio: 5200000,
        descripcion: 'Lujo total en el Caribe',
        caracteristicas: [
          'Resort 5 estrellas todo incluido',
          'Vuelos en clase ejecutiva',
          'Tours exclusivos privados',
          'Todas las comidas y bebidas',
          'Buceo incluido',
          'Spa y actividades premium'
        ]
      }
    ]
  },
  {
    id: 'medellin',
    nombre: 'Medellín',
    slug: 'medellin',
    fraseCorta: 'La ciudad de la eterna primavera',
    fraseInspiracional: 'Vive la transformación de la ciudad más innovadora de América Latina',
    ...getImagenes('Medellín'),
    descripcion: 'Medellín, conocida como la ciudad de la eterna primavera, combina innovación, cultura y naturaleza. Desde sus coloridos barrios hasta sus modernos espacios urbanos, descubre una ciudad que se transforma y te invita a vivir experiencias únicas en cada rincón.',
    precioDesde: 1800000,
    incluye: {
      alojamiento: true,
      transporte: true,
      tours: true,
      asistencia: true
    },
    planes: [
      {
        nombre: 'Básico',
        precio: 1800000,
        descripcion: 'Explora la capital antioqueña',
        caracteristicas: [
          'Hotel 3 estrellas céntrico',
          'Transporte terrestre',
          'Tour de la ciudad',
          'Asistencia local'
        ]
      },
      {
        nombre: 'Estándar',
        precio: 2600000,
        descripcion: 'Experiencia completa en Medellín',
        caracteristicas: [
          'Hotel 4 estrellas zona rosa',
          'Vuelos incluidos',
          'Tours culturales y gastronómicos',
          'Algunas comidas',
          'Metro cable incluido'
        ]
      },
      {
        nombre: 'Premium',
        precio: 3800000,
        descripcion: 'Lujo y cultura en la ciudad innovadora',
        caracteristicas: [
          'Hotel 5 estrellas boutique',
          'Transporte VIP',
          'Tours privados exclusivos',
          'Todas las comidas gourmet',
          'Experiencias culturales premium',
          'Guía personalizado'
        ]
      }
    ]
  },
  {
    id: 'guatape',
    nombre: 'Guatapé',
    slug: 'guatape',
    fraseCorta: 'El pueblo más colorido de Colombia',
    fraseInspiracional: 'Escala el Peñol y descubre un pueblo lleno de color y magia',
    ...getImagenes('Guatapé'),
    descripcion: 'Guatapé es un pueblo mágico donde cada casa es una obra de arte con sus zócalos coloridos. Sube los 740 escalones del Peñol para obtener la vista panorámica más increíble y navega por el embalse rodeado de islas. Un destino único que combina aventura y belleza escénica.',
    precioDesde: 1500000,
    incluye: {
      alojamiento: true,
      transporte: true,
      tours: true,
      asistencia: true
    },
    planes: [
      {
        nombre: 'Básico',
        precio: 1500000,
        descripcion: 'Excursión al pueblo de los zócalos',
        caracteristicas: [
          'Alojamiento en hostal turístico',
          'Transporte desde Medellín',
          'Subida al Peñol',
          'Paseo en lancha básico'
        ]
      },
      {
        nombre: 'Estándar',
        precio: 2200000,
        descripcion: 'Experiencia completa en Guatapé',
        caracteristicas: [
          'Hotel boutique en el pueblo',
          'Transporte incluido',
          'Subida al Peñol + paseo en lancha',
          'Almuerzo típico',
          'Tour guiado del pueblo'
        ]
      },
      {
        nombre: 'Premium',
        precio: 3200000,
        descripcion: 'Aventura y confort en el embalse',
        caracteristicas: [
          'Hotel frente al embalse',
          'Transporte VIP',
          'Experiencias exclusivas',
          'Todas las comidas gourmet',
          'Actividades acuáticas',
          'Guía personalizado'
        ]
      }
    ]
  },
  {
    id: 'eje-cafetero',
    nombre: 'Eje Cafetero',
    slug: 'eje-cafetero',
    fraseCorta: 'El corazón cafetero de Colombia',
    fraseInspiracional: 'Conoce de dónde viene el mejor café del mundo',
    ...getImagenes('Eje Cafetero'),
    descripcion: 'El Eje Cafetero te transporta a un paisaje de verdes montañas y fincas cafeteras tradicionales. Vive la cultura del café, recorre pueblos patrimonio y disfruta de la calidez de la gente paisa. Una experiencia auténtica en el corazón de Colombia.',
    precioDesde: 2000000,
    incluye: {
      alojamiento: true,
      transporte: true,
      tours: true,
      asistencia: true
    },
    planes: [
      {
        nombre: 'Básico',
        precio: 2000000,
        descripcion: 'Ruta cafetera esencial',
        caracteristicas: [
          'Hospedaje en finca cafetera',
          'Transporte terrestre',
          'Tour cafetero',
          'Degustación de café'
        ]
      },
      {
        nombre: 'Estándar',
        precio: 3000000,
        descripcion: 'Experiencia cafetera completa',
        caracteristicas: [
          'Finca hotel 4 estrellas',
          'Vuelos incluidos',
          'Tours a varios pueblos',
          'Todas las comidas típicas',
          'Talleres de café'
        ]
      },
      {
        nombre: 'Premium',
        precio: 4200000,
        descripcion: 'Lujo en el paraíso cafetero',
        caracteristicas: [
          'Finca boutique de lujo',
          'Transporte privado',
          'Tours exclusivos privados',
          'Gastronomía gourmet',
          'Experiencias culturales premium',
          'Spa y wellness'
        ]
      }
    ]
  },
  {
    id: 'bogota',
    nombre: 'Bogotá',
    slug: 'bogota',
    fraseCorta: 'La capital cultural de Colombia',
    fraseInspiracional: 'Descubre la energía y cultura de la capital andina',
    ...getImagenes('Bogotá'),
    descripcion: 'Bogotá combina la historia colonial de La Candelaria con la modernidad de sus barrios comerciales. Museos de clase mundial, gastronomía innovadora, vida nocturna vibrante y cultura en cada esquina. La capital te espera con experiencias para todos los gustos.',
    precioDesde: 1600000,
    incluye: {
      alojamiento: true,
      transporte: true,
      tours: true,
      asistencia: true
    },
    planes: [
      {
        nombre: 'Básico',
        precio: 1600000,
        descripcion: 'Explora la capital',
        caracteristicas: [
          'Hotel 3 estrellas céntrico',
          'Transporte terrestre',
          'Tour de La Candelaria',
          'Asistencia turística'
        ]
      },
      {
        nombre: 'Estándar',
        precio: 2400000,
        descripcion: 'Cultura y gastronomía en Bogotá',
        caracteristicas: [
          'Hotel 4 estrellas zona rosa',
          'Vuelos incluidos',
          'Tours culturales y gastronómicos',
          'Entradas a museos',
          'Algunas comidas'
        ]
      },
      {
        nombre: 'Premium',
        precio: 3600000,
        descripcion: 'Experiencia premium en la capital',
        caracteristicas: [
          'Hotel 5 estrellas boutique',
          'Transporte VIP',
          'Tours privados exclusivos',
          'Gastronomía gourmet',
          'Experiencias culturales premium',
          'Concierge personal'
        ]
      }
    ]
  },
  {
    id: 'villa-de-leyva',
    nombre: 'Villa de Leyva',
    slug: 'villa-de-leyva',
    fraseCorta: 'Un viaje en el tiempo colonial',
    fraseInspiracional: 'Camina por calles coloniales que parecen congeladas en el tiempo',
    ...getImagenes('Villa de Leyva'),
    descripcion: 'Villa de Leyva es un pueblo colonial perfectamente conservado que te transporta al pasado. Con su inmensa plaza principal empedrada, casas blancas con techos de teja y un ambiente tranquilo, es el lugar perfecto para desconectar y vivir la historia colombiana.',
    precioDesde: 1700000,
    incluye: {
      alojamiento: true,
      transporte: true,
      tours: true,
      asistencia: true
    },
    planes: [
      {
        nombre: 'Básico',
        precio: 1700000,
        descripcion: 'Escape colonial relajante',
        caracteristicas: [
          'Posada colonial',
          'Transporte desde Bogotá',
          'Tour del pueblo',
          'Asistencia básica'
        ]
      },
      {
        nombre: 'Estándar',
        precio: 2500000,
        descripcion: 'Experiencia colonial completa',
        caracteristicas: [
          'Hotel boutique colonial',
          'Transporte incluido',
          'Tours históricos y culturales',
          'Comidas típicas',
          'Visitas a museos'
        ]
      },
      {
        nombre: 'Premium',
        precio: 3500000,
        descripcion: 'Lujo en el pueblo colonial',
        caracteristicas: [
          'Hacienda colonial de lujo',
          'Transporte privado VIP',
          'Tours exclusivos privados',
          'Gastronomía gourmet',
          'Experiencias culturales premium',
          'Spa y wellness'
        ]
      }
    ]
  },
  {
    id: 'nuqui',
    nombre: 'Nuquí',
    slug: 'nuqui',
    fraseCorta: 'Paraíso ecológico del Pacífico',
    fraseInspiracional: 'Conecta con la naturaleza virgen del Pacífico colombiano',
    ...getImagenes('Nuquí'),
    descripcion: 'Nuquí es un destino ecológico único donde la selva se encuentra con el océano. Observa ballenas jorobadas, relájate en aguas termales naturales y desconecta en este paraíso virgen del Pacífico. Una experiencia auténtica para amantes de la naturaleza.',
    precioDesde: 3200000,
    incluye: {
      alojamiento: true,
      transporte: true,
      tours: true,
      asistencia: true
    },
    planes: [
      {
        nombre: 'Básico',
        precio: 3200000,
        descripcion: 'Aventura ecológica esencial',
        caracteristicas: [
          'Ecolodge básico',
          'Vuelos incluidos',
          'Tours de naturaleza',
          'Comidas incluidas básicas'
        ]
      },
      {
        nombre: 'Estándar',
        precio: 4200000,
        descripcion: 'Experiencia ecológica completa',
        caracteristicas: [
          'Ecolodge cómodo',
          'Vuelos y traslados',
          'Avistamiento de ballenas',
          'Todas las comidas',
          'Tours guiados'
        ]
      },
      {
        nombre: 'Premium',
        precio: 5800000,
        descripcion: 'Lujo ecológico en el Pacífico',
        caracteristicas: [
          'Ecolodge de lujo',
          'Vuelos en avioneta privada',
          'Experiencias exclusivas',
          'Gastronomía local gourmet',
          'Spa natural',
          'Guía naturalista privado'
        ]
      }
    ]
  },
  {
    id: 'la-guajira',
    nombre: 'La Guajira',
    slug: 'la-guajira',
    fraseCorta: 'El desierto que toca el mar',
    fraseInspiracional: 'Vive la magia del desierto y la cultura wayuu en el extremo norte',
    ...getImagenes('La Guajira'),
    descripcion: 'La Guajira te sorprende con paisajes desérticos únicos, playas vírgenes y la cultura wayuu. Desde Punta Gallinas, el punto más al norte de Sudamérica, hasta las dunas y flamingos, descubre un destino que parece de otro planeta.',
    precioDesde: 2800000,
    incluye: {
      alojamiento: true,
      transporte: true,
      tours: true,
      asistencia: true
    },
    planes: [
      {
        nombre: 'Básico',
        precio: 2800000,
        descripcion: 'Aventura en el desierto',
        caracteristicas: [
          'Alojamiento en ranchería',
          'Transporte 4x4',
          'Tours al desierto',
          'Comidas típicas'
        ]
      },
      {
        nombre: 'Estándar',
        precio: 3800000,
        descripcion: 'Experiencia guajira completa',
        caracteristicas: [
          'Eco-lodge en playa',
          'Vuelos y transporte incluido',
          'Tours a Punta Gallinas',
          'Todas las comidas',
          'Experiencia cultural wayuu'
        ]
      },
      {
        nombre: 'Premium',
        precio: 5200000,
        descripcion: 'Lujo en el extremo norte',
        caracteristicas: [
          'Lodge de lujo en el desierto',
          'Transporte privado 4x4',
          'Tours exclusivos privados',
          'Gastronomía gourmet',
          'Experiencias culturales premium',
          'Guía wayuu personalizado'
        ]
      }
    ]
  }
]

/**
 * Obtener un destino por slug
 */
export const getDestinoBySlug = (slug: string): Destino | undefined => {
  return destinos.find(destino => destino.slug === slug)
}

/**
 * Formatear precio en COP
 */
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

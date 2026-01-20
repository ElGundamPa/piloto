/**
 * Helper para obtener rutas de imágenes locales
 * 
 * Mapea los nombres de destinos a las carpetas correspondientes
 * y maneja las diferentes extensiones de archivo
 */

// Mapeo de nombres de destinos a nombres de carpetas
const carpetasDestinos: Record<string, string> = {
  'Cartagena': 'Cartagena',
  'Santa Marta': 'Santa marta',
  'San Andrés': 'San Andres',
  'Medellín': 'Medellin',
  'Guatapé': 'Guatape',
  'Eje Cafetero': 'Eje cafetero',
  'Bogotá': 'Bogota',
  'Villa de Leyva': 'Villa de Leyva',
  'Nuquí': 'Nuqui',
  'La Guajira': 'La Guajira',
}

// Extensiones específicas por destino y por número de imagen
// Formato: {destino: {1: ext, 2: ext, 3: ext}}
const extensionesPorDestino: Record<string, {1: string, 2: string, 3: string}> = {
  'Cartagena': {1: '.jpg', 2: '.jpg', 3: '.jpg'},
  'Santa Marta': {1: '.jpg', 2: '.jpg', 3: '.jpg'},
  'San Andrés': {1: '.jpg', 2: '.jpg', 3: '.jpg'},
  'Medellín': {1: '.jpg', 2: '.jpg', 3: '.jpg'},
  'Guatapé': {1: '.jpg', 2: '.jpg', 3: '.jpg'},
  'Eje Cafetero': {1: '.jpg', 2: '.jpg', 3: '.webp'},
  'Bogotá': {1: '.jpg', 2: '.webp', 3: '.webp'}, // Cambiado a .jpg para compatibilidad
  'Villa de Leyva': {1: '.webp', 2: '.webp', 3: '.webp'},
  'Nuquí': {1: '.jpg', 2: '.png', 3: '.jpg'},
  'La Guajira': {1: '.jpeg', 2: '.jpg', 3: '.webp'},
}

/**
 * Obtiene la ruta de una imagen local
 * @param nombreDestino - Nombre del destino (ej: "Cartagena")
 * @param numeroImagen - Número de imagen (1, 2 o 3)
 * @returns Ruta relativa a /public
 */
export function getImagenDestino(nombreDestino: string, numeroImagen: 1 | 2 | 3): string {
  const carpeta = carpetasDestinos[nombreDestino]
  
  if (!carpeta) {
    console.warn(`No se encontró carpeta para el destino: ${nombreDestino}`)
    return '/imagenes/default.jpg' // Fallback
  }

  const extensiones = extensionesPorDestino[nombreDestino]
  const extension = extensiones?.[numeroImagen] || '.jpg'
  
  return `/imagenes/${carpeta}/${numeroImagen}${extension}`
}

/**
 * Obtiene las 3 imágenes de un destino
 */
export function getImagenesDestino(nombreDestino: string): {
  imagen1: string  // Hero / Principal
  imagen2: string  // Secundaria
  imagen3: string  // Galería
} {
  return {
    imagen1: getImagenDestino(nombreDestino, 1),
    imagen2: getImagenDestino(nombreDestino, 2),
    imagen3: getImagenDestino(nombreDestino, 3),
  }
}

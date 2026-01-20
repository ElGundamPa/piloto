# 🗺️ E-commerce de Destinos - Colombia

Plataforma tipo e-commerce moderna para agencia de viajes, enfocada en destinos turísticos de Colombia. Cada destino se presenta como un "producto" con información detallada, planes y precios.

## 🎯 Características

- ✅ **E-commerce de Experiencias**: Destinos presentados como productos
- ✅ **10 Destinos Colombianos**: Cartagena, Santa Marta, San Andrés, Medellín, Guatapé, Eje Cafetero, Bogotá, Villa de Leyva, Nuquí y La Guajira
- ✅ **Páginas Individuales**: Cada destino con su propia página detallada
- ✅ **Planes y Precios**: Básico, Estándar y Premium con información completa
- ✅ **Diseño Moderno**: Estilo e-commerce limpio y profesional
- ✅ **Mobile-first**: Totalmente responsive
- ✅ **WhatsApp Integration**: Conversión directa a WhatsApp
- ✅ **SEO Optimizado**: Metadata dinámica y estructura semántica

## 🧩 Principios UI/UX Aplicados

### Ley de Hick
- Decisiones simples: Grid claro de destinos
- Formularios mínimos
- CTAs únicos y claros

### Ley de Fitts
- Botones grandes y accesibles
- Áreas de click generosas
- Botón flotante de WhatsApp siempre visible

### Jerarquía Visual
- Títulos claramente diferenciados
- Contraste alto en elementos importantes
- Espacios en blanco bien distribuidos

### Proximidad y Alineación
- Información relacionada agrupada
- Grids consistentes
- Espaciado uniforme

### Diseño Escaneable
- Patrón F/Z visual
- Texto corto y claro
- Iconos para reconocimiento rápido

### Diseño Emocional
- Experiencias de viaje inspiradoras
- Imágenes grandes y atractivas
- Contenido emocional y confiable

## 🛠️ Tecnologías

- **Next.js 14**: Framework React con App Router
- **TypeScript**: Tipado estático
- **Tailwind CSS**: Estilos utility-first
- **React**: Biblioteca UI moderna

## 📦 Instalación

1. Instalar dependencias:
```bash
npm install
```

2. Configurar número de WhatsApp:
   - Crea el archivo `.env.local` en la raíz del proyecto
   - Agrega: `NEXT_PUBLIC_WHATSAPP_NUMBER=1234567890` (reemplaza con tu número real)
   - Formato: código de país + número sin espacios (ej: 573001234567 para Colombia)

3. Ejecutar en desarrollo:
```bash
npm run dev
```

4. Abrir en el navegador:
```
http://localhost:3000
```

## 🚀 Producción

```bash
npm run build
npm start
```

## 📁 Estructura del Proyecto

```
piloto/
├── app/
│   ├── layout.tsx              # Layout principal con metadata SEO
│   ├── page.tsx                # Página principal (grid de destinos)
│   ├── destinos/
│   │   └── [slug]/
│   │       └── page.tsx        # Página individual de destino
│   └── globals.css             # Estilos globales
├── components/
│   ├── Navbar.tsx              # Navegación principal
│   ├── HeroSection.tsx         # Hero de página principal (con video)
│   ├── DestinoCard.tsx         # Card de destino (grid e-commerce)
│   ├── HeroDestino.tsx         # Hero de página individual
│   ├── IncluyeSection.tsx      # Sección "¿Qué incluye?"
│   ├── PlanCard.tsx            # Card de plan (Básico/Estándar/Premium)
│   ├── CTADestino.tsx          # CTA principal de destino
│   └── WhatsAppFloatButton.tsx # Botón flotante de WhatsApp
├── lib/
│   ├── destinos.ts             # Datos de destinos y utilidades
│   └── config.ts               # Configuración (WhatsApp, etc.)
└── public/
    └── video.mp4               # Video de fondo del hero
```

## 🗺️ Destinos Incluidos

1. **Cartagena** - La heroica ciudad amurallada
2. **Santa Marta** - Montaña y mar
3. **San Andrés** - Paraíso caribeño
4. **Medellín** - Ciudad de la eterna primavera
5. **Guatapé** - Pueblo más colorido
6. **Eje Cafetero** - Corazón cafetero
7. **Bogotá** - Capital cultural
8. **Villa de Leyva** - Viaje en el tiempo colonial
9. **Nuquí** - Paraíso ecológico del Pacífico
10. **La Guajira** - Desierto que toca el mar

## 📄 Estructura de Páginas

### Página Principal (`/`)
- Hero inspiracional con video de fondo
- Grid de destinos tipo e-commerce
- Cada card muestra: imagen, nombre, frase corta y CTA

### Página de Destino (`/destinos/[slug]`)
- Hero del destino con imagen grande
- Descripción detallada del viaje
- Sección de precios desde
- ¿Qué incluye? (iconos visuales)
- 3 Planes: Básico, Estándar, Premium
- CTA principal para WhatsApp

## 🎨 Personalización

### Agregar/Modificar Destinos
Edita el archivo `lib/destinos.ts`:

```typescript
export const destinos: Destino[] = [
  {
    id: 'nuevo-destino',
    nombre: 'Nuevo Destino',
    slug: 'nuevo-destino',
    // ... resto de propiedades
  }
]
```

### Cambiar Precios
Los precios están en COP (pesos colombianos) en `lib/destinos.ts`. 
Usa `formatPrice()` para formatearlos correctamente.

### Personalizar Colores
Edita `tailwind.config.js`:
- `primary`: Azules principales
- `secondary`: Verdes complementarios
- `whatsapp`: Color del botón WhatsApp

### Cambiar Imágenes
Las imágenes actuales usan Unsplash. Reemplázalas en el array `destinos` con URLs propias o imágenes en `/public`.

## 📱 Características de cada Destino

Cada destino incluye:
- **Imagen Hero**: Imagen grande de fondo
- **Imagen Card**: Imagen para el grid principal
- **Frase Corta**: Para la card del grid
- **Frase Inspiracional**: Para el hero del destino
- **Descripción**: Texto completo del destino
- **Precio Desde**: Precio base en COP
- **Incluye**: Alojamiento, Transporte, Tours, Asistencia
- **3 Planes**: Básico, Estándar y Premium con precios y características

## ♿ Accesibilidad

- Etiquetas semánticas HTML5
- ARIA labels en elementos interactivos
- Navegación por teclado funcional
- Contraste de colores WCAG AA
- Focus visible en todos los elementos
- Breadcrumbs para navegación

## 🔍 SEO

- Metadata dinámica por destino
- Estructura semántica con headings jerárquicos
- Alt text en todas las imágenes
- URLs limpias y descriptivas (`/destinos/cartagena`)
- Generación estática de páginas

## 📝 Notas

- Este es un proyecto demo/piloto sin backend
- Los precios son referenciales y pueden variar
- WhatsApp redirige con mensaje preconfigurado
- Las imágenes son de ejemplo (Unsplash)
- Configura el número de WhatsApp en `.env.local`

## 🎯 Próximas Mejoras Posibles

- Filtros por región o tipo de destino
- Búsqueda de destinos
- Comparador de planes
- Galería de imágenes por destino
- Testimonios y reseñas
- Blog de viajes
- Calendario de disponibilidad

---

**Desarrollado con ❤️ aplicando principios de UI/UX para conversión**

*Plataforma tipo e-commerce para mostrar destinos colombianos de forma profesional y moderna*

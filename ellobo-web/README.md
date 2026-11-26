# Sitio web · Veterinaria El Lobo

Versión en HTML + Tailwind de las pantallas del archivo de Figma **ACT2** (Inicio, Servicios, Conócenos y Tienda).

## Cómo probarlo
1. Abre esta carpeta en Visual Studio Code.
2. Instala la extensión **Live Server** (Ritwick Dey) si no la tienes.
3. Clic derecho en `index.html` → **Open with Live Server**. Se abre en tu navegador y se recarga solo al guardar.
   - También funciona con doble clic en `index.html`, pero necesitas internet (Tailwind y la tipografía se cargan en línea).

## Estructura
- `index.html`, `servicios.html`, `conocenos.html`, `tienda.html` – las 4 páginas.
- `css/estilos.css` – componentes del sistema (botones, tarjetas, carrusel, preguntas, pie).
- `js/tailwind.config.js` – colores y tipografía de El Lobo (mismos valores que las variables de Figma).
- `js/main.js` – menú móvil, carrusel de reseñas, carrito de prueba, boletín y avisos.
- `assets/` – logos, íconos, huellas, estrellas, maqueta del teléfono y foto de portada exportados desde Figma.

## Qué funciona
- Menú responsivo (escritorio y móvil).
- “Agendar cita” y botones de WhatsApp abren un chat con el 871 156 3912 con mensaje prellenado.
- “Cómo llegar” abre Google Maps de cada sucursal.
- Las categorías y promociones de la Tienda llevan a las colecciones reales de elloboveterinaria.com.
- “Agregar al carrito” es de prueba: suma al contador del encabezado (no cobra ni guarda pedidos).
- Preguntas frecuentes desplegables y carrusel de reseñas automático.

## Pendiente
- Tailwind se carga desde su CDN (ideal para probar). Para publicar, compílalo con Tailwind CLI.
- Las tres pantallas nuevas usan la misma foto de portada; cambia `assets/portada.jpg` por foto propia de cada página cuando la tengas.
- Precios de “Más vendidos” son de referencia (Buen Fin 2026).

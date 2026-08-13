# 🎁 Caja de regalo obstinada

Página de una sola pantalla, en paleta pastel: haces click en la caja de regalo, la
tapa sale volando, se asoma una carita feliz sacando el dedo del medio 🖕, cae confeti
y aparece el mensaje **"¿Ya comiste, obstinada?"**.

## Ver en vivo

👉 https://samurai06.github.io/caja-regalo-obstinada/

## Correr en local

No hay build, no hay dependencias. HTML + CSS + JavaScript vanilla.

```bash
git clone https://github.com/samurai06/caja-regalo-obstinada.git
cd caja-regalo-obstinada
python3 -m http.server 8000
```

Y abres http://localhost:8000 — o directamente doble click en `index.html`.

## Estructura

```
.
├── index.html   # markup, sin lógica ni estilos inline
├── styles.css   # caja y carita dibujadas 100% en CSS + paleta y animaciones
└── app.js       # abrir / cerrar la caja y el confeti
```

## Detalles

- La caja **y la carita feliz** están dibujadas con CSS puro: ni una imagen, ni un
  emoji. El único emoji de la página es el dedo del medio.
- Paleta pastel completa en variables CSS (`:root`): rosa, menta, lavanda y
  mantequilla sobre fondo casi blanco.
- Movimiento por todos lados: la caja se balancea, la tapa sale volando hacia la
  izquierda (para no chocar con el dedo, que está a la derecha), la carita rebota
  entre chispitas, el dedo se agita, late un resplandor detrás y el confeti cae
  mientras se balancea (dos animaciones anidadas: el padre cae, el hijo oscila).
- Los pasteles del confeti van un punto más saturados que la paleta base: sobre un
  fondo casi blanco los tonos muy suaves se lavan y dejan de leerse.
- La caja es un `<button>`, así que funciona con teclado (Enter / Espacio) y lectores de pantalla.
- El mensaje usa `aria-live="polite"` para anunciarse al abrir.
- Respeta `prefers-reduced-motion`: se ve todo, pero quieto y sin confeti.

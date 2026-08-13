# 🎁 Caja de regalo obstinada

Página de una sola pantalla: haces click en la caja de regalo, la tapa sale volando,
se asoma una cara molesta, cae confeti y aparece el mensaje
**"¿Ya comiste, obstinada?"**.

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
├── styles.css   # caja y cara dibujadas 100% en CSS + animaciones
└── app.js       # abrir / cerrar la caja y el confeti
```

## Detalles

- La caja **y la cara molesta** están dibujadas con CSS puro: ni una imagen, ni un emoji.
- Movimiento por todos lados: la caja se balancea, la tapa sale volando de costado,
  la cara rebota enojada echando vapor, late un resplandor detrás y el confeti cae
  mientras se balancea (dos animaciones anidadas: el padre cae, el hijo oscila).
- La caja es un `<button>`, así que funciona con teclado (Enter / Espacio) y lectores de pantalla.
- El mensaje usa `aria-live="polite"` para anunciarse al abrir.
- Respeta `prefers-reduced-motion`: se ve todo, pero quieto y sin confeti.

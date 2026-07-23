# Calculadora — The Odin Project

Calculadora funcional construida en HTML, CSS y JavaScript puro (sin frameworks ni librerías), como proyecto final del curso de fundamentos de JavaScript de [The Odin Project](https://www.theodinproject.com/lessons/foundations-calculator).

## Demo
PENDING

## Funcionalidades

- Operaciones básicas: suma, resta, multiplicación y división.
- Encadenamiento de operaciones (ej. `12 + 7 - 1 =` da `18`, usando el resultado parcial como siguiente operando).
- Entrada de números decimales, con validación para no permitir más de un punto por número.
- Botón de borrado (backspace) para corregir el último dígito ingresado.
- Soporte completo de teclado, incluyendo el teclado numérico (numpad).
- Botón de limpiar (`AC`) que reinicia el estado completo de la calculadora.
- Manejo de errores: división entre 0 sin romper la aplicación.
- Redondeo de resultados con decimales largos para que no desborden el display.
- Protección contra operadores presionados dos veces seguidas o el uso de `=` sin una operación completa.

## Tecnologías

- **HTML5** — estructura semántica de la calculadora.
- **CSS3** (Flexbox) — diseño responsive con paleta de colores morada.
- **JavaScript (Vanilla)** — toda la lógica de cálculo y manejo de eventos, sin `eval()` ni `new Function()`.

## Cómo ejecutarlo localmente

1. Clona el repositorio:
   ```bash
   git clone <url-del-repositorio>
   ```
2. Abre `index.html` en tu navegador (no requiere servidor ni instalación de dependencias).

## Estructura del proyecto

```
├── index.html      # Estructura de la calculadora
├── style.css       # Estilos (Flexbox, paleta morada)
├── calculator.js   # Lógica de la calculadora
└── README.md
```

## Lo que aprendí

- Construir funciones matemáticas propias en lugar de depender de `eval()`.
- Manejar el estado de una aplicación con variables (`firstNumber`, `operator`, `secondNumber`, `current`) y sincronizarlo con la interfaz.
- Detectar y corregir casos borde (operaciones encadenadas, doble operador, división entre cero, redondeo de decimales).
- Usar `data-*` attributes y `querySelector` para conectar el HTML con la lógica de JavaScript.
- Diferencia entre `==` y `===`, y por qué preferir la igualdad estricta.

## Créditos

Proyecto basado en el [lesson de Calculator de The Odin Project](https://www.theodinproject.com/lessons/foundations-calculator).
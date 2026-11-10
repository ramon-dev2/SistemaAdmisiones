# University · Admisiones

Frontend React + TypeScript + Vite, basado en las dos capturas de `mock/` y en los tokens de las skills locales. Las capturas son referencias, no imágenes utilizadas para sustituir las pantallas.

## Ejecutar

Requiere Node.js 22.12 o superior y acceso al registro npm.

```powershell
npm.cmd install
npm.cmd run dev
```

En Windows se usa `npm.cmd` para evitar restricciones de ejecución de `npm.ps1`. Abrir la URL que indique Vite. Para compilar: `npm.cmd run build`.

## Pantallas

- `/login`: acceso de demostración; acepta correo válido y contraseña de al menos cuatro caracteres.
- `/dashboard`: indicadores y solicitudes recientes.
- `/modules`: navegación a los módulos.
- `/admissions/new`: formulario con React Hook Form + Zod y validación de archivo.
- `/admissions`: búsqueda por nombre/código, carrera y estado, con filtros en URL.
- `/admissions/:id`: expediente del aspirante.
- `/academic`: matrícula de muestra `2026-0015`; otras matrículas muestran un estado vacío.
- `/reports`: indicadores, exportación CSV e impresión a PDF desde el navegador.

## Datos e integración

Los registros de muestra y nuevas solicitudes se guardan en `localStorage` bajo `university.admissions`. No existe backend en esta carpeta. El login es una simulación de navegación, no autenticación; las rutas no tienen autorización real. Los archivos se validan, pero no se almacenan ni se suben. No usar datos personales reales.

`src/lib/api/apiClient.ts` incluye el cliente HTTP y manejo de ProblemDetails. `.env.example` documenta `VITE_API_BASE_URL`. Los endpoints y contratos deben acordarse con el backend antes de conectar las features; actualmente TanStack Query consulta el adaptador local.

## Referencias visuales y validación

Se consultaron en Figma el panel, los módulos y la consulta académica. El conector alcanzó su límite de cuota en el resto de nodos. El usuario indicó usar `mock/`, que contiene las ocho vistas. Paleta, tipografías, jerarquía, tarjetas, tablas, login y disposición se basan en esas referencias. Los iconos son símbolos tipográficos provisionales: la red bloqueó la descarga de los SVG originales.

La identidad visual actual utiliza azul tinta para la marca y los títulos, azul medio para acciones y navegación, y verde exclusivamente para admisiones aprobadas. Los tokens están centralizados en `src/styles/tokens.css`.

Se verificaron las ocho pantallas a 1440, 390 y 320 px, el foco de teclado y la coherencia de los estados. TypeScript y la compilación pasaron. En entornos con restricciones al cargar la configuración de Vite, usar `npm.cmd run build -- --configLoader runner` y `npm.cmd run dev -- --configLoader runner`.

Las referencias de `mock/`, las skills locales y su instalador se conservan en el equipo y se excluyen de Git mediante `.gitignore`.

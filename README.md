# University - Sistema de Admisiones

Frontend React + TypeScript + Vite para gestionar solicitudes de admision y consultar informacion academica.

## Inicio

Requiere Node.js 22.12 o superior.

```powershell
npm.cmd install
npm.cmd run dev
```

## Comprobaciones

```powershell
npm.cmd run typecheck
npm.cmd run build
```

Si el entorno restringe el cargador de configuracion de Vite, agregar `-- --configLoader runner` al comando de desarrollo o compilacion.

## Funciones

- Acceso de demostracion, panel y menu de modulos.
- Registro, busqueda y detalle de solicitudes.
- Consulta academica con matricula de muestra `2026-0015`.
- Reportes con exportacion CSV e impresion a PDF.
- Identidad visual compartida, estados con etiquetas y soporte para escritorio y movil.

Los datos son ficticios y las solicitudes nuevas se guardan en el navegador. El acceso no implementa autenticacion real. La integracion .NET requiere configurar y conectar contratos reales; ver [.env.example](.env.example).

Consulta [PROYECTO.md](PROYECTO.md) para las rutas, limitaciones y detalles de integracion.

Las referencias visuales, las skills locales, las dependencias instaladas y la compilacion generada estan excluidas de Git.

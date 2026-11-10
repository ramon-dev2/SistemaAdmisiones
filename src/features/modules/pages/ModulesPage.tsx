import { Link } from 'react-router-dom';
import Title from '../../../components/ui/PageHeader';
const modules = [
  [
    'Registro de solicitudes', 'Crea una solicitud y registra la información del aspirante.', 'Crear solicitud', '/admissions/new', '♧'
  ], [
    'Seguimiento de admisiones', 'Busca aspirantes y consulta el estado de sus expedientes.', 'Consultar solicitudes', '/admissions', '⌕'
  ], [
    'Información académica', 'Consulta estudiantes, asignaturas y calificaciones.', 'Consultar estudiante', '/academic', '◫'
  ], [
    'Reportes de admisión', 'Visualiza indicadores y exporta el resumen del período.', 'Explorar reportes', '/reports', '▥'
  ], [
    'Panel principal', 'Obtén una vista general de solicitudes y tareas pendientes.', 'Ir al panel', '/dashboard', '⌂'
  ], [
    'Acceso al portal', 'Regresa a la pantalla de acceso de este prototipo.', 'Cerrar sesión', '/login', '⇥'
  ]
];
export default function ModulesPage() {
  return <>
    <Title title="Todo lo que necesitas, en un lugar." description="Selecciona un módulo para continuar tu gestión." />
    <div className="moduleGrid">{modules.map(([title, desc, label, to, icon]) => <section className="card module" key={to}>
      <span className="navIcon" aria-hidden>{icon}</span>
      <h2>{title}</h2>
      <p>{desc}</p>
      <Link className="button secondary" to={to}>{label} →</Link>
    </section>)}</div>
    <p className="notice">Vista de referencia: personal de admisiones. Los roles y permisos definitivos se definirán durante la implementación.</p>
  </>;
}

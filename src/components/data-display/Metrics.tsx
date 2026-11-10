import type { Admission } from '../../features/admissions/data';
import dashboardStyles from '../../features/dashboard/Dashboard.module.css';
export default function Metrics({ rows, academic = false, attentionFirst = false }: {
  rows: Admission[];
  academic?: boolean;
  attentionFirst?: boolean;
}) {
  const values = academic ? [
    [
      'Créditos inscritos', '12', '4 asignaturas'
    ], [
      'Índice acumulado', '3,75', 'Escala 0–4 · Ilustrativo'
    ], [
      'Período cursado', '1.º', 'Ingreso: septiembre 2026'
    ]
  ] : [
    [
      'Solicitudes recibidas', String(rows.length), 'Muestra del período actual'
    ], [
      'En revisión', String(rows.filter(r => r.status === 'En revisión').length), 'Expedientes en evaluación'
    ], [
      'Admitidas', String(rows.filter(r => r.status === 'Admitida').length), 'Solicitudes aprobadas'
    ], [
      'Pendientes', String(rows.filter(r => r.status === 'Pendiente').length), 'Documentación por completar'
    ]
  ];
  const orderedValues = attentionFirst ? [
    values[3], values[1], values[0], values[2]
  ] : values;
  return <div className={`metrics ${academic ? 'academicMetrics' : ''}`}>{orderedValues.map(([label, value, hint]) => <section className={`card metric ${attentionFirst && (label === 'Pendientes' || label === 'En revisión') ? dashboardStyles.priorityMetric : ''}`} key={label}>
    <p>{label}</p>
    <strong>{value}</strong>
    <small>{hint}</small>
  </section>)}</div>;
}

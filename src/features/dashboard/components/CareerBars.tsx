import { careers, type Admission } from '../../admissions/data';
export default function CareerBars({ rows }: {
  rows: Admission[];
}) {
  return <section className="card bars">
    <h2>Solicitudes por carrera</h2>
    <p>{rows.length} solicitudes en total</p>{careers.map(c => {
      const count = rows.filter(r => r.career === c).length;
      return <div className="barRow" key={c}>
        <span>{c.replace('Ingeniería de Software', 'Ing. de Software')}</span>
        <meter min="0" max={Math.max(2, ...careers.map(career => rows.filter(r => r.career === career).length))} value={count}>{count}</meter>
        <b>{count}</b>
      </div>;
    })}</section>;
}

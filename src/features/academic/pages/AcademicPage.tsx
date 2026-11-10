import { useState } from 'react';
import Title from '../../../components/ui/PageHeader';
import { Button } from '../../../components/ui/Button';
import { StatusBadge } from '../../../components/ui/StatusBadge';
import Metrics from '../../../components/data-display/Metrics';
export default function AcademicPage() {
  const [id, setId] = useState('2026-0015');
  const [searched, setSearched] = useState('2026-0015');
  const subjects = [
    [
      'INF-101', 'Introducción a la programación', 'Lun. y mié. · 18:00'
    ], [
      'MAT-101', 'Matemática I', 'Mar. y jue. · 18:00'
    ], [
      'ESP-101', 'Comunicación escrita', 'Sáb. · 08:00'
    ], [
      'ORI-101', 'Orientación universitaria', 'Sáb. · 11:00'
    ]
  ];
  return <>
    <Title title="Consulta académica" description="Consulta el resumen del estudiante y su carga académica." />
    <form className="card filters academicFilter" onSubmit={e => {
      e.preventDefault();
      setSearched(id.trim());
    }}>
      <label>Matrícula del estudiante<input value={id} required onChange={e => setId(e.target.value)} />
      </label>
      <label>Período académico<select>
        <option>Septiembre – diciembre 2026</option>
      </select>
      </label>
      <Button>Consultar</Button>
    </form>{searched !== '2026-0015' ? <section className="card empty" role="status">No se encontró esta matrícula. Prueba con 2026-0015.</section> : <>
      <section className="card next">
        <div>
          <h2>Andrea López</h2>
          <p>2026-0015 · Ingeniería de Software</p>
        </div>
        <span className="activeStatus">● Activa</span>
      </section>
      <Metrics rows={[]} academic />
      <section className="card">
        <h2>Asignaturas del período</h2>
        <div className="tableScroll">
          <table className="subjects">
            <thead>
              <tr>{[
                'Código', 'Asignatura', 'Créditos', 'Horario', 'Estado'
              ].map(h => <th key={h}>{h}</th>)}</tr>
            </thead>
            <tbody>{subjects.map(([code, name, time]) => <tr key={code}>
              <td>{code}</td>
              <td>
                <strong>{name}</strong>
              </td>
              <td>3</td>
              <td className="muted">{time}</td>
              <td>
                <StatusBadge status="En curso" />
              </td>
            </tr>)}</tbody>
          </table>
        </div>
        <small>Registro académico ficticio para ilustrar el diseño. No constituye una certificación.</small>
      </section>
    </>}</>;
}

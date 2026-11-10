import Title from '../../../components/ui/PageHeader';
import { Button } from '../../../components/ui/Button';
import Metrics from '../../../components/data-display/Metrics';
import { careers } from '../../admissions/data';
import { useAdmissions } from '../../admissions/hooks/useAdmissions';
export default function ReportsPage() {
  const { data: rows = [] } = useAdmissions();
  function exportCsv() {
    const csv = '\uFEFFCarrera,Solicitudes,Admitidas,En revisión,Pendientes\r\n' + careers.map(c => [
      c, rows.filter(r => r.career === c).length, ...[
        'Admitida', 'En revisión', 'Pendiente'
      ].map(s => rows.filter(r => r.career === c && r.status === s).length)
    ].join(',')).join('\r\n');
    const url = URL.createObjectURL(new Blob([
      csv
    ], {
      type: 'text/csv;charset=utf-8'
    }));
    const a = document.createElement('a');
    a.href = url;
    a.download = 'reporte-admisiones.csv';
    a.click();
    URL.revokeObjectURL(url);
  }
  return <>
    <Title title="Reportes de admisión" description="Una mirada clara al proceso y sus resultados." />
    <section className="card filters">
      <label>Período de admisión<select>
        <option>Enero – abril 2027</option>
      </select>
      </label>
      <label>Tipo de reporte<select>
        <option>Resumen general de admisiones</option>
      </select>
      </label>
      <Button className="secondary" onClick={exportCsv}>Exportar CSV</Button>
      <Button onClick={() => window.print()}>Imprimir / PDF</Button>
    </section>
    <Metrics rows={rows} />
    <div className="dashboardGrid">
      <section className="card">
        <h2>Distribución por carrera</h2>
        <div className="columnChart">{careers.map((c, i) => <div key={c}>
          <b>{rows.filter(r => r.career === c).length}</b>
          <div className={`column col${i}`} style={{
            height: rows.filter(r => r.career === c).length * 40
          }} />
          <small>{c.replace('Ingeniería de Software', 'Software')}</small>
        </div>)}</div>
        <small>Conteo de solicitudes registradas por carrera.</small>
      </section>
      <section className="card">
        <h2>Estado del proceso</h2>{[
          'Admitida', 'En revisión', 'Pendiente'
        ].map(s => <div className="documentRow" key={s}>
          <span>{s}</span>
          <b>{rows.filter(r => r.status === s).length}</b>
        </div>)}<p className="notice">Indicadores calculados con los datos de demostración de este navegador.</p>
      </section>
    </div>
    <section className="card">
      <h2>Resumen por carrera</h2>
      <div className="tableScroll">
        <table>
          <thead>
            <tr>{[
              'Carrera', 'Solicitudes', 'Admitidas', 'En revisión', 'Pendientes'
            ].map(s => <th key={s}>{s}</th>)}</tr>
          </thead>
          <tbody>{careers.map(c => <tr key={c}>
            <td>
              <strong>{c}</strong>
            </td>
            <td>{rows.filter(r => r.career === c).length}</td>{[
              'Admitida', 'En revisión', 'Pendiente'
            ].map(s => <td key={s}>{rows.filter(r => r.career === c && r.status === s).length}</td>)}</tr>)}</tbody>
        </table>
      </div>
    </section>
  </>;
}

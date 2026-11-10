import { Link } from 'react-router-dom';
import Metrics from '../../../components/data-display/Metrics';
import AdmissionTable from '../../admissions/components/AdmissionTable';
import { useAdmissions } from '../../admissions/hooks/useAdmissions';
import CareerBars from '../components/CareerBars';
import dashboardStyles from '../Dashboard.module.css';
export default function DashboardPage() {
  const { data: rows = [], isPending, isError } = useAdmissions();
  if(isPending)
    return <p role="status">Cargando solicitudes…</p>;
  if(isError)
    return <p role="alert">No se pudieron cargar las solicitudes.</p>;
  return <>
    <header className={dashboardStyles.header}>
      <div>
        <h1>Admisiones</h1>
        <p>Período activo · Enero – abril 2027</p>
      </div>
      <Link className="button" to="/admissions">Revisar solicitudes</Link>
    </header>
    <Metrics rows={rows} attentionFirst />
    <section className={`card next ${dashboardStyles.attention}`}>
      <div>
        <h2>Tu siguiente paso</h2>
        <p>Revisa los dos expedientes que requieren documentos para continuar la evaluación.</p>
      </div>
      <Link className="button secondary" to="/admissions?status=Pendiente">Ver pendientes →</Link>
    </section>
    <div className="dashboardGrid">
      <section className="card">
        <h2>Solicitudes recientes</h2>
        <AdmissionTable rows={rows.slice(0, 4)} compact />
      </section>
      <CareerBars rows={rows} />
    </div>
  </>;
}

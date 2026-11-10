import { Link, useParams } from 'react-router-dom';
import Title from '../../../components/ui/PageHeader';
import { StatusBadge } from '../../../components/ui/StatusBadge';
import { useAdmissions } from '../hooks/useAdmissions';
export default function AdmissionDetailPage() {
  const { id } = useParams();
  const { data: rows = [], isPending } = useAdmissions();
  const row = rows.find(r => r.id === id);
  if(isPending)
    return <p role="status">Cargando expediente…</p>;
  if(!row)
    return <>
      <Title title="Expediente no encontrado" description="No existe una solicitud con este número." />
      <Link to="/admissions">Volver a consultas →</Link>
    </>;
  return <>
    <Title title="Expediente del aspirante" description={`${row.id} · Período enero – abril 2027`} />
    <section className="card next">
      <div>
        <h2>{row.name}</h2>
        <p>{row.career}</p>
      </div>
      <StatusBadge status={row.status} />
    </section>
    <div className="detailGrid">
      <section className="card">
        <h2>Información de la solicitud</h2>
        <dl className="infoGrid">
          <div>
            <dt>Correo electrónico</dt>
            <dd>{row.email}</dd>
          </div>
          <div>
            <dt>Fecha de registro</dt>
            <dd>21 oct. 2026</dd>
          </div>
          <div>
            <dt>Carrera de interés</dt>
            <dd>{row.career}</dd>
          </div>
          <div>
            <dt>Período solicitado</dt>
            <dd>Enero – abril 2027</dd>
          </div>
          <div>
            <dt>Documento de identidad</dt>
            <dd>Por confirmar</dd>
          </div>
          <div>
            <dt>Estado del expediente</dt>
            <dd>{row.status}</dd>
          </div>
        </dl>
        <h2>Documentos del expediente</h2>{[
          'Documento de identidad', 'Certificado de bachiller', 'Récord de calificaciones'
        ].map((d, i) => <div className="documentRow" key={d}>
          <span>{d}</span>
          <StatusBadge status={i === 0 ? 'En revisión' : 'Pendiente'} />
        </div>)}<small>Estados documentales ilustrativos. No se han cargado archivos reales.</small>
      </section>
      <section className="card advice">
        <h2>Seguimiento</h2>
        <h3>● Solicitud registrada</h3>
        <p>21 oct. 2026 · Portal de admisiones</p>
        <hr />
        <h3>● Evaluación en curso</h3>
        <p>Revisión de datos y documentos</p>
        <p className="notice">La aprobación se realizará con las reglas del sistema.</p>
        <Link className="button secondary" to="/admissions">← Volver a consultas</Link>
      </section>
    </div>
  </>;
}

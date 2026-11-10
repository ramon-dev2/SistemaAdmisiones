import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Title from '../../../components/ui/PageHeader';
import { Button } from '../../../components/ui/Button';
import { careers } from '../data';
import { useAdmissions } from '../hooks/useAdmissions';
import AdmissionTable from '../components/AdmissionTable';
export default function AdmissionsPage() {
  const { data: rows = [], isPending, isError } = useAdmissions();
  const [params, setParams] = useSearchParams();
  const [search, setSearch] = useState(params.get('search') || '');
  const [career, setCareer] = useState(params.get('career') || '');
  const [status, setStatus] = useState(params.get('status') || '');
  const filtered = rows.filter(r => (!params.get('search') || `${r.name} ${r.id}`.toLowerCase().includes(params.get('search')!.toLowerCase())) && (!params.get('career') || r.career === params.get('career')) && (!params.get('status') || r.status === params.get('status')));
  return <>
    <Title title="Consulta de solicitudes" description="Encuentra aspirantes y da seguimiento a sus expedientes." />
    <section className="card">
      <form className="filters" onSubmit={e => {
        e.preventDefault();
        setParams({
          search, career, status
        });
      }}>
        <label>Buscar aspirante<input value={search} onChange={e => setSearch(e.target.value)} placeholder="Nombre o número de solicitud" />
        </label>
        <label>Carrera<select value={career} onChange={e => setCareer(e.target.value)}>
          <option value="">Todas las carreras</option>{careers.map(c => <option key={c}>{c}</option>)}</select>
        </label>
        <label>Estado<select value={status} onChange={e => setStatus(e.target.value)}>
          <option value="">Todos los estados</option>{[
            'En revisión', 'Admitida', 'Pendiente'
          ].map(s => <option key={s}>{s}</option>)}</select>
        </label>
        <Button>Buscar</Button>
      </form>
      <div className="actions">
        <Button className="secondary" onClick={() => {
          setSearch('');
          setCareer('');
          setStatus('');
          setParams({});
        }}>Limpiar</Button>
        <Link className="button" to="/admissions/new">+ Nueva solicitud</Link>
      </div>{isPending ? <p role="status">Cargando…</p> : isError ? <p role="alert">No fue posible cargar los datos.</p> : <AdmissionTable rows={filtered} />}<small>{filtered.length} resultados · Datos de demostración</small>
    </section>
    <p className="notice">Selecciona una solicitud para consultar su expediente. Los datos se guardan en este navegador.</p>
  </>;
}

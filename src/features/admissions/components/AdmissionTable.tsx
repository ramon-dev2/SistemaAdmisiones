import { Link } from 'react-router-dom';
import type { Admission } from '../data';
import { StatusBadge } from '../../../components/ui/StatusBadge';
export default function AdmissionTable({ rows, compact = false }: {
  rows: Admission[];
  compact?: boolean;
}) {
  return <div className="tableScroll">
    <table>
      <thead>
        <tr>
          <th>Aspirante</th>
          <th>Carrera</th>
          <th>Estado</th>{!compact && <th>Fecha</th>}<th>Detalle</th>
        </tr>
      </thead>
      <tbody>{rows.map(r => <tr key={r.id}>
        <td>
          <strong>{r.name}</strong>
          <small>{r.id}</small>
        </td>
        <td>{r.career}</td>
        <td>
          <StatusBadge status={r.status} />
        </td>{!compact && <td>21 oct. 2026</td>}<td>
          <Link to={`/admissions/${r.id}`}>Ver →</Link>
        </td>
      </tr>)}</tbody>
    </table>{!rows.length && <p className="empty" role="status">No se encontraron solicitudes con estos filtros.</p>}</div>;
}

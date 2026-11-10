export function StatusBadge({status}:{status:string}) {
  const variant = status === 'Admitida' ? 'approved' : status === 'En revisión' ? 'review' : status === 'Pendiente' ? 'pending' : '';
  return <span className={`badge ${variant}`}>{status}</span>;
}

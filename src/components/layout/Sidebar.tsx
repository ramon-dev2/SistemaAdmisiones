import { Link, NavLink, useLocation } from 'react-router-dom';
import Brand from './Brand';
import { items } from './navigation';
type SidebarProps = {
  open: boolean;
  onNavigate: () => void;
};
export default function Sidebar({ open, onNavigate }: SidebarProps) {
  const { pathname } = useLocation();
  return (<aside className={open ? 'sidebar open' : 'sidebar'}>
    <Brand />
    <small className="eyebrow">ESPACIO DE TRABAJO</small>
    <nav>
      {items.map(([to, label, icon]) => (<NavLink key={to} to={to} end={to !== '/admissions' || pathname === '/admissions/new'} onClick={onNavigate}>
        <span className="navIcon" aria-hidden>{icon}</span>{label}
      </NavLink>))}
    </nav>
    <div className="period">
      <b>ADMISIONES ABIERTAS</b>
      <strong>Enero – abril 2027</strong>
      <small>Próximo período de ingreso</small>
    </div>
    <Link className="logout" to="/login">⇥　Cerrar sesión</Link>
  </aside>);
}

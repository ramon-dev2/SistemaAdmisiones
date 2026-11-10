type TopbarProps = {
  menuOpen: boolean;
  onToggleMenu: () => void;
};
export default function Topbar({ menuOpen, onToggleMenu }: TopbarProps) {
  return (<header className="topbar">
    <button className="menuToggle" aria-label="Abrir o cerrar menú" aria-expanded={menuOpen} onClick={onToggleMenu}>☰</button>
    <span>GESTIÓN UNIVERSITARIA　/　ADMISIONES</span>
    <div className="profile">
      <div>
        <strong>Ana Morales</strong>
        <small>Personal de admisiones</small>
      </div>
    </div>
  </header>);
}

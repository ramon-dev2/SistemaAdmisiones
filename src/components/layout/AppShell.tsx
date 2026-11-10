import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Footer from './Footer';
export default function AppShell() {
  const [open, setOpen] = useState(false);
  return (<div className="shell">
    <Sidebar open={open} onNavigate={() => setOpen(false)} />
    <div className="workspace">
      <Topbar menuOpen={open} onToggleMenu={() => setOpen(!open)} />
      <main><Outlet /></main>
      <Footer />
    </div>
  </div>);
}

export type Admission = { id: string; name: string; career: string; status: 'En revisión' | 'Admitida' | 'Pendiente'; email: string };
export const careers = ['Ingeniería de Software', 'Psicología', 'Administración', 'Contabilidad'];
export const initialAdmissions: Admission[] = [
 {id:'ADM-2026-001',name:'Camila Rodríguez',career:careers[0],status:'En revisión',email:'camila@example.com'},
 {id:'ADM-2026-002',name:'Gabriel Martínez',career:careers[2],status:'Admitida',email:'gabriel@example.com'},
 {id:'ADM-2026-003',name:'Valentina Pérez',career:careers[1],status:'Pendiente',email:'valentina@example.com'},
 {id:'ADM-2026-004',name:'Diego Fernández',career:careers[0],status:'Admitida',email:'diego@example.com'},
 {id:'ADM-2026-005',name:'Sofía García',career:careers[1],status:'En revisión',email:'sofia@example.com'},
 {id:'ADM-2026-006',name:'Luis Hernández',career:careers[3],status:'Pendiente',email:'luis@example.com'}
];
export function readAdmissions(): Admission[] { try { const raw=localStorage.getItem('university.admissions'); return raw ? JSON.parse(raw) as Admission[] : initialAdmissions; } catch { return initialAdmissions; } }
export function saveAdmission(admission: Admission) { const rows=[...readAdmissions(),admission];localStorage.setItem('university.admissions',JSON.stringify(rows));return admission; }

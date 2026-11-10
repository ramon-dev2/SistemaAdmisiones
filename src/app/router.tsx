import { Navigate, Route, Routes } from 'react-router-dom';
import AppShell from '../components/layout/AppShell';
import LoginPage from '../features/auth/pages/LoginPage';
import DashboardPage from '../features/dashboard/pages/DashboardPage';
import ModulesPage from '../features/modules/pages/ModulesPage';
import NewAdmissionPage from '../features/admissions/pages/NewAdmissionPage';
import AdmissionsPage from '../features/admissions/pages/AdmissionsPage';
import AdmissionDetailPage from '../features/admissions/pages/AdmissionDetailPage';
import AcademicPage from '../features/academic/pages/AcademicPage';
import ReportsPage from '../features/reports/pages/ReportsPage';
export default function AppRoutes() {
  return (<Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route element={<AppShell />}>
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/modules" element={<ModulesPage />} />
      <Route path="/admissions/new" element={<NewAdmissionPage />} />
      <Route path="/admissions" element={<AdmissionsPage />} />
      <Route path="/admissions/:id" element={<AdmissionDetailPage />} />
      <Route path="/academic" element={<AcademicPage />} />
      <Route path="/reports" element={<ReportsPage />} />
    </Route>
    <Route path="/" element={<Navigate to="/login" replace />} />
    <Route path="*" element={<Navigate to="/dashboard" replace />} />
  </Routes>);
}

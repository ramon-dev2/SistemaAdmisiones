import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Brand from '../../../components/layout/Brand';
import { Button } from '../../../components/ui/Button';
export default function LoginPage() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  return <div className="login">
    <section className="institution">
      <Brand />
      <div>
        <small>TU PRÓXIMO CAPÍTULO COMIENZA AQUÍ</small>
        <h1>Conectamos talento<br />con oportunidades.</h1>
        <p>Un espacio para gestionar cada paso del proceso de admisión y acompañar el camino académico de nuestros estudiantes.</p>
        <small>31　Un solo lugar.　　 100%　Enfoque en las personas.</small>
      </div>
    </section>
    <section className="loginPanel">
      <div>
        <small className="eyebrow">PORTAL DE GESTIÓN UNIVERSITARIA</small>
        <h1>Te damos la bienvenida</h1>
        <p>Ingresa tus datos para acceder a tu espacio.</p>
        <form onSubmit={e => {
          e.preventDefault();
          navigate('/dashboard');
        }}>
          <label>Correo institucional<input type="email" required placeholder="nombre@universidad.edu" />
          </label>
          <label>Contraseña<div className="password">
            <input type={show ? 'text' : 'password'} required minLength={4} placeholder="••••••••" />
            <button type="button" onClick={() => setShow(!show)}>{show ? 'Ocultar' : 'Mostrar'}</button>
          </div>
          </label>
          <label className="check">
            <input type="checkbox" />Recordarme</label>
          <Button type="submit">Ingresar al portal →</Button>
        </form>
        <p className="notice">Acceso de demostración.<br />Correo válido y contraseña de 4 caracteres o más. Datos ficticios.</p>
        <small>University · Admisiones y consultas académicas<br />
        </small>
      </div>
    </section>
  </div>;
}

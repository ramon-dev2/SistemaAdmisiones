import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Title from '../../../components/ui/PageHeader';
import { Button } from '../../../components/ui/Button';
import { careers, readAdmissions, saveAdmission } from '../data';
import { schema, type FormValues } from '../schemas/admissionSchema';
export default function NewAdmissionPage() {
  const navigate = useNavigate();
  const client = useQueryClient();
  const [fileError, setFileError] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema)
  });
  const mutation = useMutation({
    mutationFn: async (v: FormValues) => saveAdmission({
      id: `ADM-2026-${String(readAdmissions().length + 1).padStart(3, '0')}`, name: `${v.name} ${v.surname}`, career: v.career, email: v.email, status: 'Pendiente'
    }), onSuccess: async (row) => {
      await client.invalidateQueries({
        queryKey: [
          'admissions'
        ]
      });
      navigate(`/admissions/${row.id}`);
    }
  });
  const field = (key: keyof FormValues, label: string, type = 'text') => <label>{label} *<input type={type} {...register(key)} aria-invalid={!!errors[key]} />{errors[key] && <span className="error">{errors[key]?.message}</span>}</label>;
  return <>
    <Title title="Nueva solicitud de admisión" description="Completa la información del aspirante para abrir su expediente." />
    <p className="steps">01 · Datos del aspirante　 →　 02 · Selección académica　 →　 03 · Documentos</p>
    <div className="detailGrid">
      <form className="card admissionForm" onSubmit={handleSubmit(v => {
        if(!fileError)
          mutation.mutate(v);
      })}>
        <h2>1　Datos personales</h2>
        <div className="formGrid">{field('name', 'Nombres')}{field('surname', 'Apellidos')}{field('document', 'Documento de identidad')}{field('birth', 'Fecha de nacimiento', 'date')}{field('email', 'Correo electrónico', 'email')}{field('phone', 'Teléfono', 'tel')}</div>
        <h2>2　Información académica</h2>
        <div className="formGrid">
          <label>Carrera de interés *<select {...register('career')}>
            <option value="">Selecciona una carrera</option>{careers.map(c => <option key={c}>{c}</option>)}</select>{errors.career && <span className="error">{errors.career.message}</span>}</label>
          <label>Período de ingreso<input value="Enero – abril 2027" readOnly />
          </label>{field('school', 'Centro educativo de procedencia')}<label>Tanda preferida *<select {...register('shift')}>
            <option value="">Selecciona una tanda</option>
            <option>Matutina</option>
            <option>Vespertina</option>
            <option>Nocturna</option>
          </select>{errors.shift && <span className="error">{errors.shift.message}</span>}</label>
        </div>
        <h2>3　Documentación inicial</h2>
        <label className="upload">Seleccionar documento de identidad<input type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={e => {
          const f = e.target.files?.[0];
          setFileError(f && (![
            'application/pdf', 'image/jpeg', 'image/png'
          ].includes(f.type) || f.size > 5 * 1024 * 1024) ? 'Selecciona PDF, JPG o PNG de hasta 5 MB.' : '');
        }} />
          <small>PDF, JPG o PNG · Máximo 5 MB. El archivo no se almacena en la demostración.</small>
        </label>{fileError && <p className="error" role="alert">{fileError}</p>}{mutation.isError && <p className="error" role="alert">No se pudo guardar. Comprueba el almacenamiento del navegador.</p>}<div className="actions">
          <Link className="button secondary" to="/admissions">Cancelar</Link>
          <Button disabled={mutation.isPending || !!fileError}>{mutation.isPending ? 'Registrando…' : 'Registrar solicitud →'}</Button>
        </div>
        <small>* Campos obligatorios. Registro de demostración.</small>
      </form>
      <aside className="card advice">
        <h2>Antes de registrar</h2>
        <p>Verifica que los datos coincidan con los documentos del aspirante.</p>
        <p>✓ Datos personales completos</p>
        <p>✓ Correo de contacto válido</p>
        <p>✓ Carrera y período definidos</p>
        <p className="notice">Estado inicial: Pendiente.<br />El expediente continuará cuando la documentación esté completa.</p>
      </aside>
    </div>
  </>;
}

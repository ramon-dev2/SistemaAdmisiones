import { z } from 'zod';
export const schema = z.object({
  name: z.string().min(2, 'Ingresa los nombres.'), surname: z.string().min(2, 'Ingresa los apellidos.'), document: z.string().min(5, 'Ingresa un documento válido.'), birth: z.string().min(1, 'Selecciona la fecha.'), email: z.email('Correo inválido.'), phone: z.string().min(7, 'Ingresa un teléfono válido.'), career: z.string().min(1, 'Selecciona una carrera.'), school: z.string().min(2, 'Ingresa el centro educativo.'), shift: z.string().min(1, 'Selecciona una tanda.')
});
export type FormValues = z.infer<typeof schema>;

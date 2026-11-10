export type ProblemDetails = { title?:string; detail?:string; code?:string; traceId?:string; errors?:Record<string,string[]> };
export class ApiError extends Error { constructor(public status:number, public problem:ProblemDetails){super(problem.detail || problem.title || 'No se pudo completar la solicitud.');} }
// La URL y los contratos deben configurarse cuando esté disponible el backend real.
export async function apiRequest<T>(path:string,init?:RequestInit):Promise<T>{
 const base=import.meta.env.VITE_API_BASE_URL;
 if(!base) throw new Error('La API no está configurada.');
 const response=await fetch(`${base}${path}`,{credentials:'include',...init});
 if(!response.ok){const problem=await response.json().catch(()=>({title:'Error de conexión'})) as ProblemDetails;throw new ApiError(response.status,problem);}
 return response.status===204?undefined as T:response.json() as Promise<T>;
}

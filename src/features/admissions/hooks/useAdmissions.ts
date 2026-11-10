import { useQuery } from '@tanstack/react-query';
import { readAdmissions } from '../data';
export function useAdmissions() {
  return useQuery({
    queryKey: [
      'admissions'
    ], queryFn: async () => readAdmissions()
  });
}

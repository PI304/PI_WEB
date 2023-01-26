import { useRouter } from 'next/router';

export const useRouteToPath = (path: string) => {
  const router = useRouter();
  return () => router.push(path);
};

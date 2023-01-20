import { useRouter } from 'next/router';

export default function useRouteToPath(path: string) {
  const router = useRouter();
  return () => router.push(path);
}

import { useRouter } from 'next/router';

export default function useCustomRouter(path: string) {
  const router = useRouter();
  const onRouteToPath = () => router.push(path);
  return { onRouteToPath };
}

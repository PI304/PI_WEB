import { Dispatch, SetStateAction } from 'react';

export default async function useGet<T>(
  api: () => Promise<T>,
  dispatch: Dispatch<SetStateAction<T | undefined>>,
) {
  const res = await api();
  dispatch(res);
}

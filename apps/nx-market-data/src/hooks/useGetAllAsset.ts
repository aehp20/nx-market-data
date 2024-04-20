import { useQuery } from 'react-query';

export function useGetAllAsset() {
  const { isLoading, error, data } = useQuery('get-all-asset', () =>
    fetch(
      'https://www.binance.com/bapi/asset/v2/public/asset/asset/get-all-asset'
    ).then((res) => res.json())
  );
  return {
    isLoading,
    error,
    data,
  };
}

import { useQuery } from 'react-query';

export function useExchangeInfo() {
  const { isLoading, error, data } = useQuery('exchangeInfo', () =>
    fetch('https://api.binance.com/api/v3/exchangeInfo').then((res) =>
      res.json()
    )
  );
  return {
    isLoading,
    error,
    data,
  };
}

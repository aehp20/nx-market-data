import { useQuery } from 'react-query';

export function useTicker24h(ticker: string) {
  const { isLoading, error, data } = useQuery(['ticker24h', ticker], () =>
    fetch(`https://api.binance.com/api/v3/ticker/24hr?symbol=${ticker}`).then(
      (res) => res.json()
    )
  );
  return {
    isLoading,
    error,
    data,
  };
}

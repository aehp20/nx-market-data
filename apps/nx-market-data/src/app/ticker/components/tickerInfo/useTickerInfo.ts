import { useQuery } from 'react-query';

export function useTickerInfo(ticker: string) {
  const { isLoading, error, data } = useQuery(['ticker', ticker], () =>
    fetch(`https://api.binance.com/api/v3/ticker?symbol=${ticker}`).then(
      (res) => res.json()
    )
  );
  return {
    isLoading,
    error,
    data,
  };
}

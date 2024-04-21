import { useQuery } from 'react-query';

export function useTickerRecentTrades(ticker: string) {
  const { isLoading, error, data } = useQuery(['recentTrades', ticker], () =>
    fetch(`https://api.binance.com/api/v3/trades?symbol=${ticker}`).then(
      (res) => res.json()
    )
  );
  return {
    isLoading,
    error,
    data,
  };
}

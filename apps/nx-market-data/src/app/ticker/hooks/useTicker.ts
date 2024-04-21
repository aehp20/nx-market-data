import { useMemo } from 'react';

import { useExchangeInfo } from '../../../hooks/useExchangeInfo';

type ExchangeInfo = {
  baseAsset: string;
  symbol: string;
};

export function useTicker() {
  const {
    isLoading: isLoadingExchangeInfo,
    error: errorExchangeInfo,
    data: dataExchangeInfo = {},
  } = useExchangeInfo();

  const currencyPairs: string[] = useMemo(() => [], []);
  dataExchangeInfo.symbols?.forEach((item: ExchangeInfo) => {
    currencyPairs.push(item.symbol);
  });

  const sortedDataByAssetName = useMemo(
    () => currencyPairs.sort(),
    [currencyPairs]
  );

  return {
    isLoading: isLoadingExchangeInfo,
    error: errorExchangeInfo,
    data: sortedDataByAssetName,
  };
}

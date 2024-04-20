import { sortAssetDataFunction } from '../../../utils/sortAssetData';
import { useExchangeInfo } from '../../../hooks/useExchangeInfo';
import { useGetAllAsset } from '../../../hooks/useGetAllAsset';
import { AssetData } from '../types';

type ExchangeInfo = {
  baseAsset: string;
  symbol: string;
};

type AssetInfo = {
  assetCode: string;
  assetName: string;
};

export function useTicker() {
  const {
    isLoading: isLoadingExchangeInfo,
    error: errorExchangeInfo,
    data: dataExchangeInfo = {},
  } = useExchangeInfo();

  const {
    isLoading: isLoadingGetAllAsset,
    error: errorGetAllAsset,
    data: dataGetAllAsset = {},
  } = useGetAllAsset();

  const symbols: { [key: string]: string } = {};
  dataExchangeInfo.symbols?.forEach((item: ExchangeInfo) => {
    symbols[item.baseAsset] = item.symbol;
  });

  const assets: { [key: string]: string } = {};
  dataGetAllAsset.data?.forEach((item: AssetInfo) => {
    assets[item.assetCode] = item.assetName;
  });

  const data: AssetData[] = [];
  Object.entries(assets).forEach(([assetCode, assetName]) => {
    if (symbols[assetCode]) {
      data.push({
        symbol: symbols[assetCode],
        assetName,
        assetCode,
      });
    }
  });

  const sortedDataByAssetName = data.sort((a, b) =>
    sortAssetDataFunction(a, b, 'assetCode')
  );

  return {
    isLoading: isLoadingExchangeInfo || isLoadingGetAllAsset,
    error: errorExchangeInfo || errorGetAllAsset,
    data: sortedDataByAssetName,
  };
}

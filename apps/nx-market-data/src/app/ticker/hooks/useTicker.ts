import { SYMBOLS } from '../constants';

export type CurrencyPairOption = {
  value: string;
  label: string;
};

export function useTicker() {
  const currencyPairs = SYMBOLS.sort();

  const currencyPairOptions: CurrencyPairOption[] = currencyPairs.map(
    (item) => ({
      value: item,
      label: item,
    })
  );

  return {
    currencyPairOptions,
  };
}

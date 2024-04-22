import { useCallback, useState } from 'react';

import { SYMBOLS } from './constants';

export type CurrencyPairOption = {
  value: string;
  label: string;
};

export function useTicker() {
  const [option, setOption] = useState<CurrencyPairOption | null>();
  const [ticker, setTicker] = useState<string>();
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const handleChange = useCallback(
    (value: CurrencyPairOption) => {
      setOption(value);
    },
    [setOption]
  );

  const handleSubmit = useCallback(() => {
    option && setTicker(option.value);
  }, [option, setTicker]);

  const handleReset = useCallback(() => {
    setOption(null);
    setTicker(undefined);
  }, [setOption, setTicker]);

  const onTabSelected = (index: number) => {
    setSelectedTab(index);
  };

  const currencyPairs = SYMBOLS.sort();

  const currencyPairOptions: CurrencyPairOption[] = currencyPairs.map(
    (item) => ({
      value: item,
      label: item,
    })
  );

  return {
    option,
    ticker,
    currencyPairOptions,
    selectedTab,
    handleChange,
    handleSubmit,
    handleReset,
    onTabSelected,
  };
}

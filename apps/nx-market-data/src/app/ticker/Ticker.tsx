import { Page } from '../../design-system';
import { useI18NContext } from '../../i18n';
import { useTicker } from './useTicker';
import TickerForm from './components/TickerForm';
import TickerTabs from './components/TickerTabs';

export default function Ticker() {
  const { _ } = useI18NContext();

  const {
    option,
    ticker,
    currencyPairOptions,
    selectedTab,
    handleChange,
    handleSubmit,
    handleReset,
    onTabSelected,
  } = useTicker();

  return (
    <Page title={_('Ticker')}>
      <TickerForm
        option={option}
        currencyPairOptions={currencyPairOptions}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleReset={handleReset}
      />
      <TickerTabs
        ticker={ticker}
        selectedTab={selectedTab}
        onTabSelected={onTabSelected}
      />
    </Page>
  );
}

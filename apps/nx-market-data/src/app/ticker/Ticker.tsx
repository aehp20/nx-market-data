import { useState } from 'react';

import {
  Label,
  Page,
  Spinner,
  SpinnerContainer,
  Tab,
  Error,
  Dropdown,
} from '../../design-system';
import { useTicker } from './hooks/useTicker';
import TickerInfo from './components/TickerInfo';
import Ticker24h from './components/Ticker24h';
import TickerRecentTrades from './components/TickerRecentTrades';
import styled from 'styled-components';

export default function Ticker() {
  const { isLoading, error, data } = useTicker();

  const [ticker, setTicker] = useState<string>();
  const [selectedTab, setSelectedTab] = useState<number>(0);

  if (isLoading)
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    );

  if (error) return <Error error={error} />;

  const options = data.map((item) => ({
    value: item,
    label: item,
  }));

  const onTabSelected = (index: number) => {
    setSelectedTab(index);
  };

  return (
    <Page title="Ticker">
      <div style={{ width: '25%' }}>
        <Label>Currency pair</Label>
        <Dropdown
          value={ticker ? { label: ticker, value: ticker } : undefined}
          options={options}
          onChange={(event?: { value: string }) => setTicker(event?.value)}
          placeholder="Select a currency pair"
        />
      </div>
      {ticker && (
        <>
          <br />
          <Tab
            items={['Ticker info', '24h ticker', 'Recent trades']}
            onTabSelected={onTabSelected}
          />
          <ContainerTabs>
            {selectedTab === 0 && <TickerInfo ticker={ticker} />}
            {selectedTab === 1 && <Ticker24h ticker={ticker} />}
            {selectedTab === 2 && <TickerRecentTrades ticker={ticker} />}
          </ContainerTabs>
        </>
      )}
    </Page>
  );
}

const ContainerTabs = styled.div`
  background-color: #ff9a3c;
  padding: 8px;
`;

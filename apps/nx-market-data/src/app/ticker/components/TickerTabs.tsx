import styled from 'styled-components';

import { Tab } from '../../../design-system';
import { useI18NContext } from '../../../i18n';
import TickerInfo from '../components/TickerInfo';
import Ticker24h from '../components/Ticker24h';
import TickerRecentTrades from '../components/TickerRecentTrades';

type TickerTabsProps = {
  ticker?: string;
  selectedTab: number;
  onTabSelected: (index: number) => void;
};

export default function TickerTabs(props: TickerTabsProps) {
  const { ticker, selectedTab, onTabSelected } = props;

  const { _ } = useI18NContext();

  return ticker ? (
    <>
      <br />
      <Tab
        items={[_('Ticker info'), _('24h ticker'), _('Recent trades')]}
        onTabSelected={onTabSelected}
      />
      <ContainerTabs>
        {selectedTab === 0 && <TickerInfo ticker={ticker} />}
        {selectedTab === 1 && <Ticker24h ticker={ticker} />}
        {selectedTab === 2 && <TickerRecentTrades ticker={ticker} />}
      </ContainerTabs>
    </>
  ) : null;
}

const ContainerTabs = styled.div`
  background-color: #ff9a3c;
  padding: 8px;
`;

import styled from 'styled-components';

import { Label, Page, Tab, Dropdown, Button } from '../../design-system';
import { useI18NContext } from '../../i18n';
import { useTicker } from './useTicker';
import TickerInfo from './components/TickerInfo';
import Ticker24h from './components/Ticker24h';
import TickerRecentTrades from './components/TickerRecentTrades';

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
      <form>
        <FormContent>
          <FormColumn>
            <Label>{_('Currency pair')}</Label>
            <Dropdown
              value={option}
              options={currencyPairOptions}
              onChange={handleChange}
              placeholder={_('Select a currency pair')}
            />
          </FormColumn>
          <FormColumn
            style={{
              justifyItems: 'space-between',
            }}
          >
            <ButtonsContainer>
              <Button type="button" disabled={!option} onClick={handleSubmit}>
                {_('Submit')}
              </Button>
              <Button type="button" disabled={!option} onClick={handleReset}>
                {_('Reset')}
              </Button>
            </ButtonsContainer>
          </FormColumn>
        </FormContent>
      </form>
      {ticker && (
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
      )}
    </Page>
  );
}

const ContainerTabs = styled.div`
  background-color: #ff9a3c;
  padding: 8px;
`;

const FormContent = styled.div`
  display: flex;
  gap: 4px;
`;

const FormColumn = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-items: space-between;
  margin-top: auto;
  gap: 2px;
`;

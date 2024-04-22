import styled from 'styled-components';

import { Label, Dropdown, Button } from '../../../design-system';
import { useI18NContext } from '../../../i18n';
import { CurrencyPairOption } from '../useTicker';

type TickerFormProps = {
  option?: CurrencyPairOption | null;
  currencyPairOptions: CurrencyPairOption[];
  handleChange: (value: CurrencyPairOption) => void;
  handleSubmit: () => void;
  handleReset: () => void;
};

export default function TickerForm(props: TickerFormProps) {
  const {
    option,
    currencyPairOptions,
    handleChange,
    handleSubmit,
    handleReset,
  } = props;

  const { _ } = useI18NContext();

  return (
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
  );
}

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

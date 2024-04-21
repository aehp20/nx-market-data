import { useTickerRecentTrades } from './useTickerRecentTrades';
import { Spinner, SpinnerContainer } from '../../../../design-system';
import TickerRecentTradesUI from './TickerRecentTradesUI';
import { Error } from '../../../../design-system/message';

type TickerRecentTradesProps = {
  ticker: string;
};

export default function TickerRecentTrades(props: TickerRecentTradesProps) {
  const { ticker } = props;

  const { data, isLoading, error } = useTickerRecentTrades(ticker);

  if (isLoading)
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    );

  if (error) return <Error error={error}></Error>;

  return <TickerRecentTradesUI data={data} />;
}

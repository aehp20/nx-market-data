import { useTickerInfo } from './useTickerInfo';
import TickerInfoUI from './TickerInfoUI';
import { Spinner, SpinnerContainer, Error } from '../../../../design-system';

type TickerInfoProps = {
  ticker: string;
};

export default function TickerInfo(props: TickerInfoProps) {
  const { ticker } = props;

  const { data, isLoading, error } = useTickerInfo(ticker);

  if (isLoading)
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    );

  if (error) return <Error error={error}></Error>;

  return <TickerInfoUI data={data} />;
}

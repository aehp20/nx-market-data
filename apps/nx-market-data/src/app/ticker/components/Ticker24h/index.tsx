import { useTicker24h } from './useTicker24h';
import Ticker24hUI from './Ticker24hUI';
import { Spinner, SpinnerContainer, Error } from '../../../../design-system';

type Ticker24hProps = {
  ticker: string;
};

export default function Ticker24h(props: Ticker24hProps) {
  const { ticker } = props;

  const { data, isLoading, error } = useTicker24h(ticker);

  if (isLoading)
    return (
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    );

  if (error) return <Error error={error}></Error>;

  return <Ticker24hUI data={data} />;
}

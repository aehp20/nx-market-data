import { Page } from '../design-system';
import Ticker from './ticker/Ticker';

export function App() {
  return (
    <Page title="Market Data using Binance public REST API">
      <Ticker />
    </Page>
  );
}

export default App;

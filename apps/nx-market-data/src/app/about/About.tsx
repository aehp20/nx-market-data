import { Page } from '../../design-system';

export default function About() {
  return (
    <Page title="Flowdesk Online Assessment">
      <div>
        Retrieve and display market data for a selected pair from Binance public
        API.
      </div>
      <br />
      <div>SPECIFICATIONS</div>
      <div>
        Your mission, if you accept it is to:
        <p>
          <ul>
            <li>
              Users should be able to use a form to select the currency pair to
              query.
            </li>
            <li>
              Upon submitting the form, fetch public market data (ticker, 24h
              ticker, recent trades) for the selected pair from Binance public
              REST api.
            </li>
            <li>
              Users should be able to sort the trades data by time, price &
              quantity.
            </li>
          </ul>
        </p>
      </div>
      <br />
      <div>Full documentation & endpoint list are available at</div>
      <div>https://binance-docs.github.io/apidocs/spot/en/#change-log</div>
      <br />
      <div>
        Requirements
        <p>
          <ul>
            <li>Use React with Typescript.</li>
            <li>
              You can use any styling solution (at Flowdesk we use styled
              components)
            </li>
            <li>You will have to publish your source code in a VCS</li>
          </ul>
        </p>
      </div>
      <br />
      <div>Good luck!</div>
    </Page>
  );
}

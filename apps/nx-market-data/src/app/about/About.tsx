import { Page } from '../../design-system';
import { useI18NContext } from '../../i18n';

export default function About() {
  const { _ } = useI18NContext();

  return (
    <Page title={_('Flowdesk Online Assessment')}>
      <div>
        {_(
          'Retrieve and display market data for a selected pair from Binance public API.'
        )}
      </div>
      <br />
      <div>{_('Specifications')}</div>
      <div>
        <ul>
          <li>
            {_(
              'Users should be able to use a form to select the currency pair to query.'
            )}
          </li>
          <li>
            {_(
              'Upon submitting the form, fetch public market data (ticker, 24h ticker, recent trades) for the selected pair from Binance public REST api.'
            )}
          </li>
          <li>
            {_(
              'Users should be able to sort the trades data by time, price & quantity.'
            )}
          </li>
        </ul>
      </div>
      <br />
      <div>{_('Full documentation & endpoint list are available at')}</div>
      <div>
        <ul>
          <li>https://binance-docs.github.io/apidocs/spot/en/#change-log</li>
        </ul>
      </div>
      <br />
      <div>
        {_('Requirements')}
        <ul>
          <li>{_('Use React with Typescript')}.</li>
          <li>
            {_(
              'You can use any styling solution (at Flowdesk we use styled components)'
            )}
          </li>
          <li>{_('You will have to publish your source code in a VCS')}</li>
        </ul>
      </div>
      <br />
      <div>{_('Good luck!')}</div>
    </Page>
  );
}

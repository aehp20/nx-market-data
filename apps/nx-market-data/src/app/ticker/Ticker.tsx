import { useEffect } from 'react';
import { Page, Spinner } from '../../design-system';
import { useQuery } from 'react-query';
import { useExchangeInfo } from '../../hooks/useExchangeInfo';
import { useTicker } from './hooks/useTicker';

export default function Ticker() {
  // const fetchExchangeInfo = async () => {
  //   const response = await fetch('https://api.binance.com/api/v3/exchangeInfo');
  //   const responseJson = await response.json();
  //   const symbols = responseJson.symbols.map(
  //     (item: { baseAsset: string; symbol: string }) => ({
  //       baseAsset: item.baseAsset,
  //       symbol: item.symbol,
  //     })
  //   );

  //   console.log('symbols: ', symbols);
  // };

  // const fetchAllAsset = async () => {
  //   const response = await fetch(
  //     'https://www.binance.com/bapi/asset/v2/public/asset/asset/get-all-asset'
  //   );
  //   const responseJson = await response.json();
  //   // const symbols = responseJson.symbols.map(
  //   //   (item: { baseAsset: string; symbol: string }) => ({
  //   //     baseAsset: item.baseAsset,
  //   //     symbol: item.symbol,
  //   //   })
  //   // );

  //   console.log('responseJson: ', responseJson);
  // };

  // useEffect(() => {
  //   fetchExchangeInfo();
  //   fetchAllAsset();
  // }, []);

  // return (
  //   <Page title="Market Data using Binance public REST API">
  //     Hola abuelita Fanny
  //   </Page>
  // );
  const { isLoading, error, data } = useTicker();

  if (isLoading) return <Spinner />;

  if (error) return <p>An error has occurred: {error.message}</p>;

  // data
  console.log('data: ', data);

  return (
    <ul>
      {/* {data.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))} */}
    </ul>
  );
}

import {apiExchangeUrl} from '../data/api-exchange-url';
import errorMessages from './error-messages';

async function getCurrencyData() {
  const response = await fetch(apiExchangeUrl);
  const contentType = response.headers.get('content-type');

  if (!contentType || !contentType.includes('application/json')) {
    return {error: errorMessages.data};
  }

  if (response.status !== 200) {
    return {error: errorMessages.data};
  }

  return await response.json();

}

export default getCurrencyData;
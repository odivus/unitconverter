import errorMessages from './error-messages';

async function getCurrencyData(url) {
  try {
    const response = await fetch(url);
    const contentType = response.headers.get('content-type');

    if (!contentType || !contentType.includes('application/json')) {
      console.log('Cant get JSON in server response');
      return {error: errorMessages.data};
    }

    return await response.json();

  } catch (error) {
    console.log(error.message);
    return {error: errorMessages.connection};
  }
}

export default getCurrencyData;
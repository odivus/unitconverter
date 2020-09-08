import errorMessages from './error-messages';

async function getCurrencyData(url) {
  try {
    const response = await fetch(url);
    const contentType = response.headers.get('content-type');

    if (!contentType || !contentType.includes('application/json')) {
      return {error: errorMessages.data};
    }

    return await response.json();

  } catch (error) {
    return {error: errorMessages.connection};
  }
}

export default getCurrencyData;
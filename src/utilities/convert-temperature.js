function convertTemperature(result, value, outUnit) {
  switch (outUnit) {
    case 1.8:
      result = result + 32
      break;
    case 1:
      result = (value - 32) * 5 / 9
      break;
    default:
      break;
  }

  return parseFloat( result.toPrecision(4) );
}

export default convertTemperature;
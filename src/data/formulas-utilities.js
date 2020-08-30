export const getValueLength = value => value.toString().length;

export const removeZeroAtEnd = (value) => {
  const str = value.toString();
  return parseFloat(str);
}

export const beautifyToSevenDigits = (result, value) => {
  let beautifyResult;

  beautifyResult = getValueLength(value) < 7
    ? result.toPrecision(7)
    : result.toPrecision(getValueLength(value));

  return removeZeroAtEnd(beautifyResult);
}
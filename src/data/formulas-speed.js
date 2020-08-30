import {
  getValueLength,
  removeZeroAtEnd,
  beautifyToSevenDigits,
} from './formulas-utilities';

const beautifyMpsCmpsMiph = (result, value) => {
  let beautifyResult;

  beautifyResult = getValueLength(value) >= 2
    ? result.toPrecision(getValueLength(value) + 1)
    : result;

  return removeZeroAtEnd(beautifyResult);
}

const beautifyKnotMpsCmps = (result, value) => {
  let beautifyResult;

  beautifyResult = getValueLength(value) < 6
    ? result.toPrecision(getValueLength(value) + 3)
    : result.toPrecision(getValueLength(value));

  return removeZeroAtEnd(beautifyResult);
}

const formulasSpeed = {
  'miph-kmph': (value) => {
    const result = value * 1.6092;
    return beautifyToSevenDigits(result, value);
  },

  'miph-mps': (value) => {
    let beautifyResult;
    const result = value / 2.237136;

    beautifyResult = getValueLength(value) <= 2
      ? result.toPrecision(3)
      : result.toPrecision(getValueLength(value));

    return removeZeroAtEnd(beautifyResult);
  },

  'miph-cmps': (value) => {
    let beautifyResult;
    const result = value / 0.022371;

    beautifyResult = getValueLength(value) >= 2
      ? result.toPrecision(getValueLength(value) + 2)
      : Math.round(result);

    return removeZeroAtEnd(beautifyResult);
  },

  'miph-ftps': (value) => {
    const result = value * 1.466535;
    return beautifyToSevenDigits(result, value);
  },

  'miph-knot': (value) => {
    const result = value / 1.150783;
    return beautifyToSevenDigits(result, value);
  },

  'ftps-miph': (value) => {
    const result = value / 1.466535;
    return beautifyToSevenDigits(result, value);
  },

  'ftps-knot': (value) => {
    const result = value / 1.687664;
    return beautifyToSevenDigits(result, value);
  },

  'ftps-kmph': (value) => {
    let beautifyResult;
    const result = value * 1.09728;

    beautifyResult = getValueLength(value) >= 3
      ? result.toPrecision(getValueLength(value))
      : result;

    return removeZeroAtEnd(beautifyResult);
  },

  'ftps-mps': (value) => {
    const result = value / 3.28084;
    return beautifyToSevenDigits(result, value);
  },

  'ftps-cmps': (value) => {
    let beautifyResult;
    const result = value / 0.032808;

    beautifyResult = result.toPrecision(getValueLength(value) + 3);

    return removeZeroAtEnd(beautifyResult);
  },
  
  'knot-miph': (value) => {
    const result = value * 1.150783;
    return beautifyToSevenDigits(result, value);
  },

  'knot-ftps': (value) => {
    const result = value * 1.687664;
    return beautifyToSevenDigits(result, value);
  },

  'knot-kmph': (value) => {
    let beautifyResult;
    const result = value * 1.85184;

    beautifyResult = result.toPrecision(getValueLength(value) + 2);

    return removeZeroAtEnd(beautifyResult);
  },

  'knot-mps': (value) => {
    const result = value / 1.944;
    return beautifyKnotMpsCmps(result, value);
  },

  'knot-cmps': (value) => {
    const result = value / 0.01944;
    return beautifyKnotMpsCmps(result, value);
  },

  'kmph-miph': (value) => {
    const result = value / 1.6092;
    return beautifyToSevenDigits(result, value);
  },

  'kmph-ftps': (value) => {
    const result = value / 1.09728
    return beautifyToSevenDigits(result, value);
  },
  
  'kmph-knot': (value) => {
    const result = value / 1.85184;
    return beautifyToSevenDigits(result, value);
  },

  'kmph-mps': (value) => {
    const result = value / 3.6;
    return beautifyToSevenDigits(result, value);
  },

  'kmph-cmps': (value) => {
    const result = value / 0.036;
    return beautifyToSevenDigits(result, value);
  },

  'mps-miph': (value) => {
    const result = value * 2.237136;
    return beautifyMpsCmpsMiph(result, value);
  },

  'mps-ftps': (value) => {
    let beautifyResult;
    const result = value * 3.28084;

    beautifyResult = getValueLength(value) >= 3
      ? result.toPrecision(getValueLength(value))
      : result;

    return removeZeroAtEnd(beautifyResult);
  },

  'mps-knot': (value) => {
    const result = value * 1.944012;
    return beautifyToSevenDigits(result, value);
  },

  'mps-kmph': (value) => {
    const result = value * 3.6;
    const beautifyResult = result.toPrecision(getValueLength(value) + 1);

    return removeZeroAtEnd(beautifyResult);
  },

  'mps-cmps': value => value / 0.01,

  'cmps-miph': (value) => {
    const result = value * 0.02237136;
    return beautifyMpsCmpsMiph(result, value);
  },

  'cmps-ftps': (value) => {
    const result = value * 0.0328084;
    return beautifyToSevenDigits(result, value);
  },

  'cmps-knot': (value) => {
    let beautifyResult;
    const result = value * 0.01944012;

    beautifyResult = getValueLength(value) <= 3
      ? removeZeroAtEnd(result.toPrecision(4))
      : beautifyToSevenDigits(result, value);

    return beautifyResult;
  },

  'cmps-kmph': (value) => {
    const result = value * 0.036;
    const beautifyResult = result.toPrecision(getValueLength(value) + 1);

    return removeZeroAtEnd(beautifyResult);
  },

  'cmps-mps': (value) => {
    const result = value * 0.01;
    const beautifyResult = result.toPrecision(getValueLength(value) + 1);

    return removeZeroAtEnd(beautifyResult);
  },
}

export default formulasSpeed;
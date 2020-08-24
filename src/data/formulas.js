const getValueLength = value => value.toString().length;

const formulas = {
  'miph-kmph': (value) => {
    const result = value * 1.6092;
    return getValueLength(value) < 7
      ? result.toPrecision(7)
      : result.toPrecision(getValueLength(value));
  },

  'miph-mps': value => {
    const result = value / 2.237136
    return getValueLength(value) <= 2
      ? result.toPrecision(3)
      : result.toPrecision(getValueLength(value));
  },

  'miph-cmps': value => value / 0.022371,
  'miph-ftps': value => value * 1.466535,
  'miph-knot': value => value / 1.150783,
  'ftps-miph': value => value / 1.466535,
  'ftps-knot': value => value / 1.687664,
  'ftps-kmph': value => value * 1.09728,
  'ftps-mps': value => value / 3.28084,
  'ftps-cmps': value => value / 0.032808,
  'knot-miph': value => value * 1.150783,
  'knot-ftps': value => value * 1.687664,
  'knot-kmph': value => value * 1.85184,
  'knot-mps': value => value / 0.5144,
  'knot-cmps': value => value / 0.01944,
  'kmph-miph': (value) => {
    const result = value / 1.6092;
    return getValueLength(value) < 7 
      ? result.toPrecision(7) 
      : result.toPrecision(getValueLength(value));
  },
  'kmph-ftps': value => value / 1.09728,
  'kmph-knot': value => value / 1.85184,
  'kmph-mps': value => value / 3.6,
  'kmph-cmps': value => value / 0.036,
  'mps-miph': value => value * 2.237136,
  'mps-ftps': value => value * 3.28084,
  'mps-knot': value => value * 1.944012,
  'mps-kmph': value => value * 3.6,
  'mps-cmps': value => value / 0.01,
  'cmps-miph': value => value * 0.02237136,
  'cmps-ftps': value => value * 0.0328084,
  'cmps-knot': value => value * 0.01944012,
  'cmps-kmph': value => value * 0.036,
  'cmps-mps': value => value * 0.01,
}

export default formulas;
import doConvert from '../utilties/do-convert';

describe('Testing units converter', () => {
  it('miph-kmph no value', () => {
    expect(doConvert('miph', 'kmph')).toEqual('');
  });

  it('miph-kmph value falsy', () => {
    expect(doConvert('', 'miph', 'kmph')).toEqual('');
  });

  it('miph-kmph value is not a string', () => {
    expect(doConvert(5, 'miph', 'kmph')).toEqual('');
  });
  it('miph-kmph', () => {
    expect(doConvert('5', 'miph', 'kmph')).toEqual(8.046);
  });

  it('miph-kmph', () => {
    expect(doConvert('9.3', 'miph', 'kmph')).toEqual(14.96556);
  });
  
})
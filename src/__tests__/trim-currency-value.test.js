import {trimCurrencyValue} from '../components/tools/tools';

describe('Testing trimCurrencyValue function', () => {
  it('Return only two numbers after comma', () => {
    expect(trimCurrencyValue('1,253')).toEqual('1,25');
  });

  it('Return only two numbers after comma', () => {
    expect(trimCurrencyValue('1,2534567')).toEqual('1,25');
  });

  it('Return current value', () => {
    expect(trimCurrencyValue('1,2')).toEqual('1,2');
  });
})

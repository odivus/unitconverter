import checkInput from '../../src/utilties/checkInput';

describe('checkInput function test', () => {
  it('not only numbers in argument, should return false', () => {
    expect(checkInput('1-23')).toEqual(false);
  });

  it('numbers in argument, should return true', () => {
    expect(checkInput('123')).toEqual(true);
  });

  it('comma in argument, should return true', () => {
    expect(checkInput('1,23')).toEqual(true);
  });

  it('comma and dot in argument, should return false', () => {
    expect(checkInput('123,.5')).toEqual(false);
  });

  it('char in argument, should return false', () => {
    expect(checkInput('1,2a3')).toEqual(false);
  });
})
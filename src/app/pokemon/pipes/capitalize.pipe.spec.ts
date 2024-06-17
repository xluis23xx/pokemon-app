import { CapitalizePipe } from './capitalize.pipe';

describe('CapitalizePipe', () => {
  it('should transform text', () => {
    const mock = 'charmander';
    const mockExpected = 'Charmander';
    const pipe = new CapitalizePipe();

    const result = pipe.transform(mock);

    expect(result).toEqual(mockExpected);
  });

  it('should not transform text', () => {
    const mock = '';
    const mockExpected = '';
    const pipe = new CapitalizePipe();

    const result = pipe.transform(mock);

    expect(result).toEqual(mockExpected);
  });
});

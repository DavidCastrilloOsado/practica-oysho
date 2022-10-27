import { FormatedPricePipe } from './formated-price.pipe';

describe('FormatedPricePipe', () => {
  let pipe: FormatedPricePipe;
  beforeEach(() => {
    pipe = new FormatedPricePipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('transform numbet to price with decimals', () => {
    const price = 1234;
    const newPrice = pipe.transform(price);
    expect(newPrice).toBe('12,34');
  });
});

import { RemoveSpacesPipe } from './remove-spaces.pipe';

describe('RemoveSpacesPipe', () => {
  let pipe: RemoveSpacesPipe;
  beforeEach(() => {
    pipe = new RemoveSpacesPipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('transform text to louercase correctly', () => {
    const text = 'HELLO';
    const newText = pipe.transform(text)
    expect(newText).toBe('hello');
  });
});

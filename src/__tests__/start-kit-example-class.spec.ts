import On2StarterKit from '../starter-kit-example-class';
const start = new On2StarterKit();

describe('On2StarterKit', () => {
  it('constructor', () => {
    expect(true).toBe(true);
  });
  it('hello', () => {
    expect(start.hello()).toBe(true);
  });
  it('bla', () => {
    expect(start.bla(true)).toBe(true);
    expect(start.bla()).toBe(false);
  });
});

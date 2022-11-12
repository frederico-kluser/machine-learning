import General from './general.js';

describe('General', () => {
  it('should be defined', () => {
    expect(General).toBeDefined();
  });

  it('should be able to create a new instance', () => {
    const general = new General();
    expect(general).toBeDefined();
  });

  it('should return an id', () => {
    const general = new General();
    expect(general.id).toBeDefined();
  });

  it('should return a different id each time', () => {
    const general1 = new General();
    const general2 = new General();
    expect(general1.id).not.toEqual(general2.id);
  });

  it('should return a 36 characters id', () => {
    const general = new General();
    expect(general.id.length).toEqual(36);
  });
});

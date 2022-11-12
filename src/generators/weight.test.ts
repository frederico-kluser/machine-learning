import makeWeights from './weight.js';

describe('makeWeights', () => {
  it('should be defined', () => {
    expect(makeWeights).toBeDefined();
  });

  it('should be a function', () => {
    expect(makeWeights).toBeInstanceOf(Function);
  });

  it('should return an array', () => {
    const weights = makeWeights(3);
    expect(weights).toBeInstanceOf(Array);
  });

  it('should return an array with 3 elements', () => {
    const weights = makeWeights(3);
    expect(weights.length).toEqual(3);
  });

  it('should return an array with random numbers', () => {
    const weights = makeWeights(3);
    expect(weights).toEqual(expect.arrayContaining([expect.any(Number)]));
  });
});

import Neuron from './neuron.js';

describe('Neuron', () => {
  it('should be defined', () => {
    expect(Neuron).toBeDefined();
  });

  it('should be able to create a new instance', () => {
    const neuron = new Neuron();
    expect(neuron).toBeDefined();
  });

  it('should return a weight', () => {
    const neuron = new Neuron();
    expect(neuron.weight).toBeDefined();
  });

  it('should return a weight with 3 elements', () => {
    const neuron = new Neuron(3);
    expect(neuron.weight.length).toEqual(3);
  });

  it('should return a weight with 3 elements between 0 and 1', () => {
    const neuron = new Neuron(3);
    neuron.weight.forEach((weight) => {
      expect(weight).toBeGreaterThanOrEqual(-1);
      expect(weight).toBeLessThanOrEqual(1);
    });
  });

  it('should return a bias', () => {
    const neuron = new Neuron();
    expect(neuron.bias).toBeDefined();
  });

  it('should return a bias 0', () => {
    const neuron = new Neuron();
    expect(neuron.bias).toEqual(0);
  });

  it('should return a getOutput', () => {
    const neuron = new Neuron();
    expect(neuron.getOutput).toBeDefined();
  });

  it('should getOutput return an specific value', () => {
    const neuron = new Neuron(2);
    neuron.weight = [0.5, 0.5];
    const inputs = [1, 1];

    expect(neuron.getOutput(inputs)).toEqual(1);
  });

  it('should getOutput return an error if inputs length is different than weight length', () => {
    const neuron = new Neuron(2);
    neuron.weight = [0.5, 0.5];
    const inputs = [1, 1, 1];

    expect(() => neuron.getOutput(inputs)).toThrow();
  });
});

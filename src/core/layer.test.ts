import Layer from './layer.js';

describe('Layer', () => {
  it('should be defined', () => {
    expect(Layer).toBeDefined();
  });

  it('should be able to create a new instance', () => {
    const layer = new Layer();
    expect(layer).toBeDefined();
  });

  it('should return a neurons', () => {
    const layer = new Layer();
    expect(layer.neurons).toBeDefined();
  });

  it('should return a neurons with 3 elements', () => {
    const layer = new Layer(1, 3);
    expect(layer.neurons.length).toEqual(3);
  });

  it('should return a neurons with 3 elements with 2 weights', () => {
    const layer = new Layer(2, 3);
    layer.neurons.forEach((neuron) => {
      expect(neuron.weight.length).toEqual(2);
    });
  });

  it('should return a getOutput', () => {
    const layer = new Layer();
    expect(layer.getOutput).toBeDefined();
  });

  it('should getOutput return an specific value', () => {
    const layer = new Layer(2, 1);
    layer.neurons[0].weight = [0.5, 0.5];
    const inputs = [1, 1];

    expect(layer.getOutput(inputs)).toEqual([1]);
  });

  it('should getOutput return an specific values', () => {
    const layer = new Layer(2, 2);
    layer.neurons[0].weight = [0.5, 0.5];
    layer.neurons[1].weight = [1, 1];
    const inputs = [1, 1];

    expect(layer.getOutput(inputs)).toEqual([1, 2]);
  });
});

import General from './general.js';
import Neuron from './neuron.js';

class Layer extends General {
  public neurons: Neuron[];

  constructor(inputCount = 1, neuronCount = 1) {
    super();
    this.neurons = Array.from(
      { length: neuronCount },
      () => new Neuron(inputCount),
    );
  }

  getOutput(inputs: number[]): number[] {
    return this.neurons.map((neuron) => neuron.getOutput(inputs));
  }
}

export default Layer;

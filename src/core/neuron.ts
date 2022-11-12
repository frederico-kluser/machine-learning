import { v4 as uuid } from 'uuid';
import makeWeights from '../generators/weight.js';

class Neuron {
  public id: string;
  public weight: number[];
  public bias: number;

  constructor(inputCount = 1) {
    this.id = uuid();
    this.weight = makeWeights(inputCount);
    this.bias = 0;
  }

  getOutput(inputs: number[]): number {
    if (inputs.length !== this.weight.length) {
      throw new Error('Invalid input length');
    }

    const weightFormatted = this.weight.reduce(
      (acc, weight, index) => acc + weight * inputs[index],
      this.bias,
    );

    return weightFormatted + this.bias;
  }
}

export default Neuron;

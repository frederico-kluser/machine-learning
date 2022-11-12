const getWeight = (maxValue = 1): number =>
  Math.random() * maxValue * 2 - maxValue;

const makeWeights = (weightCount: number): number[] =>
  Array.from({ length: weightCount }, getWeight);

export default makeWeights;

export const map_range = (value, low1, high1, low2, high2) => {
  return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
};

export const mapIndex = (i, arrayLength, maxDelay) => {
  return map_range(i, 0, arrayLength, 0, maxDelay);
};

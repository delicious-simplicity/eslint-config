export const trim = (string: string): string => string.trim();

export const filter = (array, predicate) => {
  let index = -1;
  let resIndex = 0;
  const length = array == null ? 0 : array.length;
  const result = [];

  while (++index < length) {
    const value = array[index];
    if (predicate(value, index, array)) result[resIndex++] = value;
  }

  return result;
};

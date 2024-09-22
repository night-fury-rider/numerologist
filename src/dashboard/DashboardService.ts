interface INumerologyObj {
  [key: string]: number; // This only accepts string keys
}

const NUMEROLOGY_MAP: INumerologyObj = {
  a: 1,
  i: 1,
  j: 1,
  q: 1,
  y: 1,

  b: 2,
  k: 2,
  r: 2,

  c: 3,
  g: 3,
  l: 3,
  s: 3,

  d: 4,
  m: 4,
  t: 4,

  e: 5,
  h: 5,
  n: 5,
  x: 5,

  u: 6,
  v: 6,
  w: 6,

  o: 7,
  z: 7,

  f: 8,
  p: 8,
};

const getNumerologyValue = (str: string): number => {
  let result = str.replace(/ /g, '');

  return result
    .toLocaleLowerCase()
    .split('')
    .reduce(
      (accumulator, newCharacter) => accumulator + NUMEROLOGY_MAP[newCharacter],
      0 as number,
    );
};

const getNumericSumValue = (srcNumber: number): number => {
  let numberStr = `${srcNumber}`;
  let result = numberStr
    .split('')
    .reduce(
      (accumulator, newCharacter) => accumulator + Number(newCharacter),
      0 as number,
    );
  return result < 10 ? result : getNumericSumValue(result);
};

export {getNumericSumValue, getNumerologyValue};

const SUFFIXES = ['', 'k', 'M', 'G', 'T', 'P', 'E'];

const formatNumber = (number: number): string => {
  const tier = (Math.log10(Math.abs(number)) / 3) | 0;

  if (tier === 0) {
    return number.toString();
  }

  const scale = Math.pow(10, tier * 3);
  const scaled = number / scale;

  return scaled.toFixed(1) + SUFFIXES[tier];
};

export default formatNumber;

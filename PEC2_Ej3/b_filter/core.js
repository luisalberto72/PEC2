function onlyEven(array) {
  return array.filter(num => num % 2 === 0);
}

function onlyOneWord(array) {
  return array.filter(str => !str.includes(' '));
}

function positiveRowsOnly(array) {
  return array.filter(row => row.every(num => num > 0));
}

function allSameVowels(array) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return array.filter(word => {
    const uniqueVowels = new Set(word.toLowerCase().split('').filter(char => vowels.includes(char)));
    return uniqueVowels.size === 1;
  });
}

module.exports = {
  onlyEven,
  onlyOneWord,
  positiveRowsOnly,
  allSameVowels
};

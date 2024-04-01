

function allEven(input) {
  return input.every(num => num % 2 === 0);
}



function allSameType(input) {
  const type = typeof input[0];
  return input.every(item => typeof item === type);
}



function positiveMatrix(input) {
  return input.every(row => Array.isArray(row) && row.every(num => num > 0));
}


function allSameVowels(input) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return input.every(str => {
    if (typeof str !== 'string') return false;
    const uniqueVowels = [...new Set(str.toLowerCase().split('').filter(char => vowels.includes(char)))];
    return uniqueVowels.length === 1;
  });
}

module.exports = {
  allEven,
  allSameType,
  positiveMatrix,
  allSameVowels
};

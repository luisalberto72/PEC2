function sum(array) {
  return array.reduce((acc, curr) => acc + curr, 0);
}

function productAll(array) {
  
  return array.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      return acc * productAll(curr);
    } else {
      return acc * curr;
    }
  }, 1);
}

function objectify(array) {
  return array.reduce((obj, item) => {
    obj[item[0]] = item[1];
    return obj;
  }, {});
}


function luckyNumbers(array) {
  const luckyNumbersArray = array.reduce((luckyNumbers, number) => {
    const numberString = Math.abs(number).toString();
    if (numberString.includes(number)) {
      luckyNumbers.push(number);
    }
    return luckyNumbers;
  }, []);

  if (luckyNumbersArray.length === 0) {
    return "There are no lucky numbers in the array.";
  } else {
    const lastNumber = luckyNumbersArray.pop();
    return "Your lucky numbers are: " + luckyNumbersArray.join(', ') + ", and " + lastNumber ;
  }
}



module.exports = {
  sum,
  productAll,
  objectify,
  luckyNumbers
};


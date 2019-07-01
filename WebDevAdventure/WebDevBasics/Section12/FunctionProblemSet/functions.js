function isEven(number)  {
  if(number % 2 === 0) {
    return true;
  }
  return false;
}

function factorial(number) {
  if(number < 0) {
    alert("number given was negative");
  }
  var sum = 1;
  for(var count = 2; count<=number; count++) {
    sum *= count;
  }
  return sum;
}

function kebabToSnake(word) {
	var newWord = word.replace(/-/g , "_");
	return newWord;
}
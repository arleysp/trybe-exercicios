function toWeirdCase(string) {
  let result = '';
  let capitalizeNext = true;
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === ' ') {
      capitalizeNext = true;
      result += ' ';
    } else {
      capitalizeNext === true ? result += string[i].toUpperCase() : result += string[i].toLowerCase()
      capitalizeNext = !capitalizeNext;
    }
  }
  return result;
}

console.log(toWeirdCase('vamo trybe'));
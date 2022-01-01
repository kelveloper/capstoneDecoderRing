// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  function substitution(input, alphabet, encode = true) {
    if (!alphabet) {
      return false;
    }
    let alpha = alphabet.split("");
    //console.log(alpha);
    const letters = input.toLowerCase().split("");
    let realAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let result = [];
    //error handling: contain 26 char.
    if (alphabet.length !== 26) {
      return false;
    }
     for (let i = 0; i < alpha.length; i++) { 
       for (let j = i + 1 ; j < alpha.length; j++) { 
         if (alpha[i] === alpha[j]) {
           //error handling: each char should be unqiue
           return false;
         } 
       } 
     }
    letters.forEach(letter => {
      if (encode && letter !== " ") {    
        result.push(alpha[realAlphabet.indexOf(letter)]);
      } 
      if (encode === false && letter !== " ") {
        result.push(realAlphabet[alpha.indexOf(letter)]);
      }
      if (letter === " ") {
      result.push(" ");
      }
    })
    return result.join("");
  }
  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;

/*
for Thinkful solutions to properly work:
  module.exports = { substitution: substitutionModule.substitution };
*/
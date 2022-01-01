// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  
  function caesar(input, shift, encode = true) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let result = [];
    if(shift === 0 || !shift || shift > 25 || shift < -25) return false;
    //split input letters
    let letters = input.toLowerCase().split('');
    
    letters.forEach((letter) => {
      //find the index of the input correlating to the alphabet to shift them around
      let location = alphabet.indexOf(letter); 
      //console.log(position);
      if (alphabet.includes(letter) && encode) {
        
        if (location + shift >= 26) {
          location = location - 26;
        }
        if (location + shift < 0) {
          location = location + 26;
        }
        result.push(alphabet[location + shift]);
        } if (encode === false && alphabet.includes(letter)) {
          if (location - shift >= 26) {
          location = location - 26;
        }
        if (location - shift < 0) {
          location = location + 26;
        }
        result.push(alphabet[location - shift]);      
      }
        if (alphabet.includes(letter) === false) {
          result.push(letter);
        }
      })
    return result.join('');
    }
  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;

/*
for Thinkful solutions to properly work:
  module.exports = { caesar: caesarModule.caesar };
*/
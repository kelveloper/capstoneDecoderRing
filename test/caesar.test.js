const expect = require("chai").expect;
const caesar  = require("../src/caesar");

describe("ceasar", () => { 
  describe("encoding message", () => {
    //caesar("thinkful", 3); //> 'wklqnixo'
    it("should return a encode message shift to the right", () => {
        const input = "thinkful";
        const shift = 3;
        const actual = caesar(input, shift, encode = true);
        const expected = "wklqnixo";

        expect(actual).to.eql(expected);
    });
    //caesar("thinkful", -3); //> 'qefkhcri'
    it("should return a encode message shift to the left", () => {
        const input = "thinkful";
        const shift = -3;
        const actual = caesar(input, shift, encode = true);
        const expected = "qefkhcri";

        expect(actual).to.eql(expected);
    });
    //caesar("This is a secret message!", 8); //> 'bpqa qa i amkzmb umaaiom!'
    it("should return a encode message shift to the right", () => {
        const input = "This is a secret message!";
        const shift = 8;
        const actual = caesar(input, shift, encode = true);
        const expected = "bpqa qa i amkzmb umaaiom!";

        expect(actual).to.eql(expected);
    });
});
  describe("decoding message", () => {
    //caesar("wklqnixo", 3, false); //> 'thinkful'
    it("should return a decode message shift to the right", () => {
        const input = "wklqnixo";
        const shift = 3;
        const actual = caesar(input, shift, encode = false);
        const expected = "thinkful";

        expect(actual).to.eql(expected);
    });
     //caesar("BPQA qa I amkzmb umaaiom!", 8, false); //> 'this is a secret message!'
     it("should return a decode message shift to the right with spaces, captial letters, and special characters", () => {
        const input = "BPQA qa I amkzmb umaaiom!";
        const shift = 8;
        const actual = caesar(input, shift, encode = false);
        const expected = "this is a secret message!";

        expect(actual).to.eql(expected);
    });
  });
  describe("error handling", () => { 
    //caesar("thinkful"); //> false
    it("should return false when there is no shift", () => {
        const input = "thinkful";
        const actual = caesar(input);
        
        expect(actual).to.be.false;
    });
    //caesar("thinkful", 99); //> false
    it("should return false when shift is more than 25", () => {
        const input = "thinkful";
        const shift = 99;
        const actual = caesar(input,shift);
        
        
        expect(actual).to.be.false;
    });
    //caesar("thinkful", -26); //> false
    it("should return false when shift is less than -25", () => {
        const input = "thinkful";
        const shift = -26;
        const actual = caesar(input,shift);
        
        
        expect(actual).to.be.false;
    });
  });
});

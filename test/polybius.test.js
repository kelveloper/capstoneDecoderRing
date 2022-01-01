
const expect = require("chai").expect;
const polybius = require("../src/polybius");

describe("polybius", () => { 
    describe("encoding message", () => { 
        //polybius("thinkful"); //> "4432423352125413"
        it("should return encode message", () =>{ 
            const input = "thinkful";
            const actual = polybius(input);
            const expected = "4432423352125413";

            expect(actual).to.eql(expected);
        });
        //polybius("Hello world"); //> '3251131343 2543241341'
        it("should return encode message with spaces", () => { 
            const input = "Hello World";
            const actual = polybius(input);
            const expected = '3251131343 2543241341';

            expect(actual).to.eql(expected);
        });
    });
    describe("decoding message", () => { 
        //polybius("3251131343 2543241341", false); //> "hello world"
        it("should return a decode message", () => { 
            const input = "3251131343 2543241341";
            const actual = polybius(input, encode = false);
            const expected = "hello world";

            expect(actual).to.be.eql(expected);
        });
        //polybius("4432423352125413", false); //> "th(i/j)nkful"
        it("should return a decode message with '(i/j)", () => { 
            const input = "4432423352125413";
            const actual = polybius(input, encode = false);
            const expected = "th(i/j)nkful";

            expect(actual).to.be.eql(expected);
        });
    });
    describe("error handling", () => { 
        //polybius("44324233521254134", false); //> false
        it("should return a decode message for odd number of strings", () => { 
            const input = "44324233521254134";
            const actual = polybius(input, encode = false);

            expect(actual).to.be.false;
        });
    });
});







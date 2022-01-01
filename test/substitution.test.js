const expect = require("chai").expect;
const substitution = require("../src/substitution");

describe("subsititution", () => { 
    describe("encoding message", () => { 
        //substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"); //> 'jrufscpw'
        it("should return encoding message", () => { 
            const input = "thinkful";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const actual = substitution(input,alphabet);
            const expected = "jrufscpw";

            expect(actual).to.eql(expected);
        });
        //substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"); //> 'elp xhm xf mbymwwmfj dne'
        it("should return encoding message with spaces", () => { 
            const input = "You are an excellent spy";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const actual = substitution(input,alphabet);
            const expected = "elp xhm xf mbymwwmfj dne";

            expect(actual).to.eql(expected);
        });
        //substitution("message", "$wae&zrdxtfcygvuhbijnokmpl"); //> "y&ii$r&"
        it("should return encoding message with spaces and special characters", () => { 
            const input = "message";
            const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
            const actual = substitution(input,alphabet);
            const expected = "y&ii$r&";

            expect(actual).to.eql(expected);
        });
    });
    describe("decoding message", () => {
        //substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false); //> 'thinkful' 
        it("should return decoding message", () => { 
            const input = "jrufscpw";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const actual = substitution(input,alphabet,encode=false);
            const expected = "thinkful";

            expect(actual).to.eql(expected);
        });
        //substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false); //> "message"
        it("should return decoding message with special characters", () => { 
            const input = "jrufscpw";
            const alphabet = "xoyqmcgrukswaflnthdjpzibev";
            const actual = substitution(input,alphabet,encode=false);
            const expected = "thinkful";

            expect(actual).to.eql(expected);
        });
    });
    describe("errror handling", () => { 
        //substitution("thinkful", "short"); //> false
        it("should return false for alphabet being less than 25 char", () => { 
            const input = "thinkful";
            const alphabet = "short";
            const actual = substitution(input,alphabet);

            expect(actual).to.be.false;
        });
        //substitution("thinkful", "abcabcabcabcabcabcabcabcyz"); //> false
        it("should return false for alphabet being more than 25 char", () => { 
            const input = "thinkful";
            const alphabet = "abcabcabcabcabcabcabcabcyz";
            const actual = substitution(input,alphabet);

            expect(actual).to.be.false;
        });
    });
});









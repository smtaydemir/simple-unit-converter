const expect    = require("chai").expect;
const converter = require("../index.js");

describe("Simple Unit Converter", function() {

    it("Pixel to Point", function() {
      expect(converter(1, 'px', 'pt')).to.equal(0.75);
    });
    
});

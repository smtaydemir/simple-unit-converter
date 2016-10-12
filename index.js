const definitions = require('./src/definitions.js');


module.exports = convert;

function convert(numberUnit, fromUnit, toUnit) {

  let numberUnitToPixel = numberUnit / definitions[fromUnit].anchor;
  let convertUnit       = numberUnitToPixel * definitions[toUnit].anchor;
  return convertUnit;

}

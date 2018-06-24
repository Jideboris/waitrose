const { ones, tens, teens, units } = require('./mappings')
const { getunits } = require('../engine/core')

function splitnumber(number) {
    return number.toString().split('')
}

function processor(number) {
    if (number === 0) return 'zero'
    if (number == NaN) return 'number not supported'
    let outputBuilder = ''
    let numberUnits = splitnumber(number)
    outputBuilder = getunits(numberUnits.length, numberUnits)
    return outputBuilder
}
module.exports = {
    processor: processor
}
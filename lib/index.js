const { processor } = require('./number-names/processor')

const input = parseInt(process.argv[2], 10)
console.log(processor(input)) // eslint-disable-line no-console

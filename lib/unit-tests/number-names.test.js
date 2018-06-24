const { processor } = require('../number-names/processor')

describe('number names', () => {
  ;[
    { in: 0, out: 'zero' },
    { in: 1, out: 'one' },
    { in: 5, out: 'five' },
    { in: 9, out: 'nine' },
    { in: 10, out: 'ten' },
    { in: 11, out: 'eleven' },
    { in: 16, out: 'sixteen' },
    { in: 22, out: 'twenty two' },
    { in: 68, out: 'sixty eight' },
    { in: 100, out: 'one hundred' },
    { in: 101, out: 'one hundred and one' },
    { in: 121, out: 'one hundred and twenty one' },
    { in: 1000, out: 'one thousand' },
    { in: 5678, out: 'five thousand,six hundred and seventy eight' },
    { in: 12345, out: 'twelve thousand,three hundred and forty five' },
    { in: 123456, out: 'one hundred and twenty three thousand,four hundred and fifty six' },
    { in: 1234567, out: 'one million,two hundred and thirty four thousand,five hundred and sixty seven' },
    { in: 12345678, out: 'twelve million,three hundred and forty five thousand,six hundred and seventy eight' },
    { in: 123456789, out: 'one hundred and twenty three million,four hundred and fifty six thousand,seven hundred and eighty nine' },
    { in: 1123456789, out: 'one billion,one hundred and twenty three million,four hundred and fifty six thousand,seven hundred and eighty nine' },
    { in: 11123456678, out: 'eleven billion,one hundred and twenty three million,four hundred and fifty six thousand,six hundred and seventy eight' },
    { in: 111123456678, out: 'one hundred and eleven billion,one hundred and twenty three million,four hundred and fifty six thousand,six hundred and seventy eight' },
    { in: 1000000000001, out: 'one trillion and one' },
    { in: 1111123456678, out: 'one trillion,one hundred and eleven billion,one hundred and twenty three million,four hundred and fifty six thousand,six hundred and seventy eight' },
    { in: 11111111111111, out: 'Sorry app not designed to process this large nunber.thanks' }
  ].forEach(testData => {
    it(`outputs "${testData.out}" when input is ${testData.in}`, () => {
      expect(processor(testData.in)).toEqual(testData.out)
    })
  })
})

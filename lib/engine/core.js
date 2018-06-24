const { ones, tens, teens, units } = require('../number-names/mappings')

function getunits(len, digits) {
    let finalresult = ''
    let firstdig, dig1, dig2, dig3, dig4, com1, com2, com3, com4 = ''
    switch (len) {
        case 14:
            return 'Sorry app not designed to process this large nunber.thanks'
        case 13:
            firstdig = refresh(digits).splice(0, 1)
            dig1 = refresh(digits).splice(2, 3)
            dig2 = refresh(digits).splice(4, 3)
            dig3 = refresh(digits).splice(7, 3)
            dig4 = refresh(digits).splice(10, 3)
            com1 = dig1[0] > 0 ? `${''},` : ''
            com2 = dig2[0] > 0 ? `${''},` : ''
            com3 = dig3[0] > 0 ? `${''},` : ''
            com4 = dig4[0] > 0 ? `${''},` : ''
            return coreprocessor(firstdig, dig1, dig2, dig3, dig4, com1, com2, com3, com4, 13)
        case 12:
            firstdig = refresh(digits).splice(0, 3)
            dig1 = refresh(digits).splice(3, 3)
            dig2 = refresh(digits).splice(6, 3)
            dig3 = refresh(digits).splice(9, 3)
            com1 = dig1[0] > 0 ? `${''},` : ''
            com2 = dig2[0] > 0 ? `${''},` : ''
            com3 = dig3[0] > 0 ? `${''},` : ''
            return coreprocessor(firstdig, dig1, dig2, dig3, '', com1, com2, com3, '', 12)
        case 11:
            firstdig = refresh(digits).splice(0, 2)
            dig1 = refresh(digits).splice(2, 3)
            dig2 = refresh(digits).splice(5, 3)
            dig3 = refresh(digits).splice(8, 3)
            com1 = dig1[0] > 0 ? `${''},` : ''
            com2 = dig2[0] > 0 ? `${''},` : ''
            com3 = dig3[0] > 0 ? `${''},` : ''
            return coreprocessor(firstdig, dig1, dig2, dig3, '', com1, com2, com3, '', 11)
        case 10:
            firstdig = refresh(digits).splice(0, 1)
            dig1 = refresh(digits).splice(1, 3)
            dig2 = refresh(digits).splice(4, 3)
            dig3 = refresh(digits).splice(7, 3)
            com1 = dig1[0] > 0 ? `${''},` : ''
            com2 = dig2[0] > 0 ? `${''},` : ''
            com3 = dig3[0] > 0 ? `${''},` : ''
            return coreprocessor(firstdig, dig1, dig2, dig3, '', com1, com2, com3, '', 10)
        case 9:
            firstdig = refresh(digits).splice(0, 3)
            dig1 = refresh(digits).splice(3, 3)
            dig2 = refresh(digits).splice(6, 3)
            com1 = dig1[0] > 0 ? `${''},` : ''
            com2 = dig2[0] > 0 ? `${''},` : ''
            return coreprocessor(firstdig, dig1, dig2, '', '', com1, com2, '', '', 9)
        case 8:
            firstdig = refresh(digits).splice(0, 2)
            dig1 = refresh(digits).splice(2, 3)
            dig2 = refresh(digits).splice(5, 3)
            com1 = dig1[0] > 0 ? `${''},` : ''
            com2 = dig2[0] > 0 ? `${''},` : ''
            return coreprocessor(firstdig, dig1, dig2, '', '', com1, com2, '', '', 8)
        case 7:
            firstdig = refresh(digits).splice(0, 1)
            dig1 = refresh(digits).splice(1, 3)
            dig2 = refresh(digits).splice(4, 3)
            com1 = dig1[0] > 0 ? `${''},` : ''
            com2 = dig2[0] > 0 ? `${''},` : ''
            return coreprocessor(firstdig, dig1, dig2, '', '', com1, com2, '', '', 7)
        case 6:
            firstdig = refresh(digits).splice(0, 3)
            dig1 = refresh(digits).splice(3, 3)
            com1 = dig1[0] > 0 ? `${''},` : ''
            return coreprocessor(firstdig, dig1, '', '', '', com1, '', '', '', 6)
        case 5:
            firstdig = refresh(digits).splice(0, 2)
            dig1 = refresh(digits).splice(2, 3)
            com1 = dig1[0] > 0 ? `${''},` : ''
            return coreprocessor(firstdig, dig1, '', '', '', com1, '', '', '', 5)
        case 4:
            firstdig = refresh(digits).splice(0, 1)
            dig1 = refresh(digits).splice(1, 3)
            com1 = dig1[0] > 0 ? `${''},` : ''
            return coreprocessor(firstdig, dig1, '', '', '', com1, '', '', '', 4)
        case 3:
            let first33 = refresh(digits).splice(0, 3)
            return gethundred(first33)
        case 2:
            return getteens(digits)
        case 1:
            return getones(digits[0])
    }

}
function coreprocessor(firstdig, dig1, dig2, dig3, dig4, com1, com2, com3, com4, len) {
    let dig1first = dig1 !== '' ? gethundred(dig1) : ''
    let dig2first = dig2 !== '' ? gethundred(dig2) : ''
    let dig3first = dig3 !== '' ? gethundred(dig3) : ''
    let fstdig = firstdig !== '' ? gethundred(firstdig) : ''
    let fstdigteen = firstdig !== '' ? getteens(firstdig) : ''
    let fstdigone = firstdig !== '' ? getones(firstdig[0]) : ''
    let dig4first = dig4 !== '' ? gethundred(dig4) : ''
    let first, second, third, finalthird, finalfirst, finalsecond = ''

    switch (len) {
        case 13:
            finalfirst = dig1first !== '' ? `${dig1first} ` + `${units[3]}` : ''
            second = dig2first !== '' ? `${dig2first} ` + `${units[2]}` : ''
            finalsecond = dig2[0] > 0 ? second : second.replace('and', '')
            finalthird = dig3first !== '' ? `${dig3first} ` + `${units[1]}` : ''
            finalresult = `${fstdigone} ` + units[4]
            break
        case 12:
            first = dig1first !== '' ? `${dig1first} ` + `${units[2]}` : ''
            finalfirst = dig1[0] > 0 ? first : first.replace('and', '')
            finalsecond = dig2first !== '' ? `${dig2first} ` + `${units[1]}` : ''
            finalresult = `${fstdig} ` + units[3]
            finalthird = dig3first !== '' ? `${dig3first}` : ''
            break
        case 11:
            first = dig1first !== '' ? `${dig1first} ` + `${units[2]}` : ''
            finalfirst = dig1[0] > 0 ? first : first.replace('and', '')
            finalsecond = dig2first !== '' ? `${dig2first} ` + `${units[1]}` : ''
            finalresult = `${fstdigteen} ` + units[3]
            finalthird = dig3first !== '' ? `${dig3first}` : ''
            break
        case 10:
            first = dig1first !== '' ? `${dig1first} ` + `${units[2]}` : ''
            finalfirst = dig1[0] > 0 ? first : first.replace('and', '')
            finalsecond = dig2first !== '' ? `${dig2first} ` + `${units[1]}` : ''
            finalresult = `${fstdigone} ` + units[3]
            finalthird = dig3first !== '' ? `${dig3first}` : ''
            break
        case 9:
            first = dig1first !== '' ? `${dig1first} ` + `${units[1]}` : ''
            finalfirst = dig1[0] > 0 ? first : first.replace('and', '')
            finalsecond = dig2first !== '' ? `${dig2first}` : ''
            finalresult = `${fstdig} ` + units[2]
            finalthird = dig3first !== '' ? `${dig3first}` : ''
            break
        case 8:
            first = dig1first !== '' ? `${dig1first} ` + `${units[1]}` : ''
            finalfirst = dig1[0] > 0 ? first : first.replace('and', '')
            finalsecond = dig2first !== '' ? `${dig2first}` : ''
            finalresult = `${fstdigteen} ` + units[2]
            finalthird = dig3first !== '' ? `${dig3first}` : ''
            break
        case 7:
            first = dig1first !== '' ? `${dig1first} ` + `${units[1]}` : ''
            finalfirst = dig1[0] > 0 ? first : first.replace('and', '')
            finalsecond = dig2first !== '' ? `${dig2first}` : ''
            finalresult = `${fstdigone} ` + units[2]
            finalthird = dig3first !== '' ? `${dig3first}` : ''
            break
        case 6:
            first = dig1first !== '' ? `${dig1first}` : ''
            finalfirst = dig1[0] > 0 ? first : first.replace('and', '')
            finalsecond = dig2first !== '' ? `${dig2first}` : ''
            finalresult = `${fstdig} ` + units[1]
            finalthird = dig3first !== '' ? `${dig3first}` : ''
            break
        case 5:
            first = dig1first !== '' ? `${dig1first}` : ''
            finalfirst = dig1[0] > 0 ? first : first.replace('and', '')
            finalsecond = dig2first !== '' ? `${dig2first}` : ''
            finalresult = `${fstdigteen} ` + units[1]
            finalthird = dig3first !== '' ? `${dig3first}` : ''
            break
        case 4:
            first = dig1first !== '' ? `${dig1first}` : ''
            finalfirst = dig1[0] > 0 ? first : first.replace('and', '')
            finalsecond = dig2first !== '' ? `${dig2first}` : ''
            finalresult = `${fstdigone} ` + units[1]
            finalthird = dig3first !== '' ? `${dig3first}` : ''
            break

    }
    return `${finalresult}` + com1 + finalfirst + com2 + finalsecond + com3 + finalthird + com4 + dig4first

}
function refresh(digits) {
    return digits.map((item) => {
        return item;
    })
}
function gethundred(digits) {
    let output = ''
    let last2 = refresh(digits).splice(1, 3)
    let first = digits[0]
    let second = digits[1]
    let third = digits[2]
    if (first > 0) {
        output = `${getones(first)} ` + `${units[0]}`
    }
    if (second > 0) {
        output += ` and ${getteens(last2)}`
    }
    if ((second == 0 && third > 0) || (first == 0 && second == 0 && third > 0)) {
        output += ` and ${getones(third)}`
    }
    return output
}
function getteens(digits) {
    let first = digits[0]
    let second = digits[1]
    if (first == 0 && second == 0) {
        return ''
    }
    if (first == 0 && second > 0) {
        return `${getones(second)}`
    }
    if (first == 1 && second == 0) {
        return 'ten'
    }
    if (first == 1 && second > 0) {
        switch (second) {
            case '1':
                return `${teens[0]}`
            case '2':
                return `${teens[1]}`
            case '3':
                return `${teens[2]}`
            case '4':
                return `${teens[3]}`
            case '5':
                return `${teens[4]}`
            case '6':
                return `${teens[5]}`
            case '7':
                return `${teens[6]}`
            case '8':
                return `${teens[7]}`
            case '9':
                return `${teens[8]}`
        }
    }
    if (first > 1) {
        let finaloutput = ''
        switch (first) {
            case '2':
                finaloutput = `${tens[1]}`
                break
            case '3':
                finaloutput = `${tens[2]}`
                break
            case '4':
                finaloutput = `${tens[3]}`
                break
            case '5':
                finaloutput = `${tens[4]}`
                break
            case '6':
                finaloutput = `${tens[5]}`
                break
            case '7':
                finaloutput = `${tens[6]}`
                break
            case '8':
                finaloutput = `${tens[7]}`
                break
            case '9':
                finaloutput = `${tens[8]}`
                break
        }
        let ext = second > 0 ? `${''} ` + getones(second) : ''
        return finaloutput + ext
    }

}
function getones(digit) {
    switch (digit) {
        case '0':
            return ''
        case '1':
            return ones[0]
        case '2':
            return ones[1]
        case '3':
            return ones[2]
        case '4':
            return ones[3]
        case '5':
            return ones[4]
        case '6':
            return ones[5]
        case '7':
            return ones[6]
        case '8':
            return ones[7]
        case '9':
            return ones[8]
    }

}
module.exports = {
    getones: getones,
    getteens: getteens,
    getunits: getunits
}
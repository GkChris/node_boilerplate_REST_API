
function isNumeric(arg){
    if ( !isNaN(arg) ) return true;
    else return false;
}

function toFloatOrFalse(arg){
    return parseFloat(arg) ? parseFloat(arg) : false;
}

function toIntegerOrFalse(arg){
    return parseInt(arg) ? parseInt(arg) : false;
}

function formatNumber(number, decimalSeparator){
    
    if ( !parseInt(number) ) return false;

    const default_decimal_separator = ',';
    const default_decimal_point = '.';
    const isSeparatorValid = decimalSeparator === '.' || decimalSeparator === ',' ? true : false;

    const decimal_separator = decimalSeparator &&
                            isSeparatorValid ? decimalSeparator : default_decimal_separator

    const decimal_point = decimalSeparator &&
                            isSeparatorValid && 
                            decimalSeparator !== default_decimal_separator ? default_decimal_separator : default_decimal_point


    const parsedNumber = parseFloat(number);
    const parsedNumberToString = parsedNumber.toString();

    const hasDecimal = parsedNumberToString.includes(default_decimal_point) ? true : false;

    const reversed_whole_toArray = hasDecimal ?
                            parsedNumberToString.split(default_decimal_point)[0].split('').reverse()
                            : parsedNumberToString.split('').reverse()
        
    const decimal_part = hasDecimal ?
                            parsedNumberToString.split(default_decimal_point)[1]
                            : false;                    

    var counter = 0
    const formatted_whole = reversed_whole_toArray.map((char) => {
        if ( counter === 2 && reversed_whole_toArray.length > 3 && index !== reversed_whole_toArray.length - 1 ) {
            counter = 0;
            return `${decimal_point}${char}`
          } 
          counter++;
          return char
    }).reverse().join('')


    return hasDecimal ? `${formatted_whole}${decimal_separator}${decimal_part}` : formatted_whole
}


module.exports = {
    isNumeric,
    toFloatOrFalse,
    toIntegerOrFalse,
    formatNumber
}
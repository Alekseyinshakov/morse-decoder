const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let inputExpr = expr;
    let result = '';
    for (let i = 0; i < (expr.length / 10); i++) {
        let letterDigit = inputExpr.slice(0, 10);
        // console.log('letterDigit', letterDigit);      
        inputExpr = inputExpr.slice(10);
        if (letterDigit === '**********') {
            result += ' ';
        } else {
            let morzeItem = '';
            let lastTwo = letterDigit.slice(-2);          
            for (let i = 0; i < 5; i++) {
              if (lastTwo === '10') {
                morzeItem = '.' + morzeItem;
              }
              if (lastTwo === '11') {
                morzeItem = '-' + morzeItem;
              }
              letterDigit = letterDigit.slice(0, -2);
              lastTwo = letterDigit.slice(-2);
            }
            // console.log(morzeItem);          
            result += MORSE_TABLE[morzeItem];
        }
  
    }
    return result;
  }

console.log(decode("0000001111**********0000000010"));




module.exports = {
    decode
}
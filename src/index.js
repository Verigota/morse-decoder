const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let str = '';
    const arrWords = expr.split('**********');
    arrWords.forEach (word => {
        for ( let i = 0; i < word.length; i += 10){
            let letter = word.substring(i, i+10);
            let ind = letter.indexOf('1');
            letter = letter.slice(ind);
            let symbol = '';
            const dot = '.';
            const tir = '-'
            for (let j = 1; j < letter.length; j += 2){
                if (letter[j] === '0') {
                    symbol = symbol + dot;
                } else {
                    symbol = symbol + tir;
                }
            }

            str = str.concat(MORSE_TABLE[symbol]);
        }
        str = str.concat(' ')
    })
    return str.slice(0, str.length-1)
}

module.exports = {
    decode
}
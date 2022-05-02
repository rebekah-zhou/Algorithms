/**
 * @param {string} s
 * @return {number}
 */
const s = 'CMIV'
 var romanToInt = function(s) {
    const sArray = s.split('')
    let value=0;
    for (let i=0; i <= sArray.length; i++) {
        switch (sArray[i]) {
            case 'I': 
                if (sArray[i+1] === 'V') {
                    value += 4;
                    i++;
                    break;
                } else if (sArray[i+1] === 'X') {
                    value += 9;
                    i++;
                    break;
                }
                value += 1;
                break;
            case 'V': 
                value += 5;
                break;
            case 'X': 
                if (sArray[i+1] === 'L') {
                    value += 40;
                    i++;
                    break;
                }
                if (sArray[i+1] === 'C') {
                    value += 90;
                    i++;
                    break;
                }
                value += 10;
                break;
            case 'L': 
                value += 50;
                break;
            case 'C': 
                if (sArray[i+1] === 'D') {
                    value += 400;
                    i++;
                    break;
                }
                if (sArray[i+1] === 'M') {
                    value += 900;
                    i++;
                    break;
                }
                value += 100;
                break;
            case 'D':
                value += 500;
                break;
            case 'M':
                value += 1000;
                break;
        }
        return value;
    } 
};

console.log(romanToInt(s));
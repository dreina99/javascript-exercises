const palindromes = function (str) {
    str = str
        .toLowerCase()
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")
        .replaceAll(' ', '')
    reverseStr = str.split('').reverse().join('')
    return str === reverseStr
};

// Do not edit below this line
module.exports = palindromes;

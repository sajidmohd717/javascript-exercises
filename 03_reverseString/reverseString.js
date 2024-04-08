const reverseString = function(word) {
    let splitString = word.split("")
    splitString = splitString.reverse()
    let reversedString = splitString.join("")
    return reversedString
};

// Do not edit below this line
module.exports = reverseString;

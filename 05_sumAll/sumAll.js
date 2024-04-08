const sumAll = function(a, b) {
    let total = 0;
    let min, max;
    if (!(isNumber(a) && isNumber(b))) {
        return 'ERROR'
    }
    if (a < b) {
        min = a;
        max = b;
    }
    else {
        min = b;
        max = a;
    }

    if (min < 0)
    {
        return "ERROR"
    }

    
    for (let i = min; i <= max; i++) {
        total += i;
    }
    return total
};

function isNumber(value) {
    return typeof value === 'number';
  }

// Do not edit below this line
module.exports = sumAll;

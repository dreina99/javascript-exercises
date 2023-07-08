const fibonacci = function(fibNum) {
    fibNum = parseInt(fibNum)
    if(fibNum <= 0)
        return "OOPS"
    else if(fibNum == 1 || fibNum == 2)
        return 1

    fibTotal = 1 + 1
    prevFib = 1
    for(let i = 0; i < fibNum - 3; i++) {
        temp = fibTotal
        fibTotal = fibTotal + prevFib
        prevFib = temp
    }
    return fibTotal
};

// Do not edit below this line
module.exports = fibonacci;

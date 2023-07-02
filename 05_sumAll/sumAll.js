const sumAll = function(start, end) {
    if(start < 0 || end < 0 || typeof start != "number" || typeof end != "number") 
        return "ERROR"
    
    // ensure start is always less than end
    let arr = [start, end]
    arr.sort()

    let sum = 0
    for(let i = arr[0]; i <= arr[1]; i++) {
        sum += i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;

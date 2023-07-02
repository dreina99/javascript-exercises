const removeFromArray = function(arr, ...args) {
    args.forEach(arg => {
        index = arr.indexOf(arg)
        if (index != -1)
            arr.splice(arr.indexOf(arg), 1)
    })
    return arr
};

// Do not edit below this line
module.exports = removeFromArray;

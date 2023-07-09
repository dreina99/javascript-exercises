const findTheOldest = function(arr) {
    ages = []
    arr.forEach(item => {
        let currLifeSpan = 0
        if(item.yearOfDeath == undefined)
            currLifeSpan = new Date().getFullYear() - item.yearOfBirth
        else 
            currLifeSpan = item.yearOfDeath - item.yearOfBirth
        item.yearsLived = currLifeSpan
    })

    arr.sort((a, b) => {
        if(a.yearsLived > b.yearsLived) return -1
        else return 1
    })
    
    return arr[0]
};

const findTheOldest2 = function(arr) {
    return arr.reduce((oldest, currPerson) => {
        oldestYears = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
        currYears = getAge(currPerson.yearOfBirth, currPerson.yearOfDeath)

        return oldestYears < currYears ? currPerson : oldest
    })
}

const getAge = (birth, death) => {
    if(!death)
        death = new Date().getFullYear()
    return death - birth
}

// Do not edit below this line
module.exports = findTheOldest2;

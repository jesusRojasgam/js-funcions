const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(paramArray) {
    let longesWord = paramArray[0]
    for (let i = 0; i < paramArray.length; i++) {
        if (paramArray[i].length > longesWord.length){
            longesWord = paramArray[i]
        }
    
    }
    return console.log(longesWord)
}

findLongestWord(avengers)
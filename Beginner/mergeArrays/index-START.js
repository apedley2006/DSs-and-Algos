/*
 Given two or more arrays, write a function that combines
 their elements into one array without any repetition. 
 E.g mergeArrays([1,2,3,3,3], [1,4,5,2]) // should return [1,2,3,4,5]
*/

function mergeArrays(...arrays) {
    let jointArray = []
    
    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    })
    return [...new Set([...jointArray])]
}

function mergeArrays(...arrays) {
    let jointArray = []
    
    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    })
    const newArr = jointArray.filter((item, index) => jointArray.indexOf(item) === index)
    return newArr
}

function mergeArrays(...arrays) {
    let jointArray = []
    
    arrays.forEach(array => {
        jointArray = [...jointArray, ...array]
    })
    const redArr = jointArray.reduce((newArray, item) => {
        if (newArray.includes(item)){
            return newArray
        } else {
            return [...newArray, item]
        }
    }, [])
    return redArr
}

module.exports = mergeArrays
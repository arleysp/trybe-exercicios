function compareTriplets(a, b) {
    let aPoints = 0
    let bPoints = 0
    
    for (let index = 0; index < a.length; index += 1) {
        for (let index2 = 0; index < b.length; index +=1) {
            if (a[index] > b[index]) {
                aPoints = aPoints + 1;
            } else if (a[index] < b[index]) {
                bPoints = bPoints + 1;
            } else if (a[index] === b[index]) {
                aPoints = aPoints + 1;
                bPoints = bPoints + 1;
            
            }
        }
    }
    let resultPoints = [aPoints, bPoints]
    return resultPoints
}

let alice = [3, 6, 9]
let bob = [2, 8, 9]
console.log(compareTriplets(alice, bob))
const conquer = (left, right) => {
    let sorted = []
    let leftPointer = 0
    let rightPointer = 0
    while (leftPointer < left.length && rightPointer < right.length) {


        if (left[leftPointer] <= right[rightPointer]) {
            sorted.push(left[leftPointer])
            leftPointer++

        }
        else {
            sorted.push(right[rightPointer])
            rightPointer++

        }
    }

    for(let items of left.slice(leftPointer)){
        sorted.push(items)
    }

    for(let items of right.slice(rightPointer)){
        sorted.push(items)
    }
    


    return sorted
}


const divide = (arr) => {
    if (arr.length < 2) {
        return arr
    }
    else {
        let mid = Math.floor(arr.length / 2)

        let leftSide = arr.slice(0, mid)
        let rightSide = arr.slice(mid, arr.length)



        return conquer(divide(leftSide), divide(rightSide))
    }
}

const array = [10, 9,8,7,6,5,4,3];
console.log(divide(array))

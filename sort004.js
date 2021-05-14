const phaseOne = (array, i, j) => {

    const midpoint = i + j
    const pivot = array[Math.floor(midpoint / 2)]


    while (true) {
        for (let counter = 0; counter < array.length; counter++) {

            if (array[i] < pivot) {
                i++
            }
            else {

                break;
            }

        }


        for (let counter = 0; counter < array.length; counter++) {

            if (j < 1) {

                break;
            }
            if (j < i) {

                break;
            }
            if (array[j] < pivot) {

                break;
            }
            if (array[j] <= pivot) {
                break;
            }
            j--;

        }



        if (i <= j) {

            const tempVar = array[i]
            array[i] = array[j]
            array[j] = tempVar
            i++
            j--

        }
        else {
            break;
        }

    }

    return {
        array: array,
        left: i,
        right: j
    }
}

const isSorted = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
            return false
        }
    }

    return true;
}

const sort = (array, left, right) => {

    if (isSorted(phaseOne(array).array)) {
        return array
    }



    if (array.length < 1) {
        return array
    }
    else {
        let basePointer = phaseOne(array, left, right).left

        if (left < basePointer - 1) {
            return sort(array, left, basePointer - 1)
        }
        if (basePointer < right) {
            return sort(array, basePointer, right)
        }

    }

}

let array = [1, 4, 9, 6, 2, 7]
console.log(sort(array, 0, array.length - 1))
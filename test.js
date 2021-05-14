function swap(items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}


function partition(items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)], //middle element
        i       = left, //left pointer
        j       = right; //right pointer

        console.log(i,j)
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }

        console.log(i,j)

        if (i <= j) {
            swap(items, i, j); //swap two elements
            i++;
            j--;
        }
    }

    console.log(items)
    return i;
}

let array = [5, 3, 7, 6, 2, 9]
console.log(partition(array, 0, array.length - 1))
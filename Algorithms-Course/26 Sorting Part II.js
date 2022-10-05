function merge(array1, array2) {
  let newArray = [];
  while (array1.length && array2.length) {
    if (array1[0] >= array2[0]) {

      // We are trying to shift the first index value and add it to the new array
      let array2ShiftedValue = array2.shift();
      newArray.push(array2ShiftedValue);
    } else {
      let array1ShiftedValue = array1.shift()
      newArray.push(array1ShiftedValue);
    }
  }


//   ***** SOLUTION 1 *******
//   while (array1.length) {
//     newArray.push(array1.shift());
//   }

//   while (array2.length) {
//     newArray.push(array2.shift());
//   }

//   return newArray


// ****** SOLUTION 2 *********

//   return newArray.concat(array1).concat(array2);


// ******* SOLUTION 3 *********

  return [...newArray, ...array1, ...array2];



}




function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  let mid = Math.floor(array.length / 2);
  let leftArray = array.slice(0, mid);
  let rightArray = array.slice(mid);

  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

console.log(mergeSort([2, 5, 10, 1, 8, 11]));




// *********************************

// Quick Sort

const numbers = [99,44,6,2,1,5,63,87,283,4,0]

function partition(arr, start = 0, end = arr.length - 1){

    let pivot = arr[start]
    let swapIdx = start

    for(let i = start + 1; i <= end; i++){
        if(pivot > arr[i]){
            swapIdx++
            swap(arr, swapIdx, i)
        }
    }

    swap(arr, start, swapIdx)
    return swapIdx
}

function quickSort(arr, left = 0, right = arr.length - 1){

    if(left < right){
        let pivotIndex = partition(arr, left, right)

        //left
        quickSort(arr, left, pivotIndex -1)

        //right
        quickSort(arr, pivotIndex + 1, right)
    }

    return arr
}

function swap(arr, firstIndex, secondIndex){
    let temp = arr[firstIndex]
    arr[firstIndex] = arr[secondIndex]
    arr[secondIndex] = temp
}

const result = quickSort(numbers)
console.log(result);

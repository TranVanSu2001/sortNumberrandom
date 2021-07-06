function createRandomArray() {
  var arr = [];
  
  for (var i = 0; i < 20; i++) {
    var randomNumber = Math.random()*10 * i;
    arr.push(Number(randomNumber.toFixed(0)));
  }
  
  return arr;
}

var unSortedArray = createRandomArray();
console.log("unSortedArray", unSortedArray);

// TODO: write a function to sort @unSortedArray in descending order 
// Ex: unSortedArray = [1, 6, 7, 4, 6] -> result: [7, 6, 6, 4, 1]

var a = 0;
function sortArray(arr) {
  // console.log('arr', arr);+

    for( i = 0; i < unSortedArray.length; i++) {
      for( j = i + 1; j < unSortedArray.length; j++) {
        if( unSortedArray[i] < unSortedArray[j]) {
          // a =  unSortedArray[i];
          a = unSortedArray[i];
          unSortedArray[i] = unSortedArray[j];
          unSortedArray[j] = a;
        }
      }
    }
}
let sortedArray = sortArray(unSortedArray);
console.log('SortedArray', unSortedArray);




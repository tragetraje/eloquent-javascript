/*
Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
*/

function range(start, end) {
    var array = [];
    if (start <= end) {
        while (start <= end) {
            array.push(start);
            start++;
        }
    } else {
        while (start >= end) {
            array.push(start);
            start--;
        }
    }
    return array;
}

console.log(range(1, 10));
console.log(range(10, 1));

/*
Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.
*/

function sum(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}

console.log(sum(range(1, 10))); //55

/*
As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
*/

function range(start, end, step) {
    if (step == null) {
        step = 1;
    } else {
      step = Math.abs(step);
    }
    var array = [];
    if (start <= end) {
        while (start <= end) {
            array.push(start);
            start += step;
        }
    } else {
        while (start >= end) {
            array.push(start);
            start -= step;
        }
    }
    return array;
}

console.log(range(5, 2, -1));

/*
Arrays have a method reverse, which changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements. Neither may use the standard reverse method.
*/

function reverseArray(array) {
  var reversedArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
}

console.log(reverseArray(["A", "B", "C"])); // → ["C", "B", "A"];
console.log(reverseArray([1, 2, 5, 7]));

function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length/2); i++) {
    var oldArray = array[i];
    console.log(oldArray);
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = oldArray;
  }
  return array;
}

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue); // → [5, 4, 3, 2, 1]

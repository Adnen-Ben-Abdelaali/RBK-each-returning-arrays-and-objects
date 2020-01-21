/**** Implemented an forEach() clone named each()
that is fully functionnal ***/
function each(collection, func) {
  if(Array.isArray(collection)) {
    for(let i = 0; i < collection.length; i++) {
      func(collection[i], i);
    }
  }else {
    for(let key in collection) {
      func(collection[key], key);
    }
  }
}
/*****************************************************/
/*
1.Using our updated version of each, write the following
 function: values: accepts an object as a parameter, and
 outputs an array of the object's values
 */
 function values(object) {
   let outputArray = new Array();
   each(object, function(element, index) {
     outputArray.push(element);
   });
   return outputArray;
}
/*************************************/
/*
1.Using our updated version of each, write the following
function: keys: accepts an object as a parameter, and outputs
an array of the object's keys.
*/
function keys(object) {
  let outputArray = new Array();
  each(object, function(element, index) {
    outputArray.push(index);
  });
  return outputArray;
}
/*******************************************************/
/*
2.Write a function called keysLongerThan that accepts two parameters
 -- an object and a number -- and returns a new object with
 only the key/value pairs in the input object whose keys are longer
  than the numeric argument, e.g.:

 keysLongerThan({name: 'Annyeong', age: 25, favoriteColor: 'blue'}, 3);
 // => {name: 'Annyeong', favoriteColor: 'blue'}
 keysLongerThan({name: 'Annyeong', age: 25, favoriteColor: 'blue'}, 4);
 // => {favoriteColor: 'blue'}

Make sure to use the new version of each for this.
*/
function keysLongerThan(object, number) {
    let outputObj = new Object();
    each(object, function(element, index) {
      if(index.length > number) {
        outputObj[index] = element;
      }
    });
    return outputObj;
}
/**********************************************************/
/*
3.Write a function called incrementValues
that accepts an object as a parameter, and outputs an object
 with all of its numeric values incremented by one.
 You'll want to use the updated version of each for this, and
  you will need to check the type of each value
  to determine whether or not it should be incremented.
   HINT: Try entering the following expressions in to your console:

 typeof 'hello'; // => 'string'
 typeof 1;       // => 'number'
 typeof true;    // => 'boolean'
*/
function incrementValues(object) {
  let outputObj = new Object();
  each(object, function(element, index) {
      if(typeof element === "number") {
          outputObj[index] = element + 1;
      }else {
        outputObj[index] = element;
      }

  });
  return outputObj;
}
/*********************************************/
/*
5.Write a function called oddEvenArray that accepts an object
as parameter and return array of numbers of the key values
of the object ( you need to arrange the new array, odd numbers
 will be at the beginning of the array, then the even numbers
  will be at the end of the array)

 function oddEvenArray(object){
       //your code is here
 }
 oddEvenArray({a:3,b:5 ,c: 4 ,d: 1, e:10, f:12 ,g:56 ,h:44 ,i:32});
  // ==> [3,5,1,4,10,12,56,44,32]
*/

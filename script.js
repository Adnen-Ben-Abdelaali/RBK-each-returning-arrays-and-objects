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
 functions: values: accepts an object as a parameter, and
 outputs an array of the object's values
 */
 function values(object) {
   let outputArray = new Array();
   each(object, function(element, index) {
     outputArray.push(element);
   });
   return outputArray;
}

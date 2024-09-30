console.log("Normal number --> 2 (isNaN checking): ", isNaN(2));
console.log("String number -->'3'(isNaN checking): ", isNaN("3"));
console.log("Empty Array -->'[]'(isNaN checking): ", isNaN([]));
console.log("Array -->'[2,3,5]'(isNaN checking): ", isNaN([2, 3, 5]));
console.log("Empty object -->'{}'(isNaN checking): ", isNaN({}));
console.log("Object -->'{a:5, b:6}'(isNaN checking): ", isNaN({ a: 5, b: 6 }));
console.log("String letter -->'a'(isNaN checking): ", isNaN("a"));
console.log("String word -->'hey'(isNaN checking): ", isNaN("hey"));
console.log("Digit with letter -->'a4'(isNaN checking): ", isNaN("a4"));

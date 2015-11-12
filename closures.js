/**
 * # Understanding closures in javascript.
 *
 */


var a, b;

a = 0;
b = 10;

(function(b) {

    var a = 1;
    var b = b;

    console.log('In closure a = ', a);
    console.log('In closure b = ', b);

})(b)

console.log('Outside closure a = ', a);
console.log('Outside closure b = ', b);


// Another example.
// Create an array of 10 functions each
// returning the id in which they are inserted in the array.

var i, len, obj;

len = 10;
obj = [];

for (i = 0 ; i < len ; i++) {
    obj[i] = function() { return i; }
}

// Seems ok.

for (i = 0 ; i < len ; i++) {
    console.log('Array idx ' + i + ' = ' + obj[i]());
}

// But this is not.

for (a = 0 ; a < len ; a++) {
    console.log('Array idx ' + a + ' = ' + obj[a]());
}


// You need to generate functions inside a closure storing the value safely.

for (i = 0 ; i < len ; i++) {
    obj[i] = (function(i) {
        return function() { return i; }
    })(i);
}

// This is now OK.

for (a = 0 ; a < len ; a++) {
    console.log('Array idx ' + a + ' = ' + obj[a]());
}

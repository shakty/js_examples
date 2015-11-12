/**
 * # Understanding differences between objects and arrays.
 */

var myarray = []; // Creates empty array.
var myarray = new Array(10); // Creates empty array of size 10.
console.log(myarray.length); // 10.

var i, len;
i = -1, len = myarray2.length;
for ( ; ++i < len ; ) {
    console.log(myarray[i]);
}


var myobj = {};
console.log(myobj.length); // undefined.

for (var key in myobj) {
    if (myobj.hasOwnProperty(key)) {
        console.log(myobj[key]);
    }
}

// The arguments object (or array?);
function foo() {
    console.log(arguments);
    console.log(arguments.length);
}

foo(1, 2);



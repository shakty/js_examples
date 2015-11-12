/**
 * # Understanding variable scope.
 *
 * Variables have different scope.  
 *
 */


var a, b, c, d, e;

a = 10;
b = 20;

c = {};

d = 'Hello!';

function foo(a, b, c, d) {

    var sum = a + b;

    diff = a - b;
    
    c.sum = sum;
    c.diff = diff;
    c.d = d;


    a = 1;
    b = 'ah!';
    d = 'ok!';

    delete d;
    
    return c;
}


e = foo(a, b, c, d);


console.log(a); // 10
console.log(b); // 20
console.log(c); // { sum : 30, diff: -10, d: 'Hello!' }


// What about variables declared inside for-loops?


for (var i = 0 ; i < 3 ; i++) {
    console.log(i);
}

console.log(i);


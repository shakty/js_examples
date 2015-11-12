/**
 * # Understanding closures in javascript.
 *
 */


var a, b;

a = 0;
b = 10;

setTimeout(function() {
    console.log('3 seconds passed!');

    setInterval(function() {
        console.log('another 3 seconds passed!');
    }, 3000);

}, 3000);


// In general.


function foo(cb) {
    setTimeout(cb, 2000);
}

foo(function() {
    console.log('I am alive!');
});




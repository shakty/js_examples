/**
 * # Understanding the `this` reference.
 *
 */


// Global object
console.log(this);

function foo() {

    var that, func;

    // This function.
    console.log(this);
    
    bar(this);

    that = this;

    func = function() {
    
        console.log(this);


        console.log(that);
    }

    return c;
}


function bar(that) {

    // This function.
    console.log(this);

    // The invoking function.
    console.log(that);
}


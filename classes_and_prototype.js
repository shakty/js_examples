/**
 * # Understanding classes and prototype inheritance.
 *
 * Variables have different scope.
 *
 */


function Foo() {

    this.a = 1;
    this.b = 2;


    this.mymethod = function(a) {
        console.log('I will not print what you say!');
    };
}

Foo.prototype.mymethod = function(a) {
    console.log(a);
};

Foo.prototype.anotherMethod = function() {
    console.log(this.a);
};

Foo.prototype.thirdMethod = function() {
    console.log(this.b);
};


// Can be executed as it is.


Foo.prototype.mymethod(10); // 10;

Foo.prototype.anotherMethod(); // undefined;



// Create a new object.

var foo = new Foo();

console.log(foo.a); // 1;
console.log(foo.b); // 2;

// Calls the property of the object. 
console.log(foo.mymethod(100));

// Throws an error.
try {
    console.log(foo.prototype.mymethod(100));
}
catch(e) {
    console.log('It was an error: ', e);
}



var foo2 = new Foo();

foo2.anotherMethod = function() {
    console.log('I will not print this.a');
}

foo2.anotherMethod();

foo.anotherMethod();

foo2.thirdMethod.a = 10;

console.log(foo.thirdMethod.a);


function FooInherited() {
    this.c = 10;
}

FooInherited.prototype = new Foo();
FooInherited.constructor = FooInherited;



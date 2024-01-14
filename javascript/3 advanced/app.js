//**** Higher Order Functions.. ****
// Function who takes function as a parameter or return a function or both

// as a parameter
function abc(a){
    a();
}

abc(function(){
    console.log("This function passed as parameter to the Funciton 'abc'..");
})

//as a return
function abc1(){
    return function (){
        console.log("This is a function returned as a function");
    }
}

const sample = abc1()  // the sample variable store the refrence of the abc1 function
sample()  // sample can used to as function



// **** Constructor function ****
// function us 'this' inside it and while calling it we use keyword 'new'
// 'this' by default point to the window..

function abc2(){
    this.height = 12
    this.width = 19
    this.lenght = 22
}

const sample1 = new abc2()

console.log(sample1) 


function abc3(hei){
    this.height = hei
    this.width = 19
    this.lenght = 22
}

const sample2 = new abc3(50)
console.log(sample2) 


// First-Class Functions: Focuses on the ability of functions to be treated as data, allowing them to be assigned to variables, stored in data structures, and used flexibly.

// Higher-Order Functions: Focuses on functions that operate on other functions. These functions can take functions as arguments or return them, enabling powerful and flexible abstractions.


//First Class Functions..
//When the function is treated as normal values
// eg - setInterval or setTimeout
//take function as parameter ...

/* 
***NEW keyword***
it is used to create blank object for constructor function 
*/

/*
***iife - immediately invoked function expression..
used to call any function immedietely , also used to create private variable...
eg of iife function- 

(function(){
-------
})()
*/
//any variable in iife is private variable
//use privete variable
var sample3 = (function(){
    var privatevar = 12;

    return {
        getter: function(){
            console.log(privatevar);
        },
        setter: function(val){
            privatevar = val;
        }
    }
})()

/* 
here we create iife .
the variable created in this function is called as private variable..
also it return a object having two properties 
one is to print value
another is to change value
*/
sample3.getter() //12
sample3.setter(5)
sample3.getter() //5

/*
***Prototypes***

when ever we create any object , it get some properties with it called as prototypes..
eg - .lenght
*/
/*
***Prototypal Inheritance***

I borrow properties of parent also add owns some properties
*/

var human = {
    talk : "yesss",
    walk : true,
    eat : true,
    run : true
}

var child = {
     cook : true ,
     swim : true
} 

child.__proto__ = human

console.log(child.talk)


/*
***This call Apply Bind..***
- when ever we create any variable in {bracket} , it is in local scope...
- if not in bracket then it is global variable... 
*/

console.log(this);
/*
Whenever we call this in global function , while printing 'this' here. 
it will print 'window'..
*/

function sample4(){
    console.log(this)
}
sample4()
/*
Whenever we call 'this' in function scope  , while printing 'this' here. 
it will print 'window'..
*/

var sample5 = {
    one : function(){
        console.log(this);
    }
}
sample5.one();

/*
Funtion inside the object called as method. 
when ever we call 'this' inside object ,  we get 'object' as output  
it always refer to the parent object
*/

var button = document.querySelector("button");
button.addEventListener("click" , function(){
    console.log(this);
    this.style.color = "red";
})
//output
//<button id="button">hi</button>
//here this refers to to whole code present in it

 
/*
***call apply bind***
by default it is window but whenever we give input var1 , it will give object 

*/

function sample6(){
    console.log(this);
}
var var1 = {age : 24};

sample6();
sample6.call(var1);

//

function sample7(val2 , val3 , val4){
    console.log(this,val2,val3,val4);
}
var var2 = {age : 24};


sample7.call(var2,1,2,3);
//same working..
sample7.apply(var2 , [1,2,3])

//**** use of bind **** 

function sample8(){
    console.log(this);
}

var bindedfun = sample8.bind(var2);
bindedfun();



/*
**** Pure Function ****
1) They Should return same output for same input
2) it will never change / update the value of a global variable

*/
// words have no meaning in js
// keywords have some meaning in js 
// eg - for , if , var . let 

//var const let

var name1 = "Sanket";
var name2 = "Rahul" ;

console.log(name1 +" is friend of "+ name2);
//change the name2
name2 = "vaishnavi";
console.log(name1 +" is friend of "+ name2);

// here we can change the name2 value
// if we want them to fix perment then use const

const name3 = "vaishnavi";
console.log(name1 +" is friend of "+ name3);

//the reassignment of name3 will throw error
// name3 = "vaishnavi";




//concept of hoisting
// we can use variables and functions before the declaretion of them
console.log(a);
var a = 12;
//it will show undefined bcz the declaration part go on top of code but the initiation part remain same
// var a;  this part go on top , thats why it 


// -> primitive and refrences
// primitives = number , string , null , undefined , bollean
//when we try to copy it , actual value get copied
var a = 12;
var b = a;  
b++;
console.log(b)
console.log(a)
// refrences = [] , () , {}
//when we try to copy, the refrence of actual value get copied


//conditionals
//if-else  
// if(true / false){}
// else-if
//for extra if condition

if(11>12){
    console.log("11>12")
}
else if(12>11){
    console.log("12>11")
}
else{
    console.log("else")
}

//loops
//while , for
for(var i = 1 ; i <= 10 ; i++){
    console.log(i)
}

var j = 1;
while(j < 11){
    console.log(j);
    j++;
}


//function - group of instructions
function hello (a , b){
    console.log("this is function.." + (a+b))
}

hello(5,6); 


// Array
//group of values
var arr = [1,2,3,4,5]
console.log(arr)
//(5) [1, 2, 3, 4, 5]

arr.push(6)
//add element from back
console.log(arr)
//(6) [1, 2, 3, 4, 5, 6]

arr.pop()
//remove element from back
console.log(arr)
//(5) [1, 2, 3, 4, 5]

arr.unshift(0)
//add element from start
console.log(arr)
//(6) [0, 1, 2, 3, 4, 5]

arr.shift()
//remove element from start
console.log(arr)
//[1, 2, 3, 4, 5]

arr.splice(1,2)
//remove element from first index and remove 2 elements
console.log(arr)
//(3) [1, 4, 5]


//object - store the all details of specific thing.
//1) blank object - 
var o1 = { };

//2) filled object - 
var o2 = {
    age : 19,
    name : "sanket",
    email : "sanketshinde3123@gmail.com",
    phone : 1234567890,
    //above all are properties
    speciald : function(){}
    //this is not propery , this called as method.. . A function in the object
}

//to access it
console.log(o2.age)
console.log(o2.email)

//change the object properties
console.log(o2.name)
o2.name = "rahul"
console.log(o2.name)
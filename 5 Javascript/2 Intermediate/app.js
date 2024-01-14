// there are mainly two types of JS
/* 
    1 - es5(old) 
    - only var
   
   2 - es6(new) 
   - let const

   so we are using combination of both versions.

*/
//diffrence between var and let
//var is function scoped
//means it is working in all over the parent function

function abc1(){
    for(var i=0 ; i<5 ; i++)
    {
        console.log(i);
    }
    console.log("hi" +  i)  //imp - here we get value of i after increment === 5
}
abc1()

//in other lang , the variable i is not accesable outside the for loop
// but here we can access it outside for loop


//let is a bracket scoped
//it only worked in one bracket

function abc2(){
    for(let i=0 ; i<5 ; i++)
    {
        console.log(i);
    }
    // console.log("hi" +  i)  imp - here we get error
}
abc2()

/*
var add iteself to the window object.
what is window?
it is a window object.
it is set of features that browser gives us to use
js use many functions those are not present in js with the help of window object
eg - alert , prompt , console
when we create variable using var , it gets add to window object list..
its not safe for security purpose....


otherside let not add to window object..


*/

/*
Heap - memory used to store intermediate data

Execution Context - When we call any function , the imaginary box is created which is used to hold three things - 

1] all variables inside it (variables inside another function are not consider under this)
2] all function inside it 
3] Laxical Envoirnment


Laxical Envoirnment - it is a chart which tells what things this function can access or which things not
*/


//How to Copy Refrence values ?
var ref1 = [1,2,3,4,5,6]
var ref2 = [...ref1]
console.log(ref2)

/*
Truthy - almost all values
Falsy -   0 flase undefined null NaN document.all
*/
if(7){
    console.log("truthy")
}
if(NaN || 0 || document.all || false || undefined){
    console.log("not run")
}

var x;
if(x) //undefined
{
    console.log("helloooo")
}
var y=5;
if(y) //defined
{
    console.log("helloooo")
}

//switch case
switch(1){
    case 1:
        break;
    case 2:
        break;
    default:        
}


//forEach loop 
var arr1 = [4,2,3,1,8,5,6,2]

arr1.forEach(function(val){
    console.log(val + 100)
})

//forEach do not changes the arr . it just work on temporary values of arr and work on it

//forin loop
var obj1 = {
    name : "sanket",
    age : 19 ,
    city : "pune"
}

for(var key in obj1){
    console.log(key +" : "+ obj1[key])
}


//do while loop
// do {
    
// } while ();

//callback function
setTimeout(function(){
    console.log("2 second delay");
}, 2000);



//first class function
//we can store functions as value

var firstclass = function(){}
// here we store funtion like a variable

//or

function abc(i){
    i();

}
// here we take input of funtion like it is a variable
abc(function(){console.log("hiii");})



//delete object properties
var obj2 = {
    name : "sanket",
    age : 19 ,
    city : "pune"
}
console.log(obj2.name)
delete obj2.name
console.log(obj2.name) // give undefined
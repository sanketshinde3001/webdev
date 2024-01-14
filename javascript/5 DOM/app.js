// DOM - Document Object Model
/*
4 pillars of DOM
selecting of an element
changing HTML
changing CSS
Event Listener 

1)
from js we want to select html so we use-
var a = document.queryselector("h1");
var a = document.queryselector("#id");
var a = document.queryselector(".class");

2)
a.innerHTML = "text";

3)
a.style.color = "red";
we must use camelcase here
a.style.backgroundColor = "red";

4)
i change in website is detected by this and performed specified things


*/


var a = document.querySelector("h1");

a.addEventListener ("click", function(){
    a.innerHTML = "bye";
    a.style.color = "white";;
    a.style.backgroundColor = "black";
})

/* 
if html file have more than one h1 , then it will only select 1st h1 
var a = document.querySelectorAll("h1");
it will used to select all h1 at a time
and send output in the form of nodelist

so use forEach to retreive data from it

a.foreach(funtion(e){
    console.log(e);
})
*/

var b = document.querySelector("h2");
var c = document.querySelector("h3");

b.innerHTML = "<i>In Italics</i>";  //like html
c.innerText =  "<i>In Italics</i>";   // as it is print

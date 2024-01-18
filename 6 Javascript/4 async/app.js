//sync and async in js
/**
In sync the processes are run one by one means when the first process get completed then only the second one get started...
In async we perform multiple processes at a time and whose answer came first , it will show output of it
when we use following terms , we are using async fix - 

setTimeout
setIntervel
promises
fetch
axions
XMLHttpRequest

why to use async
sometimes , our output depends on the other server , so we use async so that when server respond then only it will give output
*/

// setTimeout(callback funtion,time in milisecond)

console.log("It will print instantly")
setTimeout(function(){
    console.log("It will Print after 2 second")
},2000)


// js is not asynchronus
/**
Js have mainly two stacks one is main stack and other is side stack
main stack is used to store processes that are completed and giving output
side stack used to store processes that perform behind the scene processes and once they completed their processes , they will move to main stack to give output
when main stack get empty then only the side stack checked .....
all the things like transfer processes from side stack to main stack or other such stuff are performed by the "Event LOOP"
 */
//eg
console.log("hi1");
console.log("hi2"); 
setTimeout(function(){
    console.log("hi3");
},0)
console.log("hi4");

//here we see it will print all sync statements then go to async one even if it have 0 settimeout.


/*
Promise mainly have two answers one is it either resolve or reject.
we store it in the variable.
it can be in any three state of follwing - pending , resolve or reject
when in resolve state - it will execute - 'then'
when in reject state - it will execute - 'catch'

*/


var ans = new Promise((res, rej)=>{
    var n = Math.floor(Math.random() * 10);

    if(n < 5){
        return res();
    }
    else{
        return rej();
    }
})

ans.then(function(){
    console.log("below");
})

    .catch(function (){
        console.log("above");
    })

/// chain 

/**
here all are async task
task1 task2 task3 ..

means it need to be wait to complete task one to move on to the task 2
 */

var lol = new Promise(function(res,rej){
    return res("task1 completed");
})

var lol1 = lol.then(function (data){
    console.log(data);
    return new Promise(function (res , rej){
        return res("Task2 Completed");
    })
})

var lol2 = lol1.then(function (data){
    console.log(data);
    return new Promise(function(res,rej){
        return res("Task3 Completed");
    })
})

lol2.then(function(data){
    console.log(data);
})


/*
here we see async code 
here if the answer came we need to use then..
and we see here
too much repetative then loop type structure
so if we want any alternative to it -
can use "async await"
*/

function abc(){
    fetch('https://randomuser.me/api/')
    .then(function(raw){
        return raw.json();
    })
    .then(function(data){
        console.log(data);
    });
}

abc();


//here we see we need to use then multiple time
//write async before funtion
// and write await insted of then

async function abc1(){
    let raw = await fetch('https://randomuser.me/api/');
    let info = await raw.json();  
    console.log(info);
}

abc1();

/*
concurrency - means the sync and async code both get execute at one time
parallelism - focus to try tu execute on multiple processor / cores
throttling - we control code basis of number of executions
*/
var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cblur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = (dets.x-12.5)+"px"
    crsr.style.top = (dets.y-12.5)+"px"
})
document.addEventListener("mousemove",function(dets){
    blur.style.left = (dets.x-200)+"px"
    blur.style.top = (dets.y-200)+"px"
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem)
{
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 2
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
    })
})


gsap.to("#nav" , {
    backgroundColor : "#000",
    opacity:0.9,
    duration : 0.5,
    height:"110px",
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        // markers:true
        start:"top -10%",
        end: "top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "#main",
        scroller:"body",
        // markers:true
        start:"top -25%",
        end:"top -70%",
        duration : 0.5,
        scrub : 1
    }
})

gsap.from("#about img,#aboutinfo ",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:3

    }
})
gsap.from(".cards",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:".cards",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:1

    }
})
gsap.from("#q1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#q1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:3

    }
})
gsap.from("#q2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#q1",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:3

    }
})
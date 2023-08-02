var crsr = document.querySelector("#cursor")
var crsr = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function(dets){
    crsr.style.top = dets.y+"px"
    crsr.style.left = dets.x+ 30 +"px"
    blur.style.top = dets.y - 250 + "px"
    blur.style.left = dets.x - 250 + "px"
    console.log("dattebayo!!!");
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale=2;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
    })
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale=1;
        crsr.style.border = "0px solid ##11260e";
        crsr.style.backgroundColor = "#11260e";
    })
})


gsap.to("#nav",{
    backgroundColor:"#000",
    duration:1,
    height:"80px",
    delay:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
    //    markers:true,
        start:"top -10%",
        end : "top -30%",
        scrub:1,
    }
}) 

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
       // markers:true,
        start:"top -50%",
        end : "top -100%",
        scrub:true,
    }
})

gsap.from("#About-us img,#About-us-in",{
    y:50,
    opacity:0,
    duration:1,
    //stagger:0.4,
    scrollTrigger:{
        trigger:"#About-us",
        scroller:"body",
        //markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:2,
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.3,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
       // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:2,
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
       // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:3,
    }
})
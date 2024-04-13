function navAnimation(){
    var nav = document.querySelector("nav")

nav.addEventListener("mouseenter", function(){
    let tl = gsap.timeline()
    tl.to("#nav-btm",{
        height:"21vh"
    })
    tl.to(".div2 h5",{
        display:"block"
    })
    tl.from(".div2 h5 span",{
        y:29,
        // duration:0.3,
        stagger:{
            amount:0.6,
        }
    })
})
var nav = document.querySelector("nav")

nav.addEventListener("mouseleave", function(){
    let tl = gsap.timeline()
    tl.to(".div2 h5 span",{
        y:29,
        stagger:{
            amount:0.2,
        }
    })
    tl.to(".div2 h5",{
        display:"none",
        duration:0.1,
    })
    tl.to("#nav-btm",{
        height:0,
        duration:0.1,

    })
})
}

navAnimation()
gsap.to('.home .circle ',{
    width: "150vw",
    height: "150vw",
    duration: 0.5,
    zindex:99,
    scrollTrigger: {
        trigger: ".home ",
        scroller: 'body',
        // markers: true,
        scrub: 2,
        start: "top 0%",
        end: "top -5%",
        pin: true,
    }
})

gsap.to('.work h1',{
    // backgroundColor:'black',
    transform:'translateX(-80%)',
    duration:1,
    scrollTrigger:{
        trigger:".work",
        scroller:'body',
        // markers:true,
        pin:true,
        scrub:2
    }

})

gsap.from(".skill h1, .skill-bubble .one,skill-bubble .one h1  ",{
    scale:0,
    duration:2,
    // rotate:360,
    stagger:1,
    scrollTrigger:{
        trigger:".skill",
        scroller:"body",
        // markers:true,    
        scrub:2,
        start:"top 90%"
        ,end:"top -100%"
    }
})

gsap.from(".contact h1",{
    x:'-45%',
    duration:0.5,
    stagger:1,
    scale:0,
    opacity:0,
    border:"3px solid black"
    ,borderRadius:'33px',
    scrollTrigger:{
        trigger:".contact",
        scroller:"body",
        // markers:true,
        // scrub:2
    }
})


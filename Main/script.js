
var tl = gsap.timeline();

tl.from("#page1 h1",{
     opacity:0,
     y:80,
     stagger:.2,
     duration:.2
})
.from("#line",{
    width:0,
    duration:1
})

.to("#page1",{
     top:"-100%",
     duration:2,
     ease: "power2.Out" 
 })
 .to("#page2",{
     left:"-100%",
     duration:1,
     ease: "power2.Out"
 },"-=1")

 .from("#top h1",{
     opacity:0,
     x:50,
     duration:1,
     
 })
 
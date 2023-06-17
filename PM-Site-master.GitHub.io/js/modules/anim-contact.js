// ANIM CONTACT
let controller = new ScrollMagic.Controller();

let bgWhite = new TimelineMax();

bgWhite.add([
  TweenMax.to("body", .3, {backgroundColor: "#fff", color: "black", ease: Power3.easeIn}),
  TweenMax.to(".layer", .3, {color: "black", ease: Power3.easeIn}),
])


new ScrollMagic.Scene({
        triggerElement: ".bloc-contact",
        triggerHook: ".5",
        // duration: "30%",
    })
    .setTween(bgWhite)
    .addTo(controller);

$(".bloc-contact").mousemove(function(e){
  let width = window.innerWidth;
  let height = window.innerHeight;

  let scrollHeight = document.querySelector("body").scrollHeight;

  let mouseX = e.pageX - width/2;
  let mouseY = e.pageY + height/2 - scrollHeight;

  let movingWord = new TimelineMax();

  movingWord.add([
    TweenMax.to(".black", 1, {x: 0.03*mouseX, y: 0.03*mouseY, ease: Power2.easeOut}),
    TweenMax.to(".white", 1, {x: 0.02*mouseX, y: 0.02*mouseY, ease: Power2.easeOut}),
  ]);

});

$(".bloc-contact").mouseout(function(){
  let movingWord = new TimelineMax();

  movingWord.add([
    TweenMax.to(".black", 1, {x: 0, y: 0, ease: Power4.easeOut}),
    TweenMax.to(".white", 1, {x: 0, y: 0, ease: Power4.easeOut}),
  ]);
});


// LINKS

$(".bloc-contact").click(function(){

  let nameLink = $(this).find(".name")[0].innerHTML;

  $("body").toggleClass("page-leave");
  setTimeout(function(){
     location.href = "https://leomouraire.com/" + nameLink + "/index.html";
   }, 1000);

   TweenMax.to("body", .5, {backgroundColor: "black"});

});










//

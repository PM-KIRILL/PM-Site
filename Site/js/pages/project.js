let controller = new ScrollMagic.Controller();

$(".container-screenshot").each(function(){

  let appearImg = new TimelineMax();

  appearImg.add([
    TweenMax.to($(this).find("img"), 1.5, {autoAlpha: 1, ease: Power3.easeInOut}),
    TweenMax.to($(this).find("video"), 1.5, {autoAlpha: 1, ease: Power3.easeInOut}),
  ]);

  new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 1,
  })
  .setTween(appearImg)
  .addTo(controller)

});

$(".container-text").each(function(){
  let appearText = new TimelineMax();
  appearText.add([
    TweenMax.to($(this), 1.5, {autoAlpha: 1, ease: Power3.easeInOut}),
  ]);

  new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 1,
  })
  .setTween(appearText)
  .addTo(controller)
});

let appearText = new TimelineMax();
appearText.add([
  TweenMax.to(".link-projet", 1.5, {autoAlpha: 1, ease: Power3.easeInOut}),
]);

new ScrollMagic.Scene({
  triggerElement: ".link-projet",
  triggerHook: 1,
})
.setTween(appearText)
.addTo(controller)

$(".btn-next").mousemove(function(e){
  let posX = e.clientX - $(this).offset().left;
  let posY = e.clientY + $(window).scrollTop() - $(this).offset().top;
  TweenMax.to(".container-next-apercu", .5, {autoAlpha: 1, left: posX, top: posY, ease: Power2.easeOut});
});

$(".btn-next").mouseleave(function() {
  TweenMax.to(".container-next-apercu", .2, {autoAlpha: 0, ease: Power2.easeOut});
});

$(".btn-previous").mousemove(function(e){
  let posX = e.clientX - $(this).offset().left;
  let posY = e.clientY + $(window).scrollTop() - $(this).offset().top;
  TweenMax.to(".container-previous-apercu", .5, {autoAlpha: 1, left: posX, top: posY, ease: Power2.easeOut});
});

$(".btn-previous").mouseleave(function() {
  TweenMax.to(".container-previous-apercu", .2, {autoAlpha: 0, ease: Power2.easeOut});
});


$(".link").click(function(){

  let pageLeave = new TimelineMax();

  pageLeave.add([
    TweenMax.to(".container-screenshot", .5, {autoAlpha: 0}),
    TweenMax.to(".container-text", .5, {autoAlpha: 0}),
  ]);

});

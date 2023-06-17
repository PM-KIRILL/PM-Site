$(".btn-menu").click(function(){
  $(".page-menu").toggleClass("open-menu");
  $(".navbar .menu").toggleClass("close-menu");
});


// CREATION ELEMENTS VAGYE
var page = document.getElementById("page-menu");
var waveWidth = 5;
var waveCount = Math.floor(window.innerWidth/waveWidth);
docFrag = document.createElement("div");

for(i=0; i < waveCount; i++){
  var wave = document.createElement("div");
  wave.className += "wave";
  docFrag.appendChild(wave);
  wave.style.left = i * waveWidth + "px";
}
page.appendChild(docFrag);

$(window).resize(function(){
  waveCount = Math.floor(window.innerWidth/waveWidth);
  for(i=0; i < waveCount; i++){
    var wave = document.createElement("div");
    wave.className += "wave";
    docFrag.appendChild(wave);
    wave.style.left = i * waveWidth + "px";
  }
  page.appendChild(docFrag);
});


// ANIMATION APRES CLICK SUR MENU
$(".menu-item").click(function(){

  $(".menu-item").hide();

  let wordsMenu = document.getElementsByClassName("word-menu");
  for(i=0; i < wordsMenu.length; i++){
    wordsMenu[i].innerHTML = this.innerHTML;
    wordsMenu[i].style.textTransform = "uppercase";
  }

  let waving = new TimelineMax({
     // repeat: -1
   });

  waving.add([
    TweenMax.to(".page-menu", .1, {backgroundColor: "white"}),
    TweenMax.staggerTo(".wave", .6, {top: "50%", ease: Power1.easeInOut}, .0009),
    TweenMax.staggerFromTo(".word-menu", .3, {autoAlpha:0}, {autoAlpha:1, ease: Power4.easeInOut}, .1),
    TweenMax.staggerTo(".wave", .6, {top: "40%", ease: Power1.easeInOut, delay:.6}, .0009),
    TweenMax.staggerTo(".wave", .6, {top: "60%", ease: Power1.easeInOut, delay:1.2}, .0009),
    TweenMax.staggerTo(".wave", .6, {top: "0%", ease: Power4.easeInOut, delay:1.8}, .0008),
    TweenMax.staggerFromTo(".word-menu", .3, {autoAlpha:1, y:0}, {autoAlpha:0, y:-100, ease: Power4.easeInOut, delay:1.85}, .1),
    TweenMax.to(".page-menu", .2, {backgroundColor: "black", delay:2}),
  ])

  $(".loading-menu").toggleClass("anim-on");
  // $("span").toggleClass("off");

  $("body").toggleClass("page-leave");

});

// LIENS HREF

$(".menu-item").click(function(){
  let pageLeave = new TimelineMax();

  pageLeave.add([
    TweenMax.staggerTo(".move-up", .5, {y:"100%", ease:Power2.easeInOut}, .05),
    TweenMax.to(".appear", .5, {autoAlpha: 0, ease:Power0.easeInOut}),
    TweenMax.staggerTo(".menu-item", .5, {color: "black", ease:Power2.easeInOut}, .05),
  ]);
});



//links

$(".menu-item-container").click(function(){

  var nameLinkMenu = $(this).find(".menu-item")[0].innerHTML;

  $("body").toggleClass("page-leave");
      setTimeout(function(){
      location.href = "https://leomouraire.com/" + nameLinkMenu + "/index.html";
   }, 3000);

})

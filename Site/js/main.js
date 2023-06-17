//ANIMS DE BASE

$(document).ready(function(){
  let contentAppear = new TimelineMax();

  contentAppear.add([
    TweenMax.staggerTo(".move-up", .5, {y:0, ease:Power4.easeOut}, .05),
    TweenMax.staggerTo(".move-up-slow", 1, {y:0, ease:Power4.easeOut}, .15),
    TweenMax.to(".appear", .5, {autoAlpha: 1, ease:Power0.easeInOut}),
    TweenMax.staggerTo(".appear-s", .8, {autoAlpha: 1, ease:Power0.easeInOut}, .1),
  ]);
});

$(".link").click(function(){
  let pageLeave = new TimelineMax();

  pageLeave.add([
    TweenMax.staggerTo(".move-up", .5, {y:"100%", ease:Power2.easeInOut}, .05),
    TweenMax.staggerTo(".move-up-slow", .5, {y:"100%", ease:Power2.easeInOut}, .1),
    TweenMax.to(".appear", .5, {autoAlpha: 0, ease:Power0.easeInOut}),
    TweenMax.staggerTo(".menu-item", .5, {color: "black", ease:Power2.easeInOut}, .05),
  ]);
});

//LIENS

$(".btn-brand").click(function(){
  $("body").toggleClass("page-leave");
  setTimeout(function(){
     location.href = "https://leomouraire.com";
   }, 1000);
});


//COPIED TO CLIPBOARD

$("#email").click(function() {

  if (document.selection) { // IE
      var range = document.body.createTextRange();
      range.moveToElementText(document.getElementById("email"));
      range.select();
  } else if (window.getSelection) {
      var range = document.createRange();
      range.selectNode(document.getElementById("email"));
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
  }
  document.execCommand("copy");

  if (window.getSelection) {
    window.getSelection().removeAllRanges();
  }
  else if (document.selection) {
    document.selection.empty();
  }

  var posEmailX = $("#email").offset().left;
  var posEmailY = $("#email").offset().top;
  var emailHeight = $("#email").height();
  let emailContent = document.getElementById("email").innerHTML;

  document.getElementById("email").innerHTML = "Copied to clipboard";

  setTimeout(function(){
    document.getElementById("email").innerHTML = "pm.mail.Kirill2546@gmail.com";
  }, 1200);



});

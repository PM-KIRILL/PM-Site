

$(".skip-btn").click(function(){
  setTimeout(function(){
     location.href = "https://leomouraire.com/about/index.html";
   }, 1000);
   input.value = namePost;
   $("body").toggleClass("page-leave");
   document.getElementById("progression").innerHTML = "100%";

   let pageLeave = new TimelineMax();

   pageLeave.add([
     TweenMax.staggerTo(".move-up", .5, {y:"100%", ease:Power2.easeInOut}, .05),
     TweenMax.to(".appear", .5, {autoAlpha: 0, ease:Power0.easeInOut}),
     TweenMax.staggerTo(".menu-item", .5, {color: "black", ease:Power2.easeInOut}, .05),
   ]);

});


// INPUT function
let namePost = "An Interactive Developer";
let input = document.getElementById("input");
let progression = document.getElementById("progression");
let progressionAdvices = ["Good start", "Here we go!", "Try an X", "No, I said X...", "X!!", "Ok whatever...", "Damnnnn Ur close!", "Damnnnnnnn", "Damnnnnnnnn", "Ok, I think you got it...", "You looked into my code didn't you?", "....", ".....", ".......", "........", "undefined", "defined... lol", "Get it done so we can continue...", "What are you waiting for??!", "Alright I'm bored...", "4...", "3...", "2...", "1...", "Booooooom"];

 function myFunction(){
   inputValue = document.getElementById("input").value;

   for(i=0; i < inputValue.length ; i++) {
     if( i == 0 ) {
       $("#input").val( namePost.charAt(i));
       document.getElementById("progression-advices").innerHTML = progressionAdvices[i];
     } else {
       $("#input").val( $("#input").val() + namePost.charAt(i));
       document.getElementById("progression-advices").innerHTML = progressionAdvices[i];
     }
   }

   if( inputValue.length <= namePost.length) {
     document.getElementById("progression").innerHTML = parseInt(inputValue.length/namePost.length*100) + "%";
   } else if(inputValue.length >= namePost.length ) {
     document.getElementById("progression").innerHTML = "100%";
     document.getElementById("input").disabled = true;

     setTimeout(function(){
        location.href = "https://leomouraire.com/about/index.html";
      }, 1000);

      let validAnim = new TimelineMax();

      validAnim.add(
        TweenMax.to("body", .08, {backgroundColor:"white", ease:Power0.easeInOut})
      ).add(
        TweenMax.to("body", .08, {backgroundColor:"black", ease:Power0.easeInOut})
      ).add(
        TweenMax.to("body", .08, {backgroundColor:"white", ease:Power0.easeInOut})
      ).add(
        TweenMax.to("body", .08, {backgroundColor:"black", ease:Power0.easeInOut})
      );

      let pageLeave = new TimelineMax();

      pageLeave.add([
        TweenMax.staggerTo(".move-up", .5, {y:"100%", ease:Power2.easeInOut, delay:.5}, .05),
        TweenMax.to(".appear", .5, {autoAlpha: 0, ease:Power0.easeInOut}),
        TweenMax.staggerTo(".menu-item", .5, {color: "black", ease:Power2.easeInOut}, .05),
      ]);

   }


 };





//fin

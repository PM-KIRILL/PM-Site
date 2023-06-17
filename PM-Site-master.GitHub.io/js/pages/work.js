// let controller = new ScrollMagic.Controller();

$(".page-work").mousemove(function(e){
  let mouseX = e.pageX;
  let mouseY = e.pageY;
})

  if (window.matchMedia("(min-width: 1200px)").matches) { // If media query matches
    $(".elt-work").each(function(){
      let onDisplay = new TimelineMax();
      onDisplay.add([
        TweenMax.to($(this), .5, {scale:1.2})
      ]).add([
        TweenMax.to($(this), 1, {x:"-25%"}),
        TweenMax.to($(this).find(".title-work"), 1, {autoAlpha: 1, x: "50%"}),
      ]).add([
        TweenMax.to($(this), 1, {autoAlpha:1, x:"1%", scale:1}),
        TweenMax.to($(this).find(".title-work"), 1, {autoAlpha: 0, x: "1%"}),
      ])

      new ScrollMagic.Scene({
              triggerElement: this,
              duration: "50%",
              triggerHook: ".5"
          })
          .setTween(onDisplay)
          .addTo(controller);
    });
  } else {
    $(".elt-work").each(function(){
      let onDisplay2 = new TimelineMax();
      onDisplay2.add([
        TweenMax.to($(this), .5, {scale:1.2}),
        TweenMax.to($(this).find(".title-work"), 1, {autoAlpha: 1, y: "-50%"}),
      ]).add([
        TweenMax.to($(this), 1, {autoAlpha:1, scale:1}),
        TweenMax.to($(this).find(".title-work"), 1, {autoAlpha: 0, y: "0%"}),
      ])

      new ScrollMagic.Scene({
              triggerElement: this,
              duration: "50%",
              triggerHook: ".5"
          })
          .setTween(onDisplay2)
          .addTo(controller);
    });

  }





let work = new TimelineMax();

work.add([
  TweenMax.staggerTo(".container-elt-titre", 1, {rotation:-810, left: "48%", scale: .5, ease:Power3.easeInOut}, .05),
  TweenMax.staggerTo(".titre-clone", .5, {autoAlpha:1, ease:Power3.easeInOut}, .05),
  TweenMax.staggerTo(".titre-clone", .5, {autoAlpha:0, ease:Power3.easeInOut, delay: .5}, .05),
])


new ScrollMagic.Scene({
        triggerElement: ".bloc-titre",
        triggerHook: "0",
        offset: "50%",
        duration: "50%",
    })
    .setTween(work)
    .addTo(controller);


//MOVING ON WORK SECTIONS

$(".elt-work").mousemove(function(e){

  let movingTitleWork = $(".moving-title-work");
  let title = $(this).find("h2")[0].innerHTML;
  $(this).find("span")[0].innerHTML = title;

  for (i = 0; i <= movingTitleWork.length ; i++ ) {

  }

  let mouseX = e.pageX - $(this).offset().left;
  let mouseY = e.pageY - $(this).offset().top;


  let mouseMoveProjects = new TimelineMax();

  mouseMoveProjects.add([
    TweenMax.to($(this).find(".moving-title-work"), .5, {autoAlpha: 1, top: mouseY, left: mouseX})
  ]);

});

$(".elt-work").mouseout(function(){

  let mouseOutProjects = new TimelineMax();

  mouseOutProjects.add([
    TweenMax.to($(this).find(".moving-title-work"), 1, {autoAlpha: 0, top: "50%", left: "50%"})
  ]);

});


$(".elt-work").click(function(){

  let projectName = $(this).find("h2")[0].innerHTML;

  let pageLeave = new TimelineMax();

  pageLeave.add([
    TweenMax.staggerTo(".move-up", .5, {y:"100%", ease:Power2.easeInOut}, .05),
    TweenMax.staggerTo(".move-up-slow", .5, {y:"100%", ease:Power2.easeInOut}, .1),
    TweenMax.to(".appear", .5, {autoAlpha: 0, ease:Power0.easeInOut}),
    TweenMax.staggerTo(".menu-item", .5, {color: "black", ease:Power2.easeInOut}, .05),
  ]);

  let divNumber = Math.ceil( window.innerHeight / $(".moving-title-project").height() );
  let divHeight = $(".moving-title-project").height();
  document.getElementById("moving-title-project").innerHTML = projectName;

  for(i = 0; i <= divNumber; i++) {
    let div = document.createElement("DIV");
    div.setAttribute("class", "moving-title-project");
    div.innerHTML = projectName;
    document.getElementById("anim-project").appendChild(div);
  }

  let movingTitleWork = new TimelineMax();

  movingTitleWork.add([
    TweenMax.staggerTo(".moving-title-project", .01, {autoAlpha: 1}, .04)
  ]).add([
    TweenMax.staggerTo(".moving-title-project", .1, {autoAlpha: 0}, .04)
  ]);


  //LIENS PROJETS

  console.log(projectName);

  if(projectName == "Klein Blue" ){
    setTimeout(function(){
      location.href = "https://leomouraire.com/work/klein.html";
    }, 1000);
  } else if(projectName == "Henri Mouraire") {
    setTimeout(function(){
      location.href = "https://leomouraire.com/work/henrimouraire.html";
    }, 1000);
  } else if(projectName == "Words Cascade") {
    setTimeout(function(){
      location.href = "https://leomouraire.com/work/cascade.html";
    }, 1000);
  } else if(projectName == "Otis monologue") {
    setTimeout(function(){
      location.href = "https://leomouraire.com/work/otis.html";
    }, 1000);
  } else if (projectName == "Word Reveal") {
    setTimeout(function(){
      location.href = "https://leomouraire.com/work/reveal.html";
    }, 1000);
  } else if (projectName == "Nike 3D shop") {
    setTimeout(function(){
      location.href = "https://leomouraire.com/work/nike3d.html";
    }, 1000);
  } else if (projectName == "Fanette Bullat") {
    setTimeout(function(){
      location.href = "https://leomouraire.com/work/fanettebullat.html";
    }, 1000);
  }

});

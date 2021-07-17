//p5.js start---->
// center point

let centerX = 0.0,
  centerY = 0.0;

let radius = 0.5 * Math.min(window.innerWidth, window.innerHeight);
rotAngle = -30;
let accelX = 0.0,
  accelY = 0.0;
let deltaX = 0.0,
  deltaY = 0.0;
let springing = 0.0006,
  damping = 0.92;

//corner nodes
let nodes = 4;

//zero fill arrays
let nodeStartX = [];
let nodeStartY = [];
let nodeX = [];
let nodeY = [];
let angle = [];
let frequency = [];

// soft-body dynamics
let organicConstant = 1.0;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);

  //center shape in window
  centerX = width / 2;
  centerY = height / 2;

  //initialize arrays to 0
  for (let i = 0; i < nodes; i++) {
    nodeStartX[i] = 0;
    nodeStartY[i] = 0;
    nodeY[i] = 0;
    nodeY[i] = 0;
    angle[i] = 0;
  }
  canvas.id = "canvas";
  canvas.parent(document.getElementById("hero_bg"));

  // iniitalize frequencies for corner nodes
  for (let i = 0; i < nodes; i++) {
    frequency[i] = random(5, 12);
  }

  noStroke();
  frameRate(30);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  radius = 0.5 * Math.min(window.innerWidth, window.innerHeight);
  //center shape in window
  centerX = width / 2;
  centerY = height / 2;

  //initialize arrays to 0
  for (let i = 0; i < nodes; i++) {
    nodeStartX[i] = 0;
    nodeStartY[i] = 0;
    nodeY[i] = 0;
    nodeY[i] = 0;
    angle[i] = 0;
  }

  // iniitalize frequencies for corner nodes
  for (let i = 0; i < nodes; i++) {
    frequency[i] = random(5, 12);
  }

  noStroke();
  frameRate(30);
}
function resizeCanvas(windowWidth, windowHeight) {}
function draw() {
  background("rgba(0,0,0,0.1)");

  fill(0, 100);
  rect(0, 0, width, height);
  drawShape();
  moveShape();
}

function drawShape() {
  //  calculate node  starting locations
  for (let i = 0; i < nodes; i++) {
    nodeStartX[i] = centerX + cos(radians(rotAngle)) * radius;
    nodeStartY[i] = centerY + sin(radians(rotAngle)) * radius;
    rotAngle += 360.0 / nodes;
  }

  // draw polygon
  curveTightness(organicConstant);
  fill(255);
  beginShape();
  for (let i = 0; i < nodes; i++) {
    curveVertex(nodeX[i], nodeY[i]);
  }
  for (let i = 0; i < nodes - 1; i++) {
    curveVertex(nodeX[i], nodeY[i]);
  }
  endShape(CLOSE);
}

function moveShape() {
  //move center point
  deltaX = mouseX - centerX;
  deltaY = mouseY - centerY;

  // create springing effect
  deltaX *= springing;
  deltaY *= springing;
  accelX += deltaX;
  accelY += deltaY;

  // move predator's center
  /*centerX += accelX;
  centerY += accelY;*/

  // slow down springing
  accelX *= damping;
  accelY *= damping;

  // change curve tightness
  organicConstant = 1 - (abs(accelX) + abs(accelY)) * 0.1;

  //move nodes
  for (let i = 0; i < nodes; i++) {
    nodeX[i] = nodeStartX[i] + sin(radians(angle[i])) * (accelX * 2);
    nodeY[i] = nodeStartY[i] + sin(radians(angle[i])) * (accelY * 2);
    angle[i] += frequency[i];
  }
}

/*var section__headings = document.getElementsByClassName("section__heading");*/
var controller = new ScrollMagic.Controller();


var scene_heading_services = new ScrollMagic.Scene({
  triggerElement: "#section_heading-services"
})
  .setClassToggle("#section_heading-services", "section__heading--reveal")
  .triggerHook("onEnter")
  .addTo(controller);

var scene_heading_work = new ScrollMagic.Scene({
  triggerElement: "#section_heading-work"
})
  .setClassToggle("#section_heading-work", "section__heading--reveal")
  .triggerHook("onEnter")
  .addTo(controller);

  var scene_heading_testimonials = new ScrollMagic.Scene({
    triggerElement: "#section_heading-about"
  })
    .setClassToggle("#section_heading-about", "section__heading--reveal")
    .triggerHook("onEnter")
    .addTo(controller);
var scene_heading_testimonials = new ScrollMagic.Scene({
  triggerElement: "#section_heading-testimonials"
})
  .setClassToggle("#section_heading-testimonials", "section__heading--reveal")
  .triggerHook("onEnter")
  .addTo(controller);

var scene_proj01_image = new ScrollMagic.Scene({
  triggerElement: "#project01_image"
})
  .setClassToggle("#project01_image", "project_li__image--reveal")
  .triggerHook("onEnter")
  .addTo(controller);

var scene_proj02_image = new ScrollMagic.Scene({
  triggerElement: "#project02_image"
})
  .setClassToggle("#project02_image", "project_li__image--reveal")
  .triggerHook("onEnter")
  .addTo(controller);

var scene_proj03_image = new ScrollMagic.Scene({
  triggerElement: "#project03_image"
})
  .setClassToggle("#project03_image", "project_li__image--reveal")
  .triggerHook("onEnter")
  .addTo(controller);

var scene_button_email = new ScrollMagic.Scene({
  triggerElement: "#hero__button_email",
  reverse: true
})
  .setClassToggle("#nav__button_email", "nav_icon--revealed")
  .triggerHook("onLeave")
  .addTo(controller);
/*#nav__button_email*/
/*
var scene_hero_title = new ScrollMagic.Scene({
  triggerElement: "#logotype",
  reverse: true
})
  .setClassToggle("#hero_heading", "hero_heading--hidden")
  .triggerHook("onLeave")
  .addTo(controller);
*/

  //timelines//
  /*
var tl_hero_in = new TimelineMax();

tl_hero_in.to("#your", 1, {
  textIndent: "0%"
}).to("#product", 1, {
  textIndent: "0%"
}).to("#clearer", 1, {
  textIndent: "0%"
});
*/
var tl_hero_out = new TimelineMax();
tl_hero_out.to("#word1", 1, {textIndent: "100%", autoAlpha:0},0)
.to("#word2", 1, {textIndent: "-100%", autoAlpha:0},0.1);
/*.to("#word3", 1, {textIndent: "100%", autoAlpha:0},0.2);*/


var scene_heading_leave = new ScrollMagic.Scene({
  triggerElement: "#hero_content",
  duration: '10%',
  triggerHook: 'onLeave',
  triggerOffset: 300,
  reverse: true
})
  .addTo(controller)
  .setTween(tl_hero_out);
var tl_heroBG_out = new TimelineMax();
//tl_heroBG_out.to("#hero_background",1,{css:{transform:"rotate(-30deg) translateX(-2vw) scale(0.1)", opacity:0}, scale:1, autoAlpha:0},0);
//tl_heroBG_out.to("#hero_bg",1,{scale:1},0);

var scene_heading_leave = new ScrollMagic.Scene({
  triggerElement: ".section_hero",
  duration: '100%',
  triggerHook: 'onLeave',

  reverse: true
})
  .addTo(controller)
  .setTween(tl_heroBG_out);
/*

var scene_heading_enter = new ScrollMagic.Scene({
  triggerElement: "#hero_content",

  duration: 400,
  reverse: true
})
  .addTo(controller)
  .setTween(tl_hero_in);
*/

//<----p5.js endShape

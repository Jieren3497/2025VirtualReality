let scene;
let pokeball;
let car;
let dude;
let rocket;
let sun;

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector
  pokeball = document.querySelector("#pokemonball");
  pokeball.a = 0;
  pokeball.da = 1;
  
  loop1();
})

function loop1(){
  pokeball.a += pokeball.da;
  pokeball.setAttribute("rotation",{x:pokeball.a, y:0, z:0});
  window.requestAnimationFrame(loop1);
}


window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector
  car = document.querySelector("#car");
  car.a = 0;
  car.da = -0.01;
  
  loop2();
})

function loop2(){
  car.a += car.da;
  car.setAttribute("position",{x:car.a, y:0, z:-8});
  window.requestAnimationFrame(loop2);
}


window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector
  rocket = document.querySelector("#rocket");
  rocket.a = 0;
  rocket.da = 0.05;
  
  loop3();
})


function loop3(){
  rocket.a += rocket.da;
  rocket.setAttribute("position",{x:3, y:rocket.a, z:-4});
  window.requestAnimationFrame(loop3);
}

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector
  dude = document.querySelector("#dude");
  dude.a = 0;
  dude.da = 0.01;
  
  loop4();
})


function loop4(){
  dude.a += dude.da;
  dude.setAttribute("scale",{x:dude.a, y:dude.a, z:dude.a});
  window.requestAnimationFrame(loop4);
}

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector
  sun = document.querySelector("#sun");
  sun.a = 0;
  sun.da = 0.001;
  
  loop5();
})


function loop5(){
  sun.a += sun.da;
  sun.setAttribute("opacity", sun.a);
  window.requestAnimationFrame(loop5);
}

let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
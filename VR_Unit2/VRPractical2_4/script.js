let rnd = (l,u) => Math.floor(Math.random()*(u-l) + l);
let scene;
let rockets = [ ];
let ufos = [ ];

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); 

  for(let i = 0; i < 40; i++){
    let tree = new Tree(rnd(-20,20), 0 , rnd(-30,30));
    tree.scale(rnd(1,4));
  }

  for(let i = 0; i < 100; i++){
    let x = rnd(-30,30);
    let z = rnd(-30,30);
    let r = new Rocket(x, 0.5 , z);
    rockets.push(r);
  }
  for(let i = 0; i < 40; i++){
    let x = rnd(-30,30);
    let z = rnd(-30,30);
    let u = new Ufo(x, 100 , z);
    ufos.push(u);
  }
  loop();
})

function loop(){
  for(let r of rockets){
    r.fly();
  }

  for(let u of ufos){
    u.invade();
  }
  
  window.requestAnimationFrame( loop );
}

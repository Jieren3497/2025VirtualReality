let target;

window.addEventListener("DOMContentLoaded",function() {
  target = document.querySelector("#target");
  target.a = 0;
  target.da = -1;

  loop();
})

function loop(){
  target.a += target.da;

  if(target.a < 90){
    target.da = -target.da;
  }

  target.setAttribute("rotation",{x:target.a, y:0, z: 0});
  target.object3D.position.y = 0.5;
  window.requestAnimationFrame( loop );
}
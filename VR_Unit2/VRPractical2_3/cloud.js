class Cloud{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let ball1 = document.createElement("a-sphere");
    ball1.setAttribute("color","grey");
    ball1.setAttribute("position","0 2 -5");
    ball1.setAttribute("radius","1.2");
    this.obj.append( ball1 );

    let ball2 = document.createElement("a-sphere");
    ball2.setAttribute("color","grey");
    ball2.setAttribute("position","1 2 -5");
    this.obj.append( ball2 );

    let ball3 = document.createElement("a-sphere");
    ball3.setAttribute("color","grey");
    ball3.setAttribute("position","-1 2 -5");
    this.obj.append( ball3 );
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj );
  }
}
class House{
  constructor(x,y,z){
    this.obj = document.createElement("a-entity");
  
    let side1 = document.createElement("a-box");
    side1.setAttribute("depth", "0.1");
    side1.setAttribute("width", "5");
    side1.setAttribute("height", "3");
    side1.setAttribute("position", "0 1 0");
    side1.setAttribute("color", "red");
    this.obj.append( side1 );

    let side2 = document.createElement("a-box");
    side2.setAttribute("depth", "0.1");
    side2.setAttribute("width", "5");
    side2.setAttribute("height", "3");
    side2.setAttribute("position", "2.5 1 -2.5");
    side2.setAttribute("rotation", "0 90 0");
    side2.setAttribute("color", "red");
    this.obj.append( side2 );

    let side3 = document.createElement("a-box");
    side3.setAttribute("depth", "0.1");
    side3.setAttribute("width", "5");
    side3.setAttribute("height", "3");
    side3.setAttribute("position", "-2.5 1 -2.5");
    side3.setAttribute("rotation", "0 90 0");
    side3.setAttribute("color", "red");
    this.obj.append( side3 );

    let side4 = document.createElement("a-box");
    side4.setAttribute("depth", "0.1");
    side4.setAttribute("width", "5");
    side4.setAttribute("height", "3");
    side4.setAttribute("position", "0 1 -5");
    side4.setAttribute("color", "red");
    this.obj.append( side4 );

    let roof = document.createElement("a-cylinder");
    roof.setAttribute("segments-radial", "3");
    roof.setAttribute("position", "0 3 -2.5");
    roof.setAttribute("height", "5");
    roof.setAttribute("rotation", "-90 0 0");
    roof.setAttribute("scale", "3 1 1");
    roof.setAttribute("color", "#5C4033");
    this.obj.append( roof );
  
    this.obj.setAttribute("position",{x:x, y:y, z:z});
    scene.append( this.obj )
  }
}
class Rocket{
    constructor(x, y, z){
    this.x = x;
    this.z = z;

    this.y = y;
    this.dy = rnd(1,10) / 100;
    
    this.obj = document.createElement("a-entity");
    
    let body = document.createElement("a-cylinder");
    body.setAttribute("position", {x:0, y:1, z:0});
    body.setAttribute("radius", 0.69);
    body.setAttribute("color", "black");
    body.setAttribute("height", 1.5);
    this.obj.append(body);

    let head = document.createElement("a-cone");
    head.setAttribute("position", {x:0, y:2.1, z:0});
    head.setAttribute("color", "black");
    head.setAttribute("scale", {x:0.7, y:0.7, z:0.7});
    this.obj.append(head);

    let window = document.createElement("a-sphere");
    window.setAttribute("position", {x:0, y:1.4, z:0.45})
    window.setAttribute("radius", 0.3);
    window.setAttribute("color", "grey");
    this.obj.append(window);

    let leg1 = document.createElement("a-cylinder");
    leg1.setAttribute("segments-radial", 3);
    leg1.setAttribute("height", 0.1);
    leg1.setAttribute("scale", "1 1 0.5");
    leg1.setAttribute("rotation", {x:0, y:90, z:90});
    leg1.setAttribute("position", {x:0.7, y:0.5, z:0});
    this.obj.append(leg1);

    let leg2 = document.createElement("a-cylinder");
    leg2.setAttribute("segments-radial", 3);
    leg2.setAttribute("height", 0.1);
    leg2.setAttribute("scale", "1 1 0.5");
    leg2.setAttribute("rotation", {x:0, y:-90, z:90});
    leg2.setAttribute("position", {x:-0.7, y:0.5, z:0});
    this.obj.append(leg2);

    let leg3 = document.createElement("a-cylinder");
    leg3.setAttribute("segments-radial", 3);
    leg3.setAttribute("height", 0.1);
    leg3.setAttribute("scale", "1 1 0.5");
    leg3.setAttribute("rotation", {x:0, y:-180, z:90});
    leg3.setAttribute("position", {x:0, y:0.5, z:-0.7});
    this.obj.append(leg3);

    let leg4 = document.createElement("a-cylinder");
    leg4.setAttribute("segments-radial", 3);
    leg4.setAttribute("height", 0.1);
    leg4.setAttribute("scale", "1 1 0.5");
    leg4.setAttribute("rotation", {x:0, y:0, z:90});
    leg4.setAttribute("position", {x:0, y:0.5, z:0.6});
    this.obj.append(leg4);

    let fire = document.createElement("a-cone");
    fire.setAttribute("position", {x:0, y:0, z:0});
    fire.setAttribute("color", "red");
    fire.setAttribute("rotation", {x:180, y:0, z:0});
    fire.setAttribute("scale", {x:0.3, y:2, z:0.3});
    this.obj.append(fire);

    this.obj.setAttribute("position",{x:x,y:y,z:z});
    scene.append(this.obj);
    }
    fly(){
    this.y += this.dy;
    this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
    }
}
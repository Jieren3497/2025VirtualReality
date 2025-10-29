class Ufo{
    constructor(x,y,z){
        this.x = x;
        this.z = z;

        this.y = y;
        this.dy = rnd(5,10) / 100;

        this.obj = document.createElement("a-entity");

        let body = document.createElement("a-sphere");
        body.setAttribute("scale", "2 0.5 2");
        body.setAttribute("color", "black");
        body.setAttribute("position", {x:0, y:1, z:0});
        this.obj.append(body);

        let head = document.createElement("a-sphere");
        head.setAttribute("position", {x:0, y:1.3, z:0});
        head.setAttribute("radius", 1);
        head.setAttribute("rotation", {x:-90, y:0, z:0});
        head.setAttribute("side", "double");
        head.setAttribute("phi-start", "0");
        head.setAttribute("phi-length", "180");
        this.obj.append(head);

        let stomach = document. createElement("a-cylinder");
        stomach.setAttribute("position", {x:0, y:0.546, z:0});
        stomach.setAttribute("radius", 0.75);
        stomach.setAttribute("height", 0.1);
        this.obj.append(stomach);

        this.obj.setAttribute("position",{x:x,y:y,z:z});
        scene.append(this.obj);
    }
    invade(){
        if(this.y > 0.2){
            this.y -= this.dy;
        }
        if(this.y <= 0.2){
            this.y += 0;
        }
        this.obj.setAttribute("position",{x:this.x, y:this.y, z:this.z});
    }
}
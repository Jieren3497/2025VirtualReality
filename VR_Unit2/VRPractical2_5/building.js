class Wall{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;

        this.obj = document.createElement("a-entity");
        let castlewall1 = document.createElement("a-box");
        castlewall1.setAttribute("depth", 2);
        castlewall1.setAttribute("height", 5);
        this.obj.append(castlewall1);

        this.obj.setAttribute("position",{x:x,y:y,z:z});
        scene.append(this.obj);
    }
}
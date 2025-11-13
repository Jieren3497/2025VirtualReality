class mechawarior{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.obj = mecaTemplate.cloneNode(true);
        scene.append(this.obj);
    }
}
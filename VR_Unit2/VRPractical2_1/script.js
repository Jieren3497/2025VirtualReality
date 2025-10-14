let scene;

function rnd(l, u){
  return Math.floor(Math.random()*(u-l) + l);
}

window.addEventListener("DOMContentLoaded",function() {
  scene = document.querySelector("a-scene"); //CSS Selector

  for(let i = 0; i < 100; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    createCloud(x,10,z);
  }
   //Task 2: Use the createCloud(...)  to add several clouds to the scene at various positions.
  
   //Task 4: Use the createHouse(...)  to add several houses to the scene at various positions.
   for(let i = 0; i <= 5; i++){
    let x = rnd(-20,20);
    let z = rnd(-20,20);
    createHouse(x,0,z);
  }
})

/* Task 1: Create a function createCloud that,
      1) Accept an x, y and z position for where to place the cloud "entity"
      2) Create an entity to store all the components that will make up the cloud
      3) Create three sphere, or some other appropriate component that can slightly overlap.         
      4) Adjust the attributes appropriately.  Add each sphere to the cloud entity
      5) Set cloud entities position to those passed in to the function.
      6) Add the cloud entity to the scene
*/
  function createCloud(x,y,z){
    let clouds = document.createElement("a-entity");

    let cloud1 = document.createElement("a-sphere");
    cloud1.setAttribute("color", "grey");
    cloud1.setAttribute("position", "0 2 -5");
    cloud1.setAttribute("radius", "1.2");
    clouds.append( cloud1 );
    
    let cloud2 = document.createElement("a-sphere");
    cloud2.setAttribute("color", "grey");
    cloud2.setAttribute("position", "1 2 -5");
    clouds.append( cloud2 );

    let cloud3 = document.createElement("a-sphere");
    cloud3.setAttribute("color", "grey");
    cloud3.setAttribute("position", "-1 2 -5");
    clouds.append( cloud3 );
    
    clouds.setAttribute("position",{x:x, y:y, z:z});
    scene.append( clouds );
  }

/* Task 3: Create a function createHouse that,
      1) Accept an x and z position for where to place the house "entity"
      2) Create an entity to store all the components that will make up the house
      3) Create box for the base of the house.  Add base to the entity.
      4) Create triangular prism from a cylinder for the roof.  Add the roof to the entity.
      5) Adjust the attributes appropriately.
      5) Set house entities position to those passed in to the function.
      6) Add the house entity to the scene
*/
  function createHouse(x,y,z){
    let house = document.createElement("a-entity");

    let wall1 = document.createElement("a-box");
    wall1.setAttribute("depth", "0.1");
    wall1.setAttribute("width", "5");
    wall1.setAttribute("height", "3");
    wall1.setAttribute("position", "0 1 0");
    wall1.setAttribute("color", "red");
    house.append( wall1 );

    let wall2 = document.createElement("a-box");
    wall2.setAttribute("depth", "0.1");
    wall2.setAttribute("width", "5");
    wall2.setAttribute("height", "3");
    wall2.setAttribute("position", "2.5 1 -2.5");
    wall2.setAttribute("rotation", "0 90 0");
    wall2.setAttribute("color", "red");
    house.append( wall2 );

    let wall3 = document.createElement("a-box");
    wall3.setAttribute("depth", "0.1");
    wall3.setAttribute("width", "5");
    wall3.setAttribute("height", "3");
    wall3.setAttribute("position", "-2.5 1 -2.5");
    wall3.setAttribute("rotation", "0 90 0");
    wall3.setAttribute("color", "red");
    house.append( wall3 );

    let wall4 = document.createElement("a-box");
    wall4.setAttribute("depth", "0.1");
    wall4.setAttribute("width", "5");
    wall4.setAttribute("height", "3");
    wall4.setAttribute("position", "0 1 -5");
    wall4.setAttribute("color", "red");
    house.append( wall4 );

    let roof = document.createElement("a-cylinder");
    roof.setAttribute("segments-radial", "3");
    roof.setAttribute("position", "0 3 -2.5");
    roof.setAttribute("height", "5");
    roof.setAttribute("rotation", "-90 0 0");
    roof.setAttribute("scale", "3 1 1");
    roof.setAttribute("color", "#5C4033");
    house.append( roof );

    let base = document.createElement("a-plane");
    base.setAttribute("rotation", "-90 0 0");
    base.setAttribute("color", "orange");
    base.setAttribute("height", "5");
    base.setAttribute("width", "5");
    base.setAttribute("position", "0 0.01 -2.5");
    house.append( base );

    house.setAttribute("position",{x:x, y:y, z:z});
    scene.append( house );
  }
// function createTree(x, y, z){
//   let tree = document.createElement("a-entity");
  
//   let pines = document.createElement("a-cone");
//   pines.setAttribute("color","green");
//   pines.setAttribute("position","0 2 0");
//   pines.setAttribute("height","2");
//   tree.append( pines );

//   let stump = document.createElement("a-cylinder");
//   stump.setAttribute("position","0 1 0");
//   stump.setAttribute("color","brown");
//   stump.setAttribute("radius","0.25");
//   tree.append( stump );

//   tree.setAttribute("position",{x:x, y:y, z:z});
//   scene.append( tree )
// }




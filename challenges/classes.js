// 1. Copy and paste your prototype in here and refactor into class syntax.

//const CuboidMaker = function(object){
//  this.length = object.length;
//  this.width = object.width;
//  this.height = object.height;
//}
//
//CuboidMaker.prototype.volume = function(){
//  return this.length * this.width * this.height;
//}
//
//CuboidMaker.prototype.surfaceArea = function(){
//  return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
//}

class RefactoredCuboidMaker {
  constructor(object){
  this.length = object.length;
  this.width = object.width;
  this.height = object.height;
  }
  surfaceArea(){
      return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
  volume(){
    return this.length * this.width * this.height;
  }
}

const refactoredCuboid = new RefactoredCuboidMaker({
  length: 4, 
  width: 5, 
  height: 5
})

// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(refactoredCuboid.volume()); // 100
 console.log(refactoredCuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends RefactoredCuboidMaker {
  constructor(object){
    super(object);
    this.length = object.edge;
    this.width = object.edge;
    this.height = object.edge;
    this.edge = object.edge;
  }
  spaceDiagonal(){
    return Math.sqrt((this.length*this.length)+(this.width*this.width)+(this.height*this.height));
  }
  surfaceArea(){
    return 6*Math.pow(this.edge,2);
  }
  volume(){
    return Math.pow(this.edge,3);
  }
}

/*In geometry a space diagonal (also interior diagonal or body diagonal) of a polyhedron is a line connecting two vertices that are not on the same face. Space diagonals contrast with face diagonals, which connect vertices on the same face (but not on the same edge) as each other.*/

const cube = new CubeMaker({
  edge: 4
})
console.log(cube.spaceDiagonal());
console.log(cube.surfaceArea());
console.log(cube.volume());
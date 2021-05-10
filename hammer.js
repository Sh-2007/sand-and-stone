class Hammer{
constructor(){
var option = {
'isStatic' : false,
'density' : 2,
'restitution' : 0.5,
'friction' : 1.0,
}
this.body = Bodies.rectangle(350,380,150,35,option);
World.add(world,this.body);

}
display(){
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    rectMode(CENTER);
    fill("orange");
    stroke("white");
    strokeWeight("3");
    rect(this.body.position.x,this.body.position.y,150,35);
    
}

}
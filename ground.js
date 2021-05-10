class Ground{
    constructor(){
    var option = {
    'isStatic' : true,
    'density' : 2,
    'restitution' : 0.5,
    'friction' : 1.0,
    }
    this.body = Bodies.rectangle(400,500,800,20,option);
    World.add(world,this.body);
    
    }
    display(){
        rectMode(CENTER);
        fill("brown");
        stroke("white");
        strokeWeight("3");
        rect(this.body.position.x,this.body.position.y,800,20);
        
    }
    
    }
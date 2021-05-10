class Stone{
    constructor(){
    var option = {
    'isStatic' : false,
    'density' : 2,
    'restitution' : 0.5,
    'friction' : 1.0,
    }
    this.body = Bodies.rectangle(200,200,50,50,option);
    World.add(world,this.body);
    
    }
    display(){
        rectMode(CENTER);
        fill("brown");
        stroke("white");
        strokeWeight("3");
        rect(this.body.position.x,this.body.position.y,50,50);
        
    }
    
    }
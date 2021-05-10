class Iron{
    constructor(){
    var option = {
    'isStatic' : false,
    'density' : 2,
    'restitution' : 0.5,
    'friction' : 1.0,
    }
    this.body = Bodies.rectangle(300,290,100,30,option);
    World.add(world,this.body);
    
    }
    display(){
        rectMode(CENTER);
        fill("grey");
        stroke("white");
        strokeWeight("3");
        rect(this.body.position.x,this.body.position.y,100,30);
        
    }
    
    }
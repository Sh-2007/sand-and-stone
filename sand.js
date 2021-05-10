class Sand{
    constructor(){
    var option = {
    'isStatic' : false,
    'density' : 2,
    'restitution' : 0.5,
    'friction' : 1.0,
    }
    this.body = Bodies.circle(600,400,10,option);
    World.add(world,this.body);
    
    }
    display(){
        ellipseMode(RADIUS);
        fill("yellow");
        stroke("white");
        strokeWeight("3");
        ellipse(this.body.position.x,this.body.position.y,10);
        
    }
    
    }
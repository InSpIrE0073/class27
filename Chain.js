class Chain {
    constructor(Body1,Body2){
        var options={
            bodyA:Body1,
            bodyB:Body2,
            length:10,
            stiffness:0.04,
             
        }
        this.chain= Constraint.create(options)
        World.add(world,this.chain);
    }
    display(){
        var point1=this.chain.bodyA.position;
        var point2= this.chain.bodyB.position
        strokeWeight(5);
        line(point1.x,point1.y,point2.x,point2.y)
    }
}
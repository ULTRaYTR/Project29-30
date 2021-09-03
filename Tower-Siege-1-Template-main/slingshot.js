class Slingshot{
constructor(body,point){
var options={
    bodyA:body,
    pointB:point,
    stiffness:0.05,
    length:10
}
    this.sling=Matter.Constraint.create(options)    
    this.pointB=point
    World.add(world, this.sling)
}
attach(polygon) {
    this.sling.bodyA=polygon
}
display(){
    strokeWeight(2)
    if(this.sling.bodyA){
    var posA=this.sling.bodyA.position
    var posB = this.pointB
    line(posA.x,posA.y,posB.x,posB.y)
    }
}

breakk(){

this.sling.bodyA=null
}

}
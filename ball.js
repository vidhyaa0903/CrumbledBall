class Ball{
    constructor() {
        var options = {
            restitution:0.3,
            friction:0.5,
            density:1.2     
        }
        this.body = Bodies.circle(100,100,10,options);
        World.add(world, this.body);
      }
      keyPressed(){
        if(keyCode === UP_ARROW){
           Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
           console.log("the ball is shot");
           }
         }

     
      display(){
        var pos =this.body.position;
        push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			strokeWeight(3);
			fill(255,0,255)
			ellipse(0,0,30, 30);
			pop()
        
        
     }
}
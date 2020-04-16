function Ball(x,y,width,height) {
    var options = {
        restitution:1,
        frictionAir:0.002,
        friction:0.5,
        density:20
    }
    this.body =  Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
    this.image = loadImage("assets/images.png");

    this.display = function () {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,80,80);
        pop();
    }
}
class Tank {
    constructor(x,y){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,0,0,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = atan2(mouseY - pos.y, mouseX - pos.x + 300)
        push();
        rectMode(CENTER);
        push();
        translate(pos.x,pos.y);
        fill("red")
        rotate(angle);
        rect(0,0,130,20);
        pop();
        fill(20,100,30)
        rect(pos.x,pos.y+40,50,80,120);
        fill(80,90,150);
        rect(pos.x,pos.y+70,120,40,20);
        fill(20,30,40)
        rect(pos.x,pos.y+80,100,20,20);
        rect(pos.x,pos.y+60,100,20,20,);
        push();
        fill("cyan")
        translate(pos.x,pos.y);
        rotate(angle);
        rect(0,0,110,40);
        pop();
        push();
        fill("yellow");
        translate(pos.x,pos.y-20);
        rotate(angle);
        rect(0,0,80,30);
        pop();
        pop();
    }
}
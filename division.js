class Division{
    constructor(x,y){
        var options ={
            isStatic: true 
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        
        rect(this.body.position.x,this.body.position.y,10,350);
        rectMode(CENTER);
   }
};
class Bird extends Baseclass{
    constructor(x,y){
        super(x,y,50,50);    
        this.image = loadImage("sprites/bird.png");   
        this.smokeI = loadImage("sprites/smoke.png");
        this.trajectory = [];

                                                                                                                                              
    }
        display(){
            var pos = this.Body.position;
            //pos.x = mouseX;
            //pos.y = mouseY;
            super.display();

            if(this.Body.velocity.x > 10 && this.Body.position.x > 200){
            var position = [this.Body.position.x,this.Body.position.y];
            this.trajectory.push(position);
            }
            for(var i = 0; i < this.trajectory.length; i++){
                image(this.smokeI,this.trajectory[i][0],this.trajectory[i][1]);       
            }
          
        }

}
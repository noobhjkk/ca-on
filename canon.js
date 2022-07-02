    class Canon{
        constructor(x,y,width,height,angle){
            this.x=x;
            this.y=y;
            this.width=width;
            this.heigth=height;
            this.angle=angle;
            this.canonImg=loadImage("./assets/canon.png");
            this.canonbase=loadImage("./assets/canonBase.png");
            
        }
        display() {
            //entrando a display canon dx
            //console.log("entrando a display canon");
            push();
            translate(this.x, this.y);
            rotate(this.angle);
            imageMode(CENTER);
            image(this.canonImg, 0, 0, this.width, this.height);
            pop();
            image(this.canonbase,70, 20, 200, 200);
            noFill();
          }
    }

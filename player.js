function Player() {
    this.w = 15;
    this.h = 80;
    this.pos = createVector(this.w*2, height/2-this.h/2);
    this.acc = createVector(0, 0);
    this.spd = 5;
    this.maxSpd = 10;
    
//Tegner spillerens firkant figur
this.show = function() {
        noStroke();
        fill(255);
        rect(this.pos.x, this.pos.y, this.w, this.h)
    }
this.update = function() {
        this.acc.y = constrain(this.acc.y, -this.maxSpd, this.maxSpd);
        this.pos.add(this.acc);
        this.pos.y = constrain(this.pos.y, 0, height-this.h);
    }

//Funktionen der bruges når man trykker pil op
this.up = function() {
        this.acc.y-=this.spd;
                        }

//Funktionen der bruges når man trykker pil ned
this.down = function() {
        this.acc.y=this.spd;
    }

//Funktionen der bruges til at stoppe når man ikke trykker på pilene
this.stp = function() {
        this.acc.y = 0;
    }
function keyPressed(){
    if(key == 'w' || keyCode==UP_ARROW){
        player.up();
    } else if(key == 'S' || keyCode==DOWN_ARROW){
        player.down();
    }
}

function keyReleased(){
    if((key == 'W' || keyCode==UP_ARROW) ||(key=='S' || keyCode==DOWN_ARROW)){
        player.stp();
    }
}
    

}
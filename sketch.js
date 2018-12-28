var ball, player, ai ;

var playerScore = 0;
var AIScore = 0;

var dots = [];
var dSize = 10;
var txtSize = 30;

function setup() {
    createCanvas(800, 500);
    
    ball = new Ball();
    player = new Player();
    ai = new AI();
    
    for(let y = dSize/2; y<height; y+=dSize*2){
        dots.push(createVector(width/2-dSize/2, y));
        
    }
}
//Tegne funktionen
function draw() {
    background(0);
    
    ball.update();
    ball.show();
    ai.show();
    ai.update();
    player.show();
    player.update();
    ball.edges();
    ball.scores();
    
    drawScores();
    
    
    noStroke();
    fill(255);
    drawSquares();
}

function drawScores(){
    let x1 = width/4;
    let x2 = width*3/4;
    let y = txtSize*1.5;
    
    noStroke();
    fill(255);
    textAlign(CENTER);
    textSize(txtSize);
    text(playerScore, x1, y);
    text(AIScore, x2, y);
    
}

function drawSquares() {
    for(let i = 0; i<dots.length; i++){
        let x = dots[i].x;
        let y = dots[i].y;
        
        rect(x, y, dSize, dSize);
    }
    
}
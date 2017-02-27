var self_x, self_y;
var self_w, self_h;
var self_step;
var self_climb;

var ball_x, ball_y;
var ball_r;
var ball_x_step, ball_y_step;

var ball1_x, ball1_y;

var lives;
var Idied;
var fail;
var TryAgain;
var OOB;
var show1;
var points;
var show2;

function setup() {
  createCanvas(300, 300);
  lives = 3;
  self_h = 15;
  self_w = 15;
  self_x = width / 2;
  self_y = height/2;
  self_step = 0;
  self_climb= 0;
  ball_r = 13;
    
  Idied = 0;
  fail = "GAME OVER";
  TryAgain = "Reload Page to Try Again"
  show1 = "Lives:"
  show2 = "Frames Survived:"
  reset();
}

function draw() {
  background(196);
  stroke(0);
  fill(0);
  textSize(20);
  text(show1, 0,25);
  text(show2, 0, 50);
  text(frameCount, 160, 50)
  text(lives, 55,25);

  // move self
  //paddle_x += (mouseX - paddle_x) * .1;
  self_x = mouseX;
  self_y = mouseY;

  // is the ball hitting the right or left wall?
  if (ball_x - ball_r < 0 || ball_x + ball_r > width) {
    ball_x_step = -ball_x_step;
  }

  // hitting the top or bottom?
  if (ball_y - ball_r < 0 || ball_y + ball_r >= height) {
    ball_y_step = -ball_y_step;
  }
  
  //hitting you?
  if (self_x > ball_x - ball_r && self_y > ball_y - ball_r && self_x < ball_x + ball_r && self_y < ball_y + ball_r && Idied == 0){
      lives = lives - 1;
      Idied = 1;
  }
  //not hitting you?
  if ((self_x < ball_x - ball_r * 2 || self_y < ball_y - ball_r * 2 || self_x > ball_x + ball_r * 2 || self_y > ball_y + ball_r * 2) && Idied == 1){
      Idied = 0;
  }
    
  if (frameCount > 300 && frameCount < 600 && ball_y + 15 < 250 && ball_x + 15 < 250){
      createCanvas(250,250);
      background(196);
      stroke(0);
      fill(0);
      textSize(20);
      text(show1, 0,25);
      text(show2, 0, 50);
      text(frameCount, 160, 50)
      text(lives, 55,25);
  }
    
  if (frameCount > 600 && frameCount < 900 && ball_y + 15 < 200 && ball_x + 15 < 200){
      createCanvas(200,200);
      background(196);
      stroke(0);
      fill(0);
      textSize(20);
      text(show2, 0, 50);
      text(frameCount, 160, 50)
      text(show1, 0,25);
      text(lives, 55,25);
  }
    
  if (frameCount > 900 && frameCount < 1200 && ball_y + 15 < 150 && ball_x + 15 < 150){
      createCanvas(150,150);
      background(196);
      stroke(0);
      fill(0);
      textSize(20);
      text(show2, 0, 50);
      text(frameCount, 160, 50)
      text(show1, 0,25);
      text(lives, 55,25);
  }
    
  if (frameCount > 1200 && frameCount < 1500 && ball_y + 15 < 100 && ball_x + 15 < 100){
      createCanvas(100,100);
      background(196);
      stroke(0);
      fill(0);
      textSize(20);
      text(show2, 0, 50);
      text(frameCount, 160, 50)
      text(show1, 0,25);
      text(lives, 55,25);
  }
    
    if (frameCount > 1500 && frameCount < 1800 && ball_y + 15 < 150 && ball_x + 15 < 150){
      createCanvas(150,150);
      background(196);
      stroke(0);
      fill(0);
      textSize(20);
      text(show2, 0, 50);
      text(frameCount, 160, 50)
      text(show1, 0,25);
      text(lives, 55,25);
    }

  if (frameCount > 1800 && frameCount < 2100 && ball_y > 100 && ball_x > 100){
      ball_r = 100;
      createCanvas(600,600);
      background(196);
      stroke(0);
      fill(0);
      textSize(20);
      text(show1, 0,25);
      text(show2, 0, 50);
      text(frameCount, 160, 50);
      text(lives, 55,25);
      fill(255,0,0);
      ellipse(ball_x, ball_y, ball_r, ball_r);
  }
    
    if (frameCount > 2100 && frameCount < 2400 && ball_y > 150 && ball_x > 150){
      ball_r = 150;
      createCanvas(600,600);
      background(196);
      stroke(0);
      fill(0);
      textSize(20);
      text(show1, 0,25);
      text(show2, 0, 50);
      text(frameCount, 160, 50);
      text(lives, 55,25);
      fill(255,0,0);
      ellipse(ball_x, ball_y, ball_r, ball_r);
  }
    
  if (lives <= 0){
      ball_r = 13;
      createCanvas(600,300);
      background(0);
      stroke(255);
      fill(255,0,0);
      textSize(95)
      text(fail, 1,150);
      textSize(20);
      text(TryAgain, 300,200);
      ball_x = 345;
      ball_y = 115;
      ball_x_step = 0;
      ball_y_step = 0;
  }
    
  // move ball by ball_x_step and ball_y_step
  ball_x = ball_x + ball_x_step;
  ball_y = ball_y + ball_y_step;

  //draw ball
  noStroke();
  fill(255, 0, 0);
  ellipse(ball_x, ball_y, ball_r * 2, ball_r * 2);

  // draw paddle
  stroke(24);
  fill(0,0,255);
  rect(self_x, self_y, self_w, self_h);
}

function reset() {
  ball_x = random(ball_r, width - ball_r);
  ball_y = random(ball_r, height / 2);
  ball_x_step = random(-3, 3);
  ball_y_step = random(1, 3);
}

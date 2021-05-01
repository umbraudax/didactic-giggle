INIT WHEN SCN START
if($this.scene.state() == "PLAY"){
    var nrock = clone(rocks);
    nrock.x(random(800));
    nrock.y(random(600));
}



ROCKS Update Every Frame
var bullet = $this.scene.projectile;
moveX($this);
moveY($this);
$this.spin($this.rot);
if (bullet && $this.isTouching(bullet) ){
    score.text(parseInt (score.text ()) +10);
    $this.scaleX($this.scaleX () /2);
    $this.scaleY($this.scaleY () /2);
    if($this.scaleX ()>=0.125) {
        var nrock = clone($this);
    } else {
        $this.remove
    }
    $this.scene.projectile = null;
    bullet.remove();
}
if($this.y()>600){
    $this.y(0);
}
if($this.y()<0){
    $this.y(600);
}
if($this.x()>800){
    $this.x(0);
}
if($this.x()<0){
    $this.x(800);
}

ROCKS INIT WHEN SCENE STARTS
if($this.scene.state() == "PLAY"){
    $this.speedX(random(50,-50));
    $this.speedY(random(50,-50));
    $this.rot = random(30,-30);
    $this.frameIndex(Math.round(random(2)));
}

ROCKET UPDATE EVERY FRAME 

var leftPressed = isKeyPressed(Keys.leftArrow);
var rightPressed = isKeyPressed(Keys.rightArrow);
var upPressed = isKeyPressed(Keys.upArrow);
if(upPressed) { 
    $this.moveFowardByRotation();
}
if(leftPressed){
    $this.spin(-40);
}
if(rightPressed){
    $this.spin(40);
}
if($this.y()>600){
    $this.y(0);
}
if($this.y()<0){
    $this.y(600);
}
if($this.x()>800){
  $this.x(0);  
}
if($this.x()<0){
   $this.x(800);
}
var spacePressed = isKeyPressed(Keys.space);
var bullet = $this.findName("bullet");
if(spacePressed) {
    if(!$this.scene.projectile) {
        var b = bullet.clone(true, true, $this.scene);
        b.x(bullet.getStagePos () .x);
        b.y(bullet.getStagePos () .y);
        b.rotation($this.rotation());
        b.moving = true;
        b.z(1000);
        $this.scene.projectile = b;
    }
}

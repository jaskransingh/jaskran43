var iss , spacecraft
var bg,issimg,scimg
var hasDocked = false

function setup() {
 CreateCanvas(600,250);
 spacecraft = createSprite(300,250)
 spacecraft.addImage(scimg);
 spacecraft.scale = 0.25;
}

function preload() {
  iss.loadImage("iss.png")
  spacebackground.loadImage("space.png")
  spacecraft1.loadImage("spacecraft1.png")
  spacecraft2.loadImage("spacecraft2.png")
  spacecraft3.loadImage("spacecraft3.png")
  spacecraft4.loadImage("spacecraft4.png")

}

function draw() {
  background(bg);
  
  spacecraft.addImage(scimg);
  if (!haslocked) {
    spacecraft.x = spacecraft.X +  (-1,1);
  
    if (keyDown("UP_ARROW")) {
      spacecraft.y = spacecraft.y -=2;
    }

    if (keyDown("DOWN_ARROW")) {
      spacecraft.y = spacecraft.y +=2
    }

    if (keyDown("RIGHT_ARROW")) {
      spacecraft.x = spacecraft.x - 1;  
  }

  if (keyDown("LEFT_ARROW")) {
    spacecraft.x = spacecraft.x + 1;
   }
  }
  if(spacecraft.y <= (iss.y+70) && spacecraft.X <= (iss.x-10)) {
   hasDocked = true;
   TextSize(25);
   Fill ("blue")
   Text("Docking Successful",200,350);
  }
   drawSprites(){   
   }
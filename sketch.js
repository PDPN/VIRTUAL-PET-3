//Create variables here
var petImg, x;
var milkImg1, milkImg2, milkImg3, milkImg4, milkImg5, milkImg6 ,milkImg7, milkImg8, milkImg9, milkImg10;
var milkImg11, milkImg12, milkImg13, milkImg15, milkImg15, milkImg16, milkImg17, milkImg18, milkImg19, milkImg20;
var database, position;

function preload()
{
  //load images here
  petImg = loadImage("dogimg.png")
 milkImg1 = loadImage("Milk.png")
 milkImg2 = loadImage("Milk.png")
 milkImg3 = loadImage("Milk.png")
 milkImg4  = loadImage("Milk.png")
 milkImg5  = loadImage("Milk.png")
 milkImg6  = loadImage("Milk.png")
 milkImg7  = loadImage("Milk.png")
 milkImg8  = loadImage("Milk.png")
 milkImg9  = loadImage("Milk.png")
 milkImg10  = loadImage("Milk.png")
 milkImg11  = loadImage("Milk.png")
 milkImg12  = loadImage("Milk.png")
 milkImg13  = loadImage("Milk.png")
 milkImg14  = loadImage("Milk.png")
 milkImg15  = loadImage("Milk.png")
 milkImg16  = loadImage("Milk.png")
 milkImg17  = loadImage("Milk.png")
 milkImg18  = loadImage("Milk.png")
 milkImg19  = loadImage("Milk.png")
 milkImg20  = loadImage("Milk.png")
}

function setup() {
  createCanvas(600, 600);
  background(176,40,148);
  database = firebase.database();
  var petposition = database.ref('pet/position');
  petposition.on("value",readposition,showerror)
}


function draw() {  

  if(keyDown(LEFT_ARROW)){
    readposition(-1,0);
}
else if(keyDown(RIGHT_ARROW)){
   readposition(1,0);
}
else if(keyDown(UP_ARROW)){
   readposition(0,-1);
}
else if(keyDown(DOWN_ARROW)){
    readposition(0,+1);
}

imageMode(CENTER);
  image(petImg, 350, 390, 150, 150);

  imageMode(CENTER);
  image(milkImg1, 230, 220, 80, 80);

  imageMode(CENTER);
  image(milkImg2, 230, 120, 80, 80);

  imageMode(CENTER);
  image(milkImg3, 260, 120, 80, 80);

  imageMode(CENTER);
  image(milkImg4, 290, 120, 80, 80);

  imageMode(CENTER);
  image(milkImg5, 320, 120, 80, 80);

  imageMode(CENTER);
  image(milkImg6, 350, 120, 80, 80);

  imageMode(CENTER);
  image(milkImg7, 380, 120, 80, 80);

  imageMode(CENTER);
  image(milkImg8, 410, 120, 80, 80);

  imageMode(CENTER);
  image(milkImg9, 440, 120, 80, 80);

  imageMode(CENTER);
  image(milkImg10, 470, 120, 80, 80);

  imageMode(CENTER);
  image(milkImg11, 500, 120, 80, 80);

  imageMode(CENTER);
  image(milkImg12, 500, 220, 80, 80);

  imageMode(CENTER);
  image(milkImg13, 470, 220, 80, 80);

  imageMode(CENTER);
  image(milkImg14, 440, 220, 80, 80);

  imageMode(CENTER);
  image(milkImg15, 410, 220, 80, 80);

  imageMode(CENTER);
  image(milkImg16, 380, 220, 80, 80);

  imageMode(CENTER);
  image(milkImg17, 350, 220, 80, 80);

  imageMode(CENTER);
  image(milkImg18, 320, 220, 80, 80);

  imageMode(CENTER);
  image(milkImg19, 290, 220, 80, 80);

  imageMode(CENTER);
  image(milkImg20, 260, 220, 80, 80);
  
  drawSprites();
  //add styles here

}

function readposition(data) {
  position = data.val();
  petImg.x = position.x;
  petImg.y = position.y;
}

function showerror()  {

}

function writeposition(x,y) {
database.ref('pet/position').set(
   {
       'x':position.x+x,
       'y':position.y+y
   }
)
}



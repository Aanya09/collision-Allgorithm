var fixrect,movingrect;
function setup() {
  createCanvas(800,400);
  fixrect=createSprite(400, 200, 50, 50);
  movingrect=createSprite(300,200,40,40);
  fixrect.shapeColor="red"
  movingrect.shapeColor="red"
  fixrect.debug=true
  movingrect.debug=true
}

function draw() {
  background(00);
  movingrect.x=mouseX
  movingrect.y=mouseY
  if (movingrect.x-fixrect.x<movingrect.width/2+fixrect.width/2
   && fixrect.x-movingrect.x<movingrect.width/2+fixrect.width/2 
   && movingrect.y-fixrect.y<movingrect.height/2+fixrect.height/2
   && fixrect.y-movingrect.y<movingrect.height/2+fixrect.height/2  
      ) 
      {fixrect.shapeColor="green"; movingrect.shapeColor="green";}
   else{fixrect.shapeColor="red"
   movingrect.shapeColor="red"}



  drawSprites();
}
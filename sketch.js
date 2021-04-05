  var fixedRect,movingRect;
  
  function setup() {
    createCanvas(1000,700);
    fixedRect= createSprite(500,450,50,100);
    fixedRect.shapeColor ="cyan";
    movingRect = createSprite(430,630,70,40);
    movingRect.shapeColor = "yellow"
  }

  function draw() {
    background(0); 
    movingRect.x = mouseX;
    movingRect.y = mouseY;
    if(movingRect.x - fixedRect.x<fixedRect.width/2+movingRect.width/2&&
    fixedRect.x-movingRect.x<fixedRect.width / 2+movingRect.width/2&&
    movingRect.y - fixedRect.y<fixedRect.height/2+movingRect.height/2&&
    fixedRect.y-movingRect.y<fixedRect.height / 2+movingRect.height/2){
      movingRect.shapeColor = "lime"  
    }
    else{
      movingRect.shapeColor = "yellow";
  }
    drawSprites();
  }
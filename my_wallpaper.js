//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;
let canvaswidth = 200;
let canvasHeight = 200;

let colour1;
let colour2; 
let colour3;
let colour4; 
let colour5;
let linestroke;
let circlefill;
let diameter;
let drawCircle = false;

function setup_wallpaper(pWallpaper) {
  colour1 = color(8,75,131) // applys to all outlines excluding through the petals on the top right and bottom left flower
  colour2 = color(255,255,12) // applys to squares r1c1,r2c2,r3c3,r4c4, as well as half the petals on the top right flower and bottom left
  colour3 = color(12,255,255) // applys to squares r1c3,r2c4, r3c1, r4c2, as well as half the petals on the top left and bottom right flower and lines through the top right and bottom left flower
  colour4 = color(12,100,255) // applys to half petals on all flowers
  colour5 = color(255,255,255) // applys to the remaining background squares
  linestroke = 3
  circlefill = color(247,99,228) //applys to the colour of the circles/diamonds
  diameter = 19


  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_PORTRAIT);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(255,200,200); 
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  


  //To keep the angles in radians
  angleMode(RADIANS);

  //Outline for following code
  stroke(colour1)
  strokeWeight(linestroke)

  //Top Left flower

  //Square: Row 1, Column I
  fill(colour2)
  rect(0,0,canvaswidth/4,canvasHeight/4)
  
  //Petal 1 (Top Left)
  fill(colour4)
  arc(canvaswidth/4,0,canvaswidth/2,canvasHeight/2,HALF_PI,PI,OPEN)
  fill(colour3)
  arc(0, canvasHeight/4, canvaswidth/2, canvasHeight/2, PI + HALF_PI, TWO_PI, OPEN);

  //Square: Row 2, Column 2
  fill(colour2)
  rect(canvaswidth/4,canvasHeight/4,canvaswidth/4,canvasHeight/4)

  //Petal 2 (Bottom Right)
  fill(colour3)
  arc(canvaswidth/2,canvasHeight/4,canvaswidth/2,canvasHeight/2,HALF_PI,PI, OPEN)
  fill(colour4)
  arc(canvaswidth/4, canvasHeight/2, canvaswidth/2, canvasHeight/2, PI + HALF_PI, TWO_PI, OPEN);

   //Square: Row 1, Column II
   fill(colour5)
   rect(0,50,canvaswidth/4,canvasHeight/4)

  // Petal 3 (Bottom Left)
  fill(colour3)
  arc(canvaswidth/4,canvasHeight/2,canvaswidth/2,canvasHeight/2, PI, PI + HALF_PI, OPEN)
  fill(colour4)
  arc(0,canvasHeight/4,canvaswidth/2,canvasHeight/2, 0, HALF_PI, OPEN)

  //Square: Row 1, Column II
  fill(colour5)
  rect(50,0,canvaswidth/4,canvasHeight/4)

  // Petal 4 (Top Right)
  fill(colour4)
  arc(canvaswidth/2,canvasHeight/4,canvaswidth/2,canvasHeight/2, PI, PI + HALF_PI, OPEN)
  fill(colour3)
  arc(canvaswidth/4,0,canvaswidth/2,canvasHeight/2, 0, HALF_PI, OPEN)


  // Top Right flower

  //Square: Row 1, Column 3
  rect(canvaswidth/2,0,canvaswidth/4,canvasHeight/4,0)

  //Petal 1 (Top Left)
  fill(colour4)
  arc(canvaswidth/4 + canvaswidth/2,0,canvaswidth/2,canvasHeight/2,HALF_PI,PI, OPEN)
  fill(colour2)
  arc(canvaswidth/2, canvasHeight/4, canvaswidth/2, canvasHeight/2, PI + HALF_PI, TWO_PI, OPEN);

  //Square: Row 2, Column 4
  fill(colour3)
  rect(canvaswidth/2 + canvaswidth/4, canvasHeight/4, canvaswidth/4,canvasHeight/4)

  //Petal 2 (Bottom Right)
  fill(colour2)
  arc(canvaswidth,canvasHeight/4,canvaswidth/2,canvasHeight/2,HALF_PI,PI, OPEN)
  fill(colour4)
  arc(canvaswidth/4 + canvaswidth/2, canvasHeight/2, canvaswidth/2, canvasHeight/2, PI + HALF_PI, TWO_PI, OPEN);

   //Square: Row 2, Column 3
   fill(colour5)
   rect(100,50,canvaswidth/4,canvasHeight/4)

  //Petal 3 (Bottom Left)
  fill(colour2)
  arc(canvaswidth/4 + canvaswidth/2,canvasHeight/2,canvaswidth/2,canvasHeight/2, PI, PI + HALF_PI, OPEN)
  fill(colour4)
  arc(canvaswidth/2,canvasHeight/4,canvaswidth/2,canvasHeight/2, 0, HALF_PI, OPEN)

   //Square: Row 2, Column 3
   fill(colour5)
   rect(150,0,canvaswidth/4,canvasHeight/4)

  //Petal 4 (Top Right)
  fill(colour4)
  arc(canvaswidth,canvasHeight/4,canvaswidth/2,canvasHeight/2, PI, PI + HALF_PI, OPEN)
  fill(colour2)
  arc(canvaswidth/4 + canvaswidth/2,0,canvaswidth/2,canvasHeight/2, 0, HALF_PI, OPEN)


  // Bottom Left Flower

  //Square: Row 3, Column 1
  fill(colour3)
  rect(0,canvasHeight/2,canvaswidth/4,canvasHeight/4)
  
  //Petal 1 (Top Left)
  fill(colour4)
  arc(canvaswidth/4,canvaswidth/2,canvaswidth/2,canvasHeight/2,HALF_PI,PI, OPEN)
  fill(colour2)
  arc(0, canvasHeight/4 + canvasHeight/2, canvaswidth/2, canvasHeight/2, PI + HALF_PI, TWO_PI, OPEN);

  //Square: Row 4, Column 2
  fill(colour3)
  rect(canvaswidth/4,canvasHeight/2 + canvasHeight/4,canvaswidth/4,canvasHeight/4)

  //Petal 2 (Bottom Right)
  fill(colour2)
  arc(canvaswidth/2,canvasHeight/2 + canvasHeight/4,canvaswidth/2,canvasHeight/2,HALF_PI,PI, OPEN)
  fill(colour4)
  arc(canvaswidth/4, canvasHeight, canvaswidth/2, canvasHeight/2, PI + HALF_PI, TWO_PI, OPEN);

   //Square: Row 4, Column 1
   fill(colour5)
   rect(0,150,canvaswidth/4,canvasHeight/4)

  //Petal 3 (Bottom Left)
  fill(colour2)
  arc(canvaswidth/4,canvasHeight,canvaswidth/2,canvasHeight/2, PI, PI + HALF_PI, OPEN)
  fill(colour4)
  arc(0,canvasHeight/4 + canvasHeight/2,canvaswidth/2,canvasHeight/2, 0, HALF_PI, OPEN)

   //Square: Row 3, Column 2
   fill(colour5)
   rect(50,100,canvaswidth/4,canvasHeight/4)

  //Petal 4 (Top Right)
  fill(colour4)
  arc(canvaswidth/2,canvasHeight/4 + canvasHeight/2,canvaswidth/2,canvasHeight/2, PI, PI + HALF_PI, OPEN)
  fill(colour2)
  arc(canvaswidth/4,canvasHeight/2,canvaswidth/2,canvasHeight/2, 0, HALF_PI, OPEN)


  //Bottom Right Flower

  //Square: Row 3, Column 3
  fill(colour2)
  rect(canvaswidth/2,canvasHeight/2, canvaswidth/4,canvasHeight/4)

  //Petal 1 (Top Left)
  fill(colour4)
  arc(canvaswidth/4 + canvaswidth/2,canvaswidth/2,canvaswidth/2,canvasHeight/2,HALF_PI,PI, OPEN)
  fill(colour3)
  arc(canvaswidth/2, canvasHeight/4 + canvasHeight/2, canvaswidth/2, canvasHeight/2, PI + HALF_PI, TWO_PI, OPEN);

  //Square: Row 4 Column 4
  fill(colour2)
  rect(canvaswidth/2 + canvaswidth/4, canvasHeight/4 + canvasHeight/2,canvaswidth/4,canvasHeight/4)

  //Petal 2 (Bottom Right)
  fill(colour3)
  arc(canvaswidth,canvasHeight/2 + canvasHeight/4,canvaswidth/2,canvasHeight/2,HALF_PI,PI, OPEN)
  fill(colour4)
  arc(canvaswidth/4 + canvaswidth/2, canvasHeight, canvaswidth/2, canvasHeight/2, PI + HALF_PI, TWO_PI, OPEN);

   //Square: Row 4, Column 3
   fill(colour5)
   rect(100,150,canvaswidth/4,canvasHeight/4)

  //Petal 3 (Bottom Left)
  fill(colour3)
  arc(canvaswidth/4 + canvaswidth/2,canvasHeight,canvaswidth/2,canvasHeight/2, PI, PI + HALF_PI, OPEN)
  fill(colour4)
  arc(canvaswidth/2,canvasHeight/4 + canvasHeight/2,canvaswidth/2,canvasHeight/2, 0, HALF_PI, OPEN)

   //Square: Row 3, Column 4
   fill(colour5)
   rect(150,100,canvaswidth/4,canvasHeight/4)

  //Petal 4 (Top Right)
  fill(colour4)
  arc(canvaswidth,canvasHeight/4 + canvasHeight/2,canvaswidth/2,canvasHeight/2, PI, PI + HALF_PI, OPEN)
  fill(colour3)
  arc(canvaswidth/4 + canvaswidth/2,canvasHeight/2,canvaswidth/2,canvasHeight/2, 0, HALF_PI, OPEN)

  //line through the centre of petals
  strokeWeight(linestroke)
  stroke(colour1)
  line(0,0,100,100)
  line(100,0,0,100)
  line(200,100,100,200)
  line(100,100,200,200)

  stroke(colour3)
  line(100,0,200,100)
  line(0,100,100,200)
  line(200,0,100,100)
  line(100,100,0,200)

  //border around squares (grid)
  strokeWeight(linestroke)
  stroke(colour1)
  line(0,0,200,0)
  line(0,50,200,50)
  line(0,100,200,100)
  line(0,150,200,150)
  line(0,200,200,200)

  line(0,0,0,200)
  line(50,0,50,200)
  line(100,0,100,200)
  line(150,0,150,200)
  line(200,0,200,200)



  if (drawCircle == true){
    fill(circlefill)
    stroke(colour1)
    circle(100,100,diameter)
    circle(50,50,diameter)
    circle(150,50,diameter)
    circle(50,150,diameter)
    circle(150,150,diameter)
    circle(0,0,diameter)
    circle(0,100,diameter)
    circle(0,200,diameter)
    circle(100,0,diameter)
    circle(200,0,diameter)
    circle(200,100,diameter)
    circle(100,200,diameter)
    circle(200,200,diameter)
  
 }
 else{
    fill(circlefill)
    stroke(colour1)

    quad(90,50,100,60,110,50,100,40)
    quad(90,150,100,160,110,150,100,140)
    
    quad(40,100,50,110,60,100,50,90)
    quad(40,200,60,200,50,190)
    quad(40,0,50,10,60,0)

    quad(140,100,150,110,160,100,150,90)
    quad(140,200,160,200,150,190)
    quad(140,0,150,10,160,0)

    quad(190,50,200,60,200,40)
    quad(190,150,200,160,200,140)

    quad(0,60,10,50,0,40)
    quad(0,160,10,150,0,140)
    
 }




}

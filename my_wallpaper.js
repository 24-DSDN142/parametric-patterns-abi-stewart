//your parameter variables go here!
let rect_width  = 20;
let rect_height = 20;
let canvaswidth = 200;
let canvasHeight = 200;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 0;
}

function wallpaper_background() {
  background(255,200,200); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  //variables
  let colour1 = color(245,124,0)
  let colour2 = color(255,250,59)
  let colour3 = color(255,165,245)
  let colour4 = color(255,0,200)


  //To keep the angles in radians
  angleMode(RADIANS);

  //grid background
  stroke(colour1)
  
  line(100,0,100,200)
  line(0,100,200,100)
  line(50,0,50,200)
  line(150,0,150,200)
  line(0,50,200,50)
  line(0,150,200,150)




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

  // Petal 3 (Bottom Left)
  fill(colour3)
  arc(canvaswidth/4,canvasHeight/2,canvaswidth/2,canvasHeight/2, PI, PI + HALF_PI, OPEN)
  fill(colour4)
  arc(0,canvasHeight/4,canvaswidth/2,canvasHeight/2, 0, HALF_PI, OPEN)

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

  //Petal 3 (Bottom Left)
  fill(colour2)
  arc(canvaswidth/4 + canvaswidth/2,canvasHeight/2,canvaswidth/2,canvasHeight/2, PI, PI + HALF_PI, OPEN)
  fill(colour4)
  arc(canvaswidth/2,canvasHeight/4,canvaswidth/2,canvasHeight/2, 0, HALF_PI, OPEN)

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

  //Petal 3 (Bottom Left)
  fill(colour2)
  arc(canvaswidth/4,canvasHeight,canvaswidth/2,canvasHeight/2, PI, PI + HALF_PI, OPEN)
  fill(colour4)
  arc(0,canvasHeight/4 + canvasHeight/2,canvaswidth/2,canvasHeight/2, 0, HALF_PI, OPEN)

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

  //Petal 3 (Bottom Left)
  fill(colour3)
  arc(canvaswidth/4 + canvaswidth/2,canvasHeight,canvaswidth/2,canvasHeight/2, PI, PI + HALF_PI, OPEN)
  fill(colour4)
  arc(canvaswidth/2,canvasHeight/4 + canvasHeight/2,canvaswidth/2,canvasHeight/2, 0, HALF_PI, OPEN)

  //Petal 4 (Top Right)
  fill(colour4)
  arc(canvaswidth,canvasHeight/4 + canvasHeight/2,canvaswidth/2,canvasHeight/2, PI, PI + HALF_PI, OPEN)
  fill(colour3)
  arc(canvaswidth/4 + canvaswidth/2,canvasHeight/2,canvaswidth/2,canvasHeight/2, 0, HALF_PI, OPEN)

}

//
// hello_objects
//
// Darren Kessner
// Marlborough School
//


// declare three Label objects

Label label1;
Label label2;
Label label3;


void setup()
{
  size(400, 400);

  // create the Label objects and set their member variables
  
  label1 = new Label();
  label1.x = 100;
  label1.y = 200;
  label1.name = "Apple";
  label1.c = color(255, 0, 0);
  
  label2 = new Label();
  label2.x = 200;
  label2.y = 200;
  label2.name = "Banana";
  label2.c = color(0, 255, 0);
  
  label3 = new Label();
  label3.x = 300;
  label3.y = 200;
  label3.name = "Blueberry";
  label3.c = color(0, 0, 255);
}


void draw()
{
  background(0);
  
  // call each Label object's display() function
  
  label1.display();
  label2.display();
  label3.display();
}


// declaration of the Label class

class Label
{
  // member variables
  
  int x;
  int y;
  int c; // color   
  String name = "";
  
  // member functions (also called methods)
  
  void display()
  {
    // draw the circle
    
    fill(c);
    ellipse(x, y, 80, 80);
    
    // draw the name
    
    fill(0);
    textAlign(CENTER, CENTER);
    text(name, x, y);
  }
}


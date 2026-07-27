//
// hello_objects_arraylist
//
// Darren Kessner
// Marlborough School
//


// declare and create the ArrayList of Ball objects

ArrayList<Ball> balls = new ArrayList<Ball>();


void setup()
{
    size(600, 600);

    balls.add(new Ball()); // start with a single ball
}


void draw()
{
    background(0);

    if (millis() < 5000)
    {
        textAlign(CENTER);
        fill(255);
        text("Up/down arrow: add/remove balls", width/2, 50);
    }

    // iterate through the list of balls, calling display() for each ball

    for (Ball ball : balls)
        ball.display();
}


void keyPressed()
{
    if (keyCode == UP)
    {
        balls.add(new Ball());
    }
    else if (keyCode == DOWN)
    {
        if (balls.size() > 0)
            balls.remove(0);
    }
}


class Ball
{
    // member variables

    float x;
    float y;
    float vx;
    float vy;
    float r;
    int c;

    // member functions (methods)

    Ball() // constructor function: called via "new Ball()"
    {
        // pick random position, velocity, radius, and color

        this.x = width/2;
        this.y = height/2;
        this.vx = random(-4, 3);
        this.vy = random(-4, 3); 
        this.r = random(20, 80);
        this.c = color(random(255), random(255), random(255));
    }

    void display()
    {
        // draw the circle

        fill(c);
        ellipse(x, y, r*2, r*2);

        // update position

        x += vx;
        y += vy;

        // bounce off walls

        if (x<r || x>width-r)
            vx = -vx;

        if (y<r || y>height-r)
            vy = -vy;
    }
}



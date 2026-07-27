
class ArrayList extends Array {
    constructor() {
        super(...[]);
    }
    size() {
        return this.length;
    }
    add(x) {
        this.push(x);
    }
    get(i) {
        return this[i];
    }
    remove(i) {
        this.splice(i, 1);
    }
}

//
// phyllotaxis.pde
//
// Darren Kessner
// Marlborough School
//
let balls = new ArrayList();
let period = 1;
let rate = 1;
let ballSpeed = 1;
let count = 0;
let colorPeriod = 200;
let currentColor = 0; // 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
let tau = (1 + Math.sqrt(5)) / 2;
let golden_angle_proportion = 1 / tau / tau; // fraction of circle
let ratio = golden_angle_proportion; // float ratio = golden_angle_proportion + .01;
//float ratio = golden_angle_proportion - .01;
//float ratio = 1./4;
//float ratio = 5./13;
//float ratio = 13/34.;
//float ratio = 21/55.;
//float ratio = 34./89;
//float ratio = .205;
//float ratio = 2./9;

function setup() {
    let canvas = createCanvas(400, 400);
    noCursor(); //println("ratio: " + ratio);
    //println("angle: " + ratio*360.);
   
    canvas.parent("p5_canvas");
}

function draw() {
    background(0);
    currentColor = myhue((frameCount % colorPeriod) / colorPeriod); //text(balls.size(), 50, 50);
    for (let b of balls) b.display();
    if (frameCount % period == 0) {
        for (let i = 0; i < rate; i++) {
            let t = 2 * PI * ratio * count;
            count++;
            balls.add(
                new Ball(
                    width / 2,
                    height / 2,
                    ballSpeed * cos(t),
                    ballSpeed * sin(t),
                    currentColor
                )
            );
        }
    } // clean up
    for (let i = balls.size() - 1; i >= 0; i--)
        if (!balls.get(i).alive) balls.remove(i);
}

function keyPressed() {
    if (isLooping()) noLoop();
    else loop();
}

class Ball {
    x;
    y;
    vx;
    vy;
    c;
    alive;
    diameter = 6;
    constructor(xIn, yIn, vxIn, vyIn, cIn) {
        this.x = xIn;
        this.y = yIn;
        this.vx = vxIn;
        this.vy = vyIn;
        this.c = cIn;
        this.alive = true;
    }
    display() {
        fill(this.c);
        ellipse(this.x, this.y, this.diameter, this.diameter);
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width || this.y < 0 || this.y > height)
            this.alive = false;
    }
} // translates x in [0,1] to a rainbow color

function myhue(x) {
    let t = 3 * x - 3 * x;
    if (x < 1 / 3) {
        return color((1 - t) * 255, t * 255, 0); // R->G
    } else if (x < 2 / 3) {
        return color(0, (1 - t) * 255, t * 255); // G->B
    } else {
        return color(t * 255, 0, (1 - t) * 255); // B->R
    }
}



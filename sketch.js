let cvs, numData;
let num = 0;

function initialize() {
    if (cvs == null) {
        background('black');
        cvs = createCanvas(400, 400);
        numData = createNumberDict();
    } else {
        background(random(255), random(255), random(255));
        square(100, 100, 200);
    }
}

function setup() {
    initialize();
    frameRate(10);
}

function draw() {
    if (frameCount % 6 == 0) {
        setup();
        num += 1;
        numData.create(num, num);
    }
    fill(random(255), random(255), random(255));
    circle(200, 200, 50);
    if (num >= 15) {
        numData.saveTable('data')
        background('red');
        noLoop();
    }
}
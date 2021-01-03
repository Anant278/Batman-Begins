var bruce, bruce_img;

function preload(){
    bruce_img = loadImage("images/WalkingFrame/walking_1.png");
}

function setup(){
    createCanvas(800, 900);

    bruce = createSprite(100, 300, 30, 30);
    bruce.addImage(bruce_img);
}

function draw(){
    background("black");

    drawSprites();
}   
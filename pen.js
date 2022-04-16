pen_img = "";
model_status = "";

function preload(){
    pen_img = loadImage("pen.jpeg");
}

function setup(){
    canvas = createCanvas(400, 500);
    canvas.center();

    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status - Detecting objects..."
}

function modelLoaded(){
    model_status = true;
    objectDetector.detect(pen_img, gotResult);
}

function gotResult(error, result){
    if(error){
        console.log(error);
    }
    console.log(result);
}

function draw(){
    image(pen_img, 0, 0, 400, 500);
}
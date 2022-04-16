bottle_img = "";
model_status = "";

function preload(){
    bottle_img = loadImage("bottle.jpeg");
}

function setup(){
    canvas = createCanvas(400, 450);
    canvas.center();

    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status - Detecting objects..."
}

function modelLoaded(){
    model_status = true;
    objectDetector.detect(bottle_img, gotResult);
}

function gotResult(error, result){
    if(error){
        console.log(error);
    }
    console.log(result);
}

function draw(){
    image(bottle_img, 0, 0, 400, 533);
}
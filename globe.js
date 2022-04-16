globe_img = "";
model_status = "";

function preload(){
    globe_img = loadImage("globe.jpeg");
}

function setup(){
    canvas = createCanvas(400, 450);
    canvas.center();

    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status - Detecting objects..."
}

function modelLoaded(){
    model_status = true;
    objectDetector.detect(globe_img, gotResult);
}

function gotResult(error, result){
    if(error){
        console.log(error);
    }
    console.log(result);
}

function draw(){
    image(globe_img, 0, 0, 400, 500);
}
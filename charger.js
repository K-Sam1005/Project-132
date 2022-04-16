charger_img = "";
model_status = "";

function preload(){
    charger_img = loadImage("charger.jpeg");
}

function setup(){
    canvas = createCanvas(400, 433);
    canvas.center();

    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status - Detecting objects..."
}

function modelLoaded(){
    model_status = true;
    objectDetector.detect(charger_img, gotResult);
}

function gotResult(error, result){
    if(error){
        console.log(error);
    }
    console.log(result);
}

function draw(){
    image(charger_img, 0, 0, 400, 533);
}
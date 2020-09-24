function preload() {

}

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 500);
    canvas.position(700, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    console.log("Hello");
}

function modelLoaded() {
    console.log("Pose Net is initialized");
}

function draw() {
    background('#0069d1');
}

function gotPoses(results) {


    if (results.length > 0) {
        console.log(results);
    }
}
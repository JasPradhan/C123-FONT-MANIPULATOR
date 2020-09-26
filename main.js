rightWristX=0;

difference=0;

leftWristX=0;

noseX=0;

noseY=0;

texts=0;

function preload() {

}

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 500);
    canvas.position(700, 200);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    console.log("Hello");
}

function modelLoaded() {
    console.log("Pose Net is initialized");
}

function draw() {
    background('#0069d1');
    document.getElementById("font_size").innerHTML = "Font size of the text will be = " + difference +"px";
    textSize(difference);
    fill('#FFE787');
    text(texts, noseX, noseY);
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    texts=document.getElementById("text").value;

  
          noseX=results[0].pose.nose.x;
          noseY=results[0].pose.nose.y;
  
          console.log("noseX= "+noseX+", noseY= "+noseY);

    console.log("leftWristX  = " + leftWristX  + " rightWristX = "+ rightWristX + " difference = " + difference);
  }
}


/*speech*/

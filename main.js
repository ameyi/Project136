status1 = ""
function setup()
{
    canvas = createCanvas(480, 380)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(480, 380)
    video.hide()
}
function draw()
{
    image(video, 0, 0, 480, 380)
}
function start(){
    objectDetector = ml5.objectDetector("cocossd", modelLoaded)
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    document.getElementById("playofthegame").value;
}
function modelLoaded(){
    console.log("Model has been loaded")
    status1 = true
}
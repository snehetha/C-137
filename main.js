status="";
objects=[];
function preload(){
video=createVideo("video.mp4");
video.hide();
}
function setup(){
canvas=createCanvas(480,380);
canvas.center();

}

function gotresult(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
objects=results;
console.log(objects);

    
}
function blabla(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status_objects").innerHTML=("status detecting objects");

}
function modelLoaded(){
    console.log("modelLoaded");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
function draw(){
    image(video,0,0,480,380);
    if(status!=""){
        objectDetector.detect(video,gotresult);
    for(var i=0;i<objects.length;i++){
        document.getElementById("status_objects").innerHTML="status:objects detected";
        document.getElementById("number_of_objects").innerHTML="number of objects detected"+objects.length;
        fill("pink");
        percent=floor(objects[i].confidence*100);
        text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
        noFill();
        stroke("purple");
        rect(objects[i].x,objects[i].y,objects[i].height,objects[i].width);
    }
    }
    
    }
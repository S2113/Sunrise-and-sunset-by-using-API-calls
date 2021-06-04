const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;




function preload() {

  getTime();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    

}

function draw(){

    // add condition to check if any background image is there to add
     if (backgroundImg){
     
   
    Engine.update(engine);

    background (backgroundImg);
    

     }


    // write code to display time in correct format here


}

async function getTime(){


var responce = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
var datatype =await responce.json ();
var hour=datatype.datetime.slice (11,13);
var time=hour;
var bg;

console.log (time);
if (time <=4 && time >=6)
{
   bg="sunrise1.png";
}

else if (time >=6 && time <= 8)
{
   bg="sunrise2.png";
}

else if (time >=23 && time ===0)
{
    bg="sunrise10.png";
}

else if (time ===0 && time <=3)
{
    bg="sunrise11.png";
}

else {
    bg="sunset12.png";
}

backgroundImg =loadImage (bg);

// write code to fetch time from API
//return hour;

    //change the data in JSON format

    // write code slice the datetime

    // add conditions to change the background images from sunrise to sunset


    //load the image in backgroundImg variable here

}

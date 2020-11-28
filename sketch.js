//Create variables here
var food;
var database;
var dog, sit, stand;
function preload()
{
  sit = loadImage("images/dogImg.png");
  stand = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(800, 700);
  dog = createSprite(400,500,10,10)
  dog.addImage(sit)
  dog.scale = 0.5
  database = firebase.database()
  var foodC= database.ref('Food/Count')
    foodC.on("value",Read,Backup)
   
    
}


function draw() {  
  background(0,255,0)
  drawSprites();
  var button = createButton("Feed");
  button.position(400,350);
  button.mousePressed(function()
  {

    Update(1);    
  })

  var button2 = createButton("refill");
  button2.position(600,350);
  button2.mousePressed(function()
  {

    Update(-1);    
  })
  if(food===0)
  {
     Update(-50)
  }


text("Food Remaining = " + food,400,100)
}

function Read(d)
{
   food = d.val()
   console.log(food)
}

function Update(v)
{ 
  if(food<=0)
  {
    
  }
  database.ref('Food').set({
      'Count':food - v
  });
  console.log(food)
}

function Backup()
{
  console.log("error");
}


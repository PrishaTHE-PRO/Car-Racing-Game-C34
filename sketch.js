var ball,database,position;

function setup(){
    database=firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,20,20);
    ball.shapeColor="red";
    var ballposition=database.ref('ball/position')
    ballposition.on("value",readposition);
   
}

function draw(){
    background("white");

    if(keyDown(UP_ARROW)){
        writeposition(0,-1);
    }

    if(keyDown(DOWN_ARROW)){
        writeposition(0,1);
    }
    
    if(keyDown(RIGHT_ARROW)){
        writeposition(1,0);
    }

    if(keyDown(LEFT_ARROW)){
        writeposition(-1,0);
    }
    
    drawSprites();
}

function writeposition(x,y){
    database.ref('ball/position').set({
        'x':position.x+x,
        'y':position.y+y
        })
}

function readposition(data){
position = data.val();
ball.x=position.x;
ball.y=position.y;
}


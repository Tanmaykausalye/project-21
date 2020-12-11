var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)  
var Bullet, wall
var speed, weight, thickness

function setup(){

createCanvas(1600,400)

Bullet = createSprite(80,200,45,7)
Bullet.shapeColor = ("white")

wall = createSprite(1200,200,thickness,height/2)
wall.shapeColor = color(80,80,80)

thickness = random(22,83)
weight = random(223,331)
speed = random(30,52)

}


function draw(){

background ("black")

Bullet.velocityX = speed


if(isTouching(Bullet, wall)){

if(damage<10){
wall.shapeColor = color(0,255,0)
}

if(damage>10){
wall.shapeColor = color(255,0,0)
}
 

}

else{

wall.shapeColor = color(80,80,80)

}
drawSprites()

}

function isTouching(object1, object2){

if(

object2.x-object1.x < object1.width/2 + object2.width/2 

)

{

return true 

}

else{

return false

}

}
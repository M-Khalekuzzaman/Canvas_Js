

// var canvas = document.getElementById("myCanvas");

// var ctx = canvas.getContext("2d");

// ctx.lineWidth = 2;
// ctx.strokeStyle = "black";
// ctx.strokeRect(11,11,380,270);

// ctx.fillStyle = "green";
// ctx.fillRect(12,12,378,268);


// var centerX = canvas.width /2;
// var centerY = canvas.height /2;

// ctx.beginPath();
// ctx.arc(centerX,centerY,70,0,2*Math.PI,false);

// ctx.fillStyle = "red";
// ctx.fill();
// ctx.stroke();
var can = document.getElementById("mycanvas");
var ctx = can.getContext("2d");

ctx.font = "30px Arial";
ctx.fillStyle = "darklight";
ctx.textAlign = "center";
ctx.fillText("Hello World!!",can.width/2,can.height/2);
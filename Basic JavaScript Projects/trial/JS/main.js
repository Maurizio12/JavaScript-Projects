var canvas = document.createElement("canvas");
canvas.id = "myCanvas";
// Set canvas properties (width, height, etc.)
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");
// Your drawing code here
// Create a Gradient
const grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");

// Draw a filled Rectangle
ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);
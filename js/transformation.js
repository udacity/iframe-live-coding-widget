var c = getCanvas();
var ctx = c.getContext('2d');

ctx.save();
ctx.fillStyle = 'blue';
ctx.translate(10,10);
ctx.fillRect(0,0,10,10);
ctx.restore();


ctx.rotate(Math.PI/4);
ctx.translate(50,0);
ctx.fillStyle = 'green';
ctx.fillRect(0,0, 10,10);
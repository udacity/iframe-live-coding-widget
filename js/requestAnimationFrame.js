// example code from mr doob : http://mrdoob.com/lab/javascript/requestanimationframe/
var canvas, context;
init();
animate();
function init() {
    canvas = document.querySelector("#c");
    context = canvas.getContext( '2d' );
}
function animate() {
    requestAnimationFrame( animate );
    draw();
}
function draw() {
    var time = new Date().getTime() * 0.002;
    var x = Math.sin( time ) * 96 + 38;
    var y = Math.cos( time * 0.9 ) * 96 + 38;

    context.fillStyle = 'rgb(245,245,245)';
    context.fillRect( 0, 0, 255, 255 );
    context.fillStyle = 'rgb(255,0,0)';
    context.beginPath();
    context.arc( x, y, 10, 0, Math.PI * 2, true );
    context.closePath();
    context.fill();
}
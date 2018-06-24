var c = getCanvas();
c.width = 960;
c.height = 540;
var ctx = c.getContext('2d');

function doIt() {
  var imageData = ctx.getImageData(0,0, 960, 540);
  var length = imageData.data.length / 4;
  for (var i = 0; i < length; i++){
      imageData.data[i * 4 + 0] = 255 - imageData.data[i * 4 + 0];   //Red
      imageData.data[i * 4 + 1] = 255 - imageData.data[i * 4 + 1];   //Green
      imageData.data[i * 4 + 2] = 255 - imageData.data[i * 4 + 2];   //Blue
  }
  // Comment this line to see original image
  ctx.putImageData(imageData, 0, 0);
}

var image = new Image();
image.onload = function() {
  ctx.drawImage(image, 0, 0);
  doIt();
}
image.src = 'images/image-1200.png';
function Layer() {
  var canvas = document.createElement("canvas");
  canvas.width = 480;
  canvas.height = 320;
  return canvas;
}

function BallLayer() {
  var layer = Layer();
  var context = layer.getContext("2d");
  context.arc(50, 160, 30, 0, 6.28318531);
  context.fill();
  return layer;
}

function LevelLayer(delta) {
  var layer = Layer();
  var context = layer.getContext("2d");

  context.rect(delta + 0, 0, 480, 50);
  context.rect(delta + 0, 270, 480, 50);
  context.rect(delta + 350, 220, 50, 50);

  context.fill();

  return layer;
}

function ProjectScreen(Layers) {
  var screen = document.getElementById("screen");
  var context = screen.getContext("2d");

  context.clearRect(0, 0, 480, 320);

  for(layerIndex in Layers) {
    context.drawImage(Layers[layerIndex], 0, 0);
  }
}

ProjectScreen([BallLayer(), LevelLayer(0)]);
ProjectScreen([BallLayer(), LevelLayer(-10)]);

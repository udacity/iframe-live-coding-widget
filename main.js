var root = document.querySelector('live-coding-canvas');

var tabs = document.querySelector('paper-tabs');
var pages = document.querySelector('core-pages');
var exerciseId, content;

// Run code
var runButton = root.$.btnRun;
var editor = root.$.editor;
var evalCanvasCode = function(e) {
  var content = editor.mirror.getValue();
  var canvas = document.querySelector("#c");
  // Clear canvas
  canvas.height = canvas.height;canvas.width = canvas.width;
  // Eval code
  eval(content);
}
runButton.addEventListener('click', evalCanvasCode);

// Reset code
var resetButton = document.querySelector('#btnReset');
resetButton.addEventListener('click', function(e) {
  if (content == undefined) {
    content = stubs[exerciseId].join("\n");
  }
  editor.mirror.setValue(content);
  runButton.click();
});

tabs.addEventListener('core-select',function(){
  pages.selected = tabs.selected;
  if (pages.selected === 0) {
    // Code page selected
    pages.querySelectorAll("div")[0].style.display = "block";
    pages.querySelectorAll("div")[1].style.display = "none";

  } else if (pages.selected == 1) {
    // Canvas page selected
    pages.querySelectorAll("div")[0].style.display = "none";
    pages.querySelectorAll("div")[1].style.display = "block";
    // Run canvas code
    runButton.click();
  } else {
    pages.querySelectorAll("div")[1].style.display = "none";
  }
});

// Get Query String
var queryDict = {}
location.search.substr(1).split("&").forEach(function(item) {queryDict[item.split("=")[0]] = item.split("=")[1]})




// Load code
window.addEventListener('polymer-ready', function(e) {
  exerciseId = queryDict["exercise"];
  content = stubs[exerciseId].join("\n");
  editor.mirror.setValue(content);
});

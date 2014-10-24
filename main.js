var toastGroupTemplate = document.querySelector('#toastGroup');
toastGroupTemplate.showToast = function() {
  document.querySelector('#toast').show();
}

var tabs = document.querySelector('paper-tabs');
var pages = document.querySelector('core-pages');
var exerciseId, content;

tabs.addEventListener('core-select',function(){
  pages.selected = tabs.selected;
  if (pages.selected === 0) {
    pages.querySelectorAll("div")[0].style.display = "block";
    pages.querySelectorAll("div")[1].style.display = "none";

  } else if (pages.selected == 1) {
    pages.querySelectorAll("div")[0].style.display = "none";
    pages.querySelectorAll("div")[1].style.display = "block";
  } else {
    pages.querySelectorAll("div")[1].style.display = "none";
  }
});

// Get Query String
var queryDict = {}
location.search.substr(1).split("&").forEach(function(item) {queryDict[item.split("=")[0]] = item.split("=")[1]})


// Run code
var runButton = document.querySelector('#btnRun');
var editor = document.querySelector('#editor');
runButton.addEventListener('click', function(e) {
  var content = editor.mirror.getValue();
  console.log(content);
  var canvas = document.querySelector("#c");
  // Clear canvas
  canvas.height = canvas.height;canvas.width = canvas.width;
  // Eval code
  eval(content);
});

// Reset code
var resetButton = document.querySelector('#btnReset');
resetButton.addEventListener('click', function(e) {
  if (content == undefined) {
    content = stubs[exerciseId].join("\n");
  }
  editor.mirror.setValue(content);
  runButton.click();
});

// Load code
window.addEventListener('polymer-ready', function(e) {
  exerciseId = queryDict["exercise"];
  content = stubs[exerciseId].join("\n");
  editor.mirror.setValue(content);
});

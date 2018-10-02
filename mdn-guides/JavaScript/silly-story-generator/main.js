

var nameField = document.getElementById("customname");
nameField.focus();

document
  .getElementsByClassName("randomize")[0]
  .addEventListener("click", generateRandomStory);

function generateRandomStory() {
  var para = document.getElementsByClassName("story")[0];
  if (para.childNodes.length > 0) {
    para.removeChild(para.childNodes[0]);
  }
  var name = nameField.value;
  if (name === "") {
    name = "Bob";
  } else {
    name = name;
  }
  var uk = document.getElementById("uk").checked;
  var temp = getTemp(uk);
  var weight = getWeight(uk);
  var place = getPlace(uk);
  var randomStory = storyMaker(name, temp, weight, place);
  var storyNode = document.createTextNode(randomStory);
  para.appendChild(storyNode);
  para.style.visibility = "visible";
}



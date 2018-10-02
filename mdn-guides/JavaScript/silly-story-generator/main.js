var nameField = document.getElementById("customname");
nameField.focus();
var para = document.getElementsByClassName("story")[0];
var uk = document.getElementById("uk");

document
  .getElementsByClassName("randomize")[0]
  .addEventListener("click", generateRandomStory);

function generateRandomStory() {
  resetPara(para);
  var input = nameField.value;
  var ukCheck = uk.checked;
  var name = getName(input);
  var temp = getTemp(ukCheck);
  var weight = getWeight(ukCheck);
  var place = getPlace(ukCheck);
  var randomStory = storyMaker(name, temp, weight, place);
  var storyNode = document.createTextNode(randomStory);
  para.appendChild(storyNode);
  para.style.visibility = "visible";
}

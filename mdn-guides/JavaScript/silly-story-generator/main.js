var nameField = document.getElementById("customname");
nameField.focus();

document
  .getElementsByClassName("randomize")[0]
  .addEventListener("click", generateRandomStory);

function generateRandomStory() {
  var para = document.getElementsByClassName("story")[0];
  resetPara(para);
  var input = nameField.value;
  var name = getName(input);
  var uk = document.getElementById("uk").checked;
  var temp = getTemp(uk);
  var weight = getWeight(uk);
  var place = getPlace(uk);
  var randomStory = storyMaker(name, temp, weight, place);
  var storyNode = document.createTextNode(randomStory);
  para.appendChild(storyNode);
  para.style.visibility = "visible";
}

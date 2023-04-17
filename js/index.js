var textarea = document.getElementById("textField");
var words = document.getElementById("words");
var characters = document.getElementById("characters");
var sentences = document.getElementById("sentences");
var paragraphs = document.getElementById("paragraphs");

textarea.addEventListener("input", getMessageDetails);

function getMessageDetails() {
  var str = textarea.value;
  characters.innerHTML = str.split("").length;

  var wordsArr = str.split(" ");
  if (wordsArr[0] == "") {
    words.innerHTML = 0;
  } else {
    words.innerHTML = wordsArr.length;
  }

  sentences.innerHTML = str.split(".").length - 1;
  paragraphs.innerHTML = str.split("\n").length;
}

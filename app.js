// logic to count the characters and words

const userText = document.getElementById("inputText");
const characters = document.getElementById("char");
const totalWords = document.getElementById("words");

// We are adding event listener on input to tract the count of letters and Words
userText.addEventListener("input", function () {
  // text
  // .element.value.length -> gives you the number of letters in INPUT it count te space also
  // which later get reflected in char count
  characters.innerHTML = userText.value.length + " Characters";

  // words
  // split() used to break the value in order of passed value
  // split(' ') : it break the all value after getting space between them.
  // trim() : it makes all value separate
  // so here we will break the inout value in order of space
  totalWords.innerHTML = userText.value.trim().split(" ").length + " Words";
});

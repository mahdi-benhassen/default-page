const changeTextButton = document.getElementById("changeTextButton");
const paragraph = document.getElementById("myParagraph");

changeTextButton.addEventListener("click", function() {
  paragraph.textContent = "The text has changed!";
});

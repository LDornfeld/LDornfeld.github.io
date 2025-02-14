document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.getElementById("typewriter-text");
  const text = textElement.innerHTML;
  textElement.innerHTML = ""; // Clear the initial text
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      textElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, 50); // Adjust speed (in milliseconds)
    }
  }

  typeWriter();
});
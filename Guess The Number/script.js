const randomNumber = Math.floor(Math.random() * 100) + 1;
const input = document.querySelector("input");
const submitBtn = document.querySelector("button");
const result = document.querySelector(".message");

submitBtn.addEventListener("click", function () {
  const userGuess = Number(input.value);

  if (userGuess === randomNumber) {
    result.textContent = "You have won !!";
  } 
  else if (userGuess > randomNumber) {
    result.textContent = "Too High !!";
  } 
  else if (userGuess < randomNumber) {
    result.textContent = "Too Low !!";
  }

  input.value = "";
});
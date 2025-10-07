//Zadanie 1
const btn1 = document.querySelector("#ex1_button");
const content1 = document.querySelector("#ex1_content");

btn1.addEventListener("click", () => {
  const numberArray = [];
  for (let i = 0; i < 10; i++) {
    numberArray.push(i);
  }
  content1.innerHTML = numberArray;
});

//Zadanie 2
const input = document.querySelector("#ex2_text");
const content2 = document.querySelector("#ex2_content");
let errMsg = "";

input.addEventListener("input", () => {
  const inputValue = input.value;
  const specialCharacters = /[!@#$%^&*(),.?":{}|<>]/;
  const specialLetters = /[A-Za-z]/;

  if (inputValue.length !== 9) {
    errMsg = "Długość numeru musi być równa 9";
  } else if (specialLetters.test(inputValue)) {
    errMsg = "Numer nie może zawierać liter";
  } else if (specialCharacters.test(inputValue)) {
    errMsg = "Numer nie może zawierać znaków specjalnych";
  } else {
    errMsg = "Numer telefonu jest poprawny";
  }
  content2.innerHTML = errMsg;
});

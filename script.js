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

//Zadanie 3
const dragDropElem = document.querySelector("#ex3_element");
const container3_1 = document.querySelector("#ex3_one");
const container3_2 = document.querySelector("#ex3_two");

dragDropElem.addEventListener("dragstart", (e) => {
  console.log(e);
});

//Drag&Drop przenoszenie do drugiego elementu
container3_2.addEventListener("dragover", (e) => {
  e.preventDefault();
});

container3_2.addEventListener("drop", (e) => {
  container3_2.prepend(dragDropElem);
});

//Drag&Drop przenoszenie do pierwszego elementu
container3_1.addEventListener("dragover", (e) => {
  e.preventDefault();
});

container3_1.addEventListener("drop", (e) => {
  container3_1.prepend(dragDropElem);
});

//ZADANIA DODATKOWE

//Zadanie 4 animacja elementów
const animatedElement = document.querySelector("#ex6_element");
const animatedBTN = document.querySelector("#ex6_animate_button");
let movedRight = false;
animatedBTN.addEventListener("click", () => {
  if (!movedRight) {
    animatedElement.classList.remove("move-left");
    animatedElement.classList.add("move-right");
    movedRight = true;
  } else {
    animatedElement.classList.remove("move-right");
    animatedElement.classList.add("move-left");
    movedRight = false;
  }
});

//Zadanie 1_4


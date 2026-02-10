// YOUR CODE HERE


const blueButton = document.querySelector("#blue");
const greenButton = document.querySelector("#green");
const pinkButton = document.querySelector("#pink");
const blackButton = document.querySelector("#black");

const favColorDisplay = document.getElementById("favColorDisplay");

favColorDisplay =() => {
  if (blueButton.clicked) {
    alert("You picked blue 💙");
  } else if (greenButton.clicked) {
    alert ("You picked green 💚"); 
  } else if (pinkButton.clicked) {
    alert("You picked pink 💕");
  } else if (blackButton.clicked){
        alert("You picked black 🖤")
  }
};


blueButton.addEventListener("click", favColorDisplay);
greenButton.addEventListener("click", favColorDisplay);
pinkButton.addEventListener("click", favColorDisplay);
blackButton.addEventListener("click", favColorDisplay);

// getRandomInt() - gets a random number between 1 and 100
function getRandomInt() {
    return Math.floor(Math.random() * 100) + 1;
};

// is_dark(hex) - takes in a hex number (for example #123456) and returns true if it's dark and false if it's light.

function is_dark(hex) {
  if (is_dark(hex)) {
    return true;
  } else {
    return false;
  }
}

//part 3 code//
const northamericaButton = document.querySelector("#North-America");
const southamericaButton = document.querySelector("#South-America");
const europeButton = document.querySelector("#Europe");
const asiaButton = document.querySelector("#Asia");
const africaButton = document.querySelector("#Africa");
const australiaButton = document.querySelector("#Australia");
const anarcticaButton = document.querySelector("#Antarctica");

const continentDisplay = document.getElementById("continentDisplay");
namecontinent = () => {
  if ("North-America".typed) {
    alert("Correct!");
  } else if ("South-America".typed) {
    alert("Correct!");
  } else if ("Europe".typed) {
    alert("Correct!");
  } else if ("Asia".typed) {
    alert("Correct!");
  } else if ("Africa".typed) {
    alert("Correct!");
  } else if ("Australia".typed) {
    alert("Correct!");
  } else if ("Antarctica".typed) {
    alert("Correct!");
  }
};

northamericaButton.addEventListener("click", namecontinent);
southamericaButton.addEventListener("click", namecontinent);
europeButton.addEventListener("click", namecontinent);
asiaButton.addEventListener("click", namecontinent);
africaButton.addEventListener("click", namecontinent);
australiaButton.addEventListener("click", namecontinent);
anarcticaButton.addEventListener("click", namecontinent);

//part 4 code//
const submitButton = document.querySelector("#submit");
const human = document.querySelector("#human");

    robotvalidation = () => {
  if (is_human(human)) {
    alert("Im not robot");
  }};
submitButton.addEventListener("click", robotvalidation);
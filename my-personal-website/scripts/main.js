// Image switcher code

let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/tri-pfp-1.jpg") {
    myImage.setAttribute("src", "images/tri-pfp-2.jpg");
  } else {
    myImage.setAttribute("src", "images/tri-pfp-1.jpg");
  }
};

// Personalized welcome message code

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.innerHTML = "Welcome to my website, " + myName + "!";
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.innerHTML = "Welcome to my website, " + storedName + "!";
}

myButton.onclick = function () {
  setUserName();
};

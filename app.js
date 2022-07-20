let textarea = document.getElementById("textarea");

let responses = document.getElementById("responses");

textarea.addEventListener("input", letters);
textarea.addEventListener("input", backspace);
textarea.addEventListener("keypress", enter);
textarea.addEventListener("keydown", backspace2);

let div = document.createElement("div");

responses.appendChild(div);
let comma = 0;

let arrayOfCommas = [0];

let nothing = false;

let enterPressed = false;

function backspace2(e) {
  console.log(e.key);
  if (e.key == "Backspace" && enterPressed == true) {
    let numberOfDivs3 = responses.querySelectorAll("div");
    // console.log(numberOfDivs2);
    for (let i = 0; i < numberOfDivs3.length; i++) {
      //console.log(numberOfDivs2.length);
      numberOfDivs3[i].remove();
    }
  }
}

function letters(e) {
  // console.log(doublePressed == true);
  if (doublePressed == true) {
    /*div.style.background = "rgb(240, 147, 43)";
    div.style.color = "rgb(255,255,255)";
    div.style.display = "inline-block";

    div.style.padding = "10px 20px";
    div.style.borderRadius = "20px";
    div.style.fontSize = "14px";
    div.style.marginRight = "5px";
    div.style.marginBottom = "5px";
    doublePressed = false;
    div = document.createElement("div");
    responses.appendChild(div);*/
    //div.innerHTML = textarea.value.substring(0).replace(/,/g, "");
    doublePressed = false;
    comma = 0;
  }

  if (nothing == true) {
    div = document.createElement("div");
    responses.appendChild(div);

    nothing = false;
  }
  console.log(comma);
  console.log(div.innerHTML);
  console.log(arrayOfCommas);

  responses.lastElementChild.innerHTML = textarea.value
    .substring(arrayOfCommas[arrayOfCommas.length - 1])
    .replace(/,/g, "");
  //div.innerHTML = textarea.value;

  if (e.data != " ") {
    div.style.background = "rgb(240, 147, 43)";
    div.style.color = "rgb(255,255,255)";
    div.style.display = "inline-block";

    div.style.padding = "10px 20px";
    div.style.borderRadius = "20px";
    div.style.fontSize = "14px";
    div.style.marginRight = "5px";
    div.style.marginBottom = "5px";
  }

  if (div.innerHTML == "" || /[A-Za-z]/g.test(div.innerHTML) == false) {
    div.style.display = "none";
    //comma = 0;
  }

  if (e.data == ",") {
    comma = textarea.value.lastIndexOf(",");
    arrayOfCommas.push(comma);
    div = document.createElement("div");
    responses.appendChild(div);
  }
}

let count = arrayOfCommas.length;

function backspace(e) {
  //console.log(e.data);

  if (e.data == null && enterPressed != true) {
    let numberOfDivs = responses.querySelectorAll("div");

    let count = numberOfDivs.length - 1;

    numberOfDivs[count].innerHTML = textarea.value
      .substring(arrayOfCommas[count])
      .replace(/,/g, "");

    let spaceCount = numberOfDivs[count].innerHTML.split(" ").length - 1;

    if (
      numberOfDivs[count].innerHTML.length - spaceCount == 0 &&
      numberOfDivs.length == 1
    ) {
      nothing = true;
    }

    if (numberOfDivs[count].innerHTML.length - spaceCount == 0) {
      numberOfDivs[count].style.display = "none";

      count--;
      comma = 0;
      arrayOfCommas.pop();
      responses.lastElementChild.remove();
    }
  }
}

let doublePressed = false;

function enter(e) {
  console.log(e);
  /*if ((textarea.value = "" && enterPressed == true)) {
    e.preventDefault();
  }*/

  /*console.log(e.data == "Enter");
  console.log(textarea.value == "");

  console.log(e.data == "Enter" && textarea.value == "");*/

  if (e.key == "Enter" && textarea.value == "") {
    e.preventDefault();
  }

  if (enterPressed == true) {
    let numberOfDivs2 = responses.querySelectorAll("div");
    // console.log(numberOfDivs2);
    for (let i = 0; i < numberOfDivs2.length; i++) {
      //console.log(numberOfDivs2.length);
      numberOfDivs2[i].remove();
    }
    textarea.value = "";
    div = document.createElement("div");
    responses.appendChild(div);
    enterPressed = false;
    doublePressed = true;
    e.preventDefault();
  }

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let numberOfDivs = responses.querySelectorAll("div");

  let arrayOfRandomNum = [];

  if (e.key == "Enter" && textarea.value != "") {
    for (let i = 0; i < 30; i++) {
      setTimeout(() => {
        //console.log(randomIntFromInterval(0, numberOfDivs.length));

        let randomNum = randomIntFromInterval(0, numberOfDivs.length - 1);

        arrayOfRandomNum.push(randomNum);

        numberOfDivs[randomNum].style.backgroundColor = "rgb(40, 60, 117)";

        setTimeout(() => {
          numberOfDivs[randomNum].style.backgroundColor = "rgb(240, 147, 43)";

          if (i == 29) {
            numberOfDivs[randomNum].style.backgroundColor = "rgb(40, 60, 117)";
          }
        }, 100);
      }, 100 * i);
      //console.log((textarea.value = "Enter choices here..."));
      //numberOfDivs.style.backgroundColor = "rgb(240, 147, 43)";
      enterPressed = true;
      textarea.value = "";
      arrayOfCommas = [0];
      e.preventDefault();
    }
  }
}

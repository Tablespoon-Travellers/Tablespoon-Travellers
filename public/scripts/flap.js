// Set up flaps ////////////////////////////////////////////
speed = 0.2; // seconds

const endCountry =
  window.countries[Math.floor(Math.random() * window.countries.length)];
beginStr = "Welcome".toUpperCase().split("");
endStr = endCountry.name.toUpperCase().split("");
const link = document.getElementById("link");
link.href = `/countries/${endCountry._id}`;
// A-Z, 0-9, spaces only

amountOfFlaps =
  beginStr.length >= endStr.length ? beginStr.length : endStr.length;

div = document.querySelector(".center");
html = "";
for (var x = 0; x < amountOfFlaps; x++) {
  html +=
    '<div class=splitflap><div class="top"></div><div class="bottom"></div><div class="nextHalf"></div><div class="nextFull"></div></div>';
}

div.innerHTML = html;

// Set up more stuff ///////////////////////////////////////
a1 = document.querySelectorAll(".top");
a2 = document.querySelectorAll(".bottom");
b1 = document.querySelectorAll(".nextFull");
b2 = document.querySelectorAll(".nextHalf");
flapButton = document.getElementById("buttonFlap")
takeMeThere = document.getElementById("takeMeThere")
flapButton.onclick = startFlapping
takeMeThere.href = link.href;

for (var x = 0; x < a1.length; x++) {
  a2[x].style.animationDuration = speed + "s";
  b2[x].style.animationDuration = speed + "s";
}

// And even more ///////////////////////////////////////////
char = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  " ",
];

(strCount = []), (flag = []);

for (var x = 0; x < amountOfFlaps; x++) {
  if (beginStr.length != amountOfFlaps) {
    for (var x = 0; x < amountOfFlaps - beginStr.length; x++) {
      beginStr.push(" ");
    }
  } else if (endStr.length != amountOfFlaps) {
    for (var x = 0; x < amountOfFlaps - endStr.length; x++) {
      endStr.push(" ");
    }
  }
}
for (var x = 0; x < amountOfFlaps; x++) {
  strCount[x] = char.indexOf(beginStr[x]);
  (flag[x] = false), (flag2 = true);
}

let flapIntervalId;
// Flip them flaps /////////////////////////////////////////
function flap() {
  let done = true;
  for (var x = 0; x < amountOfFlaps; x++) {
    if (b1[x].innerHTML != endStr[x]) {
      done = false;
      break;
    }
  }
  for (var x = 0; x < amountOfFlaps; x++) {
    if (b1[x].innerHTML == endStr[x]) dontFlipIt(x);
    else flipIt(x);
  }
  if (done) {
    console.log('Donesies!')
    takeMeThere.removeAttribute("disabled")
    clearInterval(flapIntervalId);
    window.confetti();
  }
}
/*if (b1[x].innerHTML == endStr[x]) {
type="module"
}*/

function startFlapping() {
    flapIntervalId = setInterval(flap, speed * 1000);
}
for (var x = 0; x < amountOfFlaps; x++) {
  a1[x].innerHTML = char[strCount[x]];
  a2[x].innerHTML = char[strCount[x]];
  b1[x].innerHTML = char[strCount[x]];
  b2[x].innerHTML = char[strCount[x]];

  // a2[x].classList.remove("flip1");
  a2[x].offsetWidth = a2[x].offsetWidth;
  // a2[x].classList.add("flip1");
  // b2[x].classList.remove("flip2");
  b2[x].offsetWidth = b2[x].offsetWidth;
  // b2[x].classList.add("flip2");

  if (strCount[x] > char.length - 2) strCount[x] = 0;
  else strCount[x]++;
}

////////////////////////////////////////////////////////////
// Flap flipping functions /////////////////////////////////
////////////////////////////////////////////////////////////
function flipIt(x) {
  a1[x].innerHTML = char[strCount[x] == 0 ? char.length - 1 : strCount[x] - 1];
  a2[x].innerHTML = char[strCount[x] == 0 ? char.length - 1 : strCount[x] - 1];
  b1[x].innerHTML = char[strCount[x]];
  b2[x].innerHTML = char[strCount[x]];

  a2[x].classList.remove("flip1");
  a2[x].offsetWidth = a2[x].offsetWidth;
  a2[x].classList.add("flip1");
  b2[x].classList.remove("flip2");
  b2[x].offsetWidth = b2[x].offsetWidth;
  b2[x].classList.add("flip2");

  if (strCount[x] > char.length - 2) strCount[x] = 0;
  else strCount[x]++;
}

function dontFlipIt(x) {
  flag[x] = true;
  a2[x].classList.remove("flip2");
  a2[x].style.backgroundColor = "#3BB6eB";
  b2[x].style.backgroundColor = "#3BB6eB";
  a1[x].innerHTML = char[strCount[x] == 0 ? char.length - 1 : strCount[x] - 1];
  a2[x].innerHTML = char[strCount[x] == 0 ? char.length - 1 : strCount[x] - 1];
}

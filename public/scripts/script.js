let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let number = Math.ceil(Math.random() * 1000);

if (btn) {
	btn.onclick = function () {
		container.style.transform = "rotate(" + number + "deg)";
		number += Math.ceil(Math.random() * 5000);
	}
}
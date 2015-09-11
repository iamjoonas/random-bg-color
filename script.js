var buttonDiv = document.createElement("div");
buttonDiv.innerHTML = "Change Background Color";
buttonDiv.className = "button";

document.body.appendChild(buttonDiv);

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + "," + g + "," + b + ")";
}

buttonDiv.onclick = function() {
	document.body.style.backgroundColor = randomColor();
};

buttonDiv.click();
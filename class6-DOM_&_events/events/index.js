const title = document.querySelector("#title");
const eventType = "onclick"

function controlFunction(){
	title.style.color = "red";
}

function paintToGivenColor( color ){
	title.style.color = color;
}

const container = document.querySelector("#container");

const introduceText = () => {
	const textNode = document.createTextNode("Esto es mucho texto");
	container.appendChild(textNode);
}

const eventListener = document.querySelector("#container").addEventListener("onclick", introduceText)
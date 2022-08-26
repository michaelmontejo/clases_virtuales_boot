const container = document.getElementById("container");
container.innerHTML = "soy un Texto";

const containers = document.getElementsByClassName("box");
containers[2].innerHTML = "soy un container";

const title = document.getElementById("title");
const nodeText = document.createTextNode("soy un titulo");
title.appendChild(nodeText);

const spanContainer = document.querySelector("span");
const p = document.createElement("p");
spanContainer.appendChild(p);
const nodeText2 = document.createTextNode("soy un parrafo");
p.appendChild(nodeText2);
p.style.fontSize = "30px";
p.style.color = "red";

//p.classList.add("clase");

let container = document.getElementById("container");
document.body.style.backgroundColor = "lightblue";

function addRedP() {
    let hi = document.createElement('p');
    container.appendChild(hi);
    hi.innerHTML = "Hey I'm red!";
    hi.style.color = "red";
}

const addBlueH3 = function() {
    let blueh3 = document.createElement("h3");
    blueh3.innerHTML = "I'm a blue h3!";
    blueh3.style.color = "blue";
    container.append(blueh3);
}

const addPinkDiv = function() {
    let pinkDiv = document.createElement("div");
    pinkDiv.style.backgroundColor = "pink";
    pinkDiv.style.borderColor = "black";
    
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
    h1.innerHTML = "I'm in a div!";
    p.innerHTML = "ME TOO!!";
    pinkDiv.appendChild(h1);
    pinkDiv.appendChild(p);
    container.appendChild(pinkDiv);
}

addRedP();
addBlueH3();
addPinkDiv();
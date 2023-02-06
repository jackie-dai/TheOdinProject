/* 
    Rock: 0
    Paper: 1
    Scissors: 2

    rock --> scissors --> paper --> rock
*/

/* GLOBAL VARIABLES */
let graph = new DirectedGraph(3);
let choices = ["Rock", "Paper", "Scissors"];
let gameLoops = 5;
let map = new Map();

const ROCKBTN = document.getElementById("rockBtn");
const PAPERBTN = document.getElementById("paperBtn");
const SCISSORSBTN = document.getElementById("scissorsBtn");

const playerOptions = document.querySelectorAll(".choices");

playerOptions.forEach(choice => choice.addEventListener("click", game))

function setUp() {
    map.set("rock", 0);
    map.set("paper", 1);
    map.set("scissors", 2);
    graph.connect(0, 2);
    graph.connect(2, 1);
    graph.connect(1, 0);
}

function getComputerChoice() {
    let computerDraw = Math.floor(Math.random() * 3);
    return computerDraw
}

function playRound(playerChoice, computerChoice) {
    let result; 
    if (playerChoice == computerChoice) {
        result = 0;
    } else {
        if (graph.connected(playerChoice, computerChoice)) {
            result = 1;
        } else {
            result = 2;
        }
    }
    return [result, playerChoice, computerChoice];
}

function game(e) {
    console.log(e.target);
    for (let i = 0; i < gameLoops; i++) {
        let results = playRound(map.get(e), getComputerChoice());
        
        switch (results[0]) {
            case 0:
                console.log("Tie.");
                break;
            case 1:
                console.log("You win! " + choices[results[1]] + " beats " + choices[results[2]]);
                break;
            case 2:
                console.log("You lose! " + choices[results[2]] + " beats " + choices[results[1]]);
                break;
        }
    }
}


function main() {
    setUp();
    //game();
}

main();



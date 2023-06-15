/*----- constants -----*/
const AUDIO = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-simple-countdown-922.mp3');

const RPS_LOOKUP = {
    r: 'img/rock.png', 
    p: 'img/paper.png', 
    s: 'img/scissor.png' 
};

/*----- app's state (variables) -----*/
//the data that has to be remembered while the game/app is running
//essentially global variables 

//player win score
//computer win score
//tied game score
//rock paper and scissors being played/chosen
//data structures to hold multiple data - array and objects
//outcome of the game

let scores; //object where p is player, c is computer, and t is tie
let results; //object key of p is player result and so on. values of rock, paper and scissor
let winner; //string to show who won


/*----- cached element references -----*/

const pResultEl = document.getElementById('p-result');
const cResultEl = document.getElementById('c-result');


/*----- event listeners -----*/


/*----- functions -----*/
init();

//job of init function is to initialize all state then call render();

function init() {
    //what inputs do we need to define our parameters 
    //call the functions
    scores = {
        p: 0,
        c: 0,
        t:0
    }
    results = {
        p: 'r',
        c: 'r',
    };
    winner = 't';
    render();
}

function render(){
    renderScores();
    renderResults();
}

function renderScores(){
    for (let key in scores) {
        
        const scoreEl = document.getElementById(`${key}-score`);
        scoreEl.innerText = scores[key];
    }
}

function renderResults() {
    pResultEl.src = RPS_LOOKUP[results.p];
    cResultEl.src = RPS_LOOKUP[results.c];
}
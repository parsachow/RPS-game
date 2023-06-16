/*----- constants -----*/
const AUDIO = new Audio('https://assets.mixkit.co/sfx/preview/mixkit-simple-countdown-922.mp3');


const RPS_LOOKUP = {
    r: {img: 'img/rock.png', beats: 's'},
    p: {img: 'img/paper.png', beats: 'r'},
    s: {img: 'img/scissor.png', beats: 'p'}
};



/*----- app's state (variables) -----*/
//the data that has to be remembered while the game/app is running
//essentially global variables 

//player win score
//computer win score
//tied game score
//rock paper and scissors being played/chosen
//data structures to hold multiple data - array and objects
//result of the game

let scores; //object where p is player, c is computer, and t is tie
let results; //object key of p is player result and so on. values of rock, paper and scissor
let winner; //string to show who won



/*----- cached element references -----*/

const pResultEl = document.getElementById('p-result');
const cResultEl = document.getElementById('c-result');



/*----- event listeners -----*/
//event delegation for multiple events
document.querySelector('main').addEventListener('click', handleChoice);



/*----- functions -----*/
init();

//job of init function is to initialize all state then call render();

function init() {
    //what inputs do we need to define our parameters? yes? no?
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


//render function should transfer/visualize all impacted state
function render(){
    renderScores();
    renderResults();
}


function handleChoice(evt){
    //in resposnse to the player interaction, we update all impacted state. was a button clicked? or something else? then call render()
   
   if(evt.target.tagName !== "BUTTON") return;

   //player made a choice
   results.p = evt.target.innerText.toLowerCase();

   //compute random choice for computer
    results.c = getRandomRPS();
    winner = getWinner();
    scores[winner]++;

   render();
}


function getWinner() {
    //if there is a tie
    if(results.p === results.c) return 't';

    return RPS_LOOKUP[results.p].beats === results.c ? 'p' : 'c';
}


function getRandomRPS() {
    //we can call static methods in classes
    const rps = Object.keys(RPS_LOOKUP);
    const randomIdx = Math.floor(Math.random() * rps.length);
    return rps[randomIdx];
}


function renderScores(){
    for (let key in scores) {
        
        const scoreEl = document.getElementById(`${key}-score`);
        scoreEl.innerText = scores[key];
    }
}


function renderResults() {

    pResultEl.src = RPS_LOOKUP[results.p].img;
    cResultEl.src = RPS_LOOKUP[results.c].img;
    pResultEl.style.borderColor = winner === 'p' ? 'grey' : 'white';
    cResultEl.style.borderColor = winner === 'c' ? 'grey' : 'white';
    
}
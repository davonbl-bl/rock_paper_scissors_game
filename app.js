//emotionally stable, aggreeable, extrovert (being speakable)

const numOfGames = document.querySelector('#clickGamesBtn');
const displayNumber = document.querySelector('#numOfGames');


const pressForGames = document.querySelector('#decideGames')
//when pressing the keys for a number
pressForGames.addEventListener('keydown', enterForGames)

function enterForGames(){
    
    console.log('keydown')
    // const displayNumber = document.querySelector('#numOfGames');
    const getNumber = pressForGames.value;

    if(!isNaN(getNumber) && getNumber > 0){
        numOfGames.disabled = true;
        console.log(getNumber)
        displayNumber.innerText = getNumber; 
        return getNumber; 
    }

    console.log('getting a very interesting error')
    numOfGames.disabled = false;
    console.log(parseInt(getNumber))


    // if(e.key === "Enter"){
    //     if(!isNaN(getNumber)){
    //         console.log(getNumber)
    //         console.log('hello world')
    //         displayNumber.innerText = getNumber; 
    //         // return getNumber
    //         numOfGames.disabled = true;
    //         beginGame(getNumber)
    //     }else{
    //         console.log('not a number')
    //     }
        
    // } 
}
numOfGames.addEventListener('click', clickForGames)

function clickForGames(){
    
    const chooseNum = document.querySelector('#decideGames');
    const getValue = chooseNum.value;

    displayNumber.innerText = getValue; 

    if(!isNaN(getValue) && getValue > 0){
        numOfGames.disabled = true;
        console.log(getValue)
        return getValue; 
    }

    console.log('getting a very interesting error')
    numOfGames.disabled = false;
    console.log(parseInt(getValue))

    
}

const cpuChooses = () => {
    const cpuChoice = Math.floor(Math.random() * 99);
    let shareCpuChoice; 
    let cpuChoiceImg = document.querySelector('#appendCpuImg');
    cpuChoiceImg.style.width = '70%'
    console.log(cpuChoice);

    if(cpuChoice <= 33){
        cpuChoiceImg.src = "./images/rock-2.jpg";
        shareCpuChoice = 'rock'

    } else if(cpuChoice <= 66){
        cpuChoiceImg.style.width = '40%'
        cpuChoiceImg.src = "./images/paper.jpg";
        shareCpuChoice = 'paper'
    }else if(cpuChoice <= 99){
        cpuChoiceImg.src = "./images/scissors.jpg";
        shareCpuChoice = 'scissors'
    } else{
        console.log('error'); 
    }

    return { 
        option: shareCpuChoice,
        optionImg : cpuChoiceImg
    }
}


const rock = document.querySelector('#clickRock');
const paper = document.querySelector('#clickPaper');
const scissors = document.querySelector('#clickScissors');

rock.addEventListener('click', clickRock);
paper.addEventListener('click', clickPaper);
scissors.addEventListener('click', clickScissors)

function clickRock(){
    let chooseRock = 'rock';
    const rockImg = document.querySelector('#appendImg');
    rockImg.src = "./images/rock-2.jpg";
    rockImg.style.width = '70%';
    cpuVsPlayer(chooseRock);
    
}

function clickPaper(){
    let choosePaper = 'paper'
    const paperImg = document.querySelector('#appendImg');
    paperImg.src = "./images/paper.jpg";
    paperImg.style.width = '40%';
    cpuVsPlayer(choosePaper);
}


function clickScissors(){
    let chooseScissors= 'scissors';
    const scissorsImg = document.querySelector('#appendImg');
    scissorsImg.src = "./images/scissors.jpg"; 
    scissorsImg.style.width = '70%';
    cpuVsPlayer(chooseScissors)
}

function beginGame(numofGames){
    const clickForGame = numofGames;
    const pressForGame = numofGames;
    return{
        click: clickForGame,
        press: pressForGame
    }
}

let cpuScore = 0; 
let playerScore = 0; 

let cpuDisplayScore = document.querySelector('#cpuNumbers');
let playerDisplayScore = document.querySelector('#playerNumbers');
let getCurrentWinner = document.querySelector('#getWinner')

function cpuVsPlayer(playerChoice){


    let cpuOption = cpuChooses();

    if(playerChoice === 'rock' && cpuOption.option === 'scissors'
    || playerChoice === 'scissors' && cpuOption.option === 'paper'
    || playerChoice === 'paper' && cpuOption.option === 'rock'){
        playerScore = playerScore + 1;
        console.log('player score: ' + playerScore)
        playerDisplayScore.innerText = playerScore
        getCurrentWinner.innerText = 'Player One Wins';

        soHumanPlayer(playerScore)
        return playerChoice

        }else if(cpuOption.option === 'rock' && playerChoice === 'scissors'
        || cpuOption.option === 'scissors' && playerChoice === 'paper'
        || cpuOption.option === 'paper' && playerChoice === 'rock'){
            cpuScore++
            cpuDisplayScore.innerText = cpuScore
            getCurrentWinner.innerText = 'CPU Wins';
            soCpuPlayer(cpuScore)

            return cpuScore
        }else{
            console.log('tie')
            getCurrentWinner.innerText = "It's a tie";
        }


}

function soHumanPlayer(getWinner){
    const reachThisScore = parseInt(clickForGames());
    const reachThisScore2 = parseInt(enterForGames());

    console.log(typeof clickForGames())
    console.log(reachThisScore)

    const chooseNum = document.querySelector('#decideGames');
    let getValue = chooseNum.value;

    // console.log('num of Games --->' + getValue)

    let officalPlayerScore = getWinner; 
    let clearImg = document.querySelector('#appendImg')
    let cpuChoiceImg = document.querySelector('#appendCpuImg');

    if(officalPlayerScore === reachThisScore 
        || officalPlayerScore === reachThisScore2){
        alert('PLAYER WINS THE GAME');
        numOfGames.disabled = false;
        cpuScore = 0; 
        playerScore = 0; 
        cpuDisplayScore.innerText = '';
        playerDisplayScore.innerText = '';
        getCurrentWinner.innerText = 'Who will win?'
        displayNumber.innerText ='_';

        chooseNum.value = ''; 
        clearImg.src = ''
        cpuChoiceImg.src =''
    }else{
        console.log('continue the game')
    }
}

function soCpuPlayer(getWinner){
    const reachThisScore = parseInt(clickForGames());
    const reachThisScore2 = parseInt(enterForGames()); 

    let officalCpuScore = getWinner; 

    console.log(reachThisScore)

    const chooseNum = document.querySelector('#decideGames');
    let getValue = chooseNum.value;


    let cpuChoiceImg = document.querySelector('#appendCpuImg');
    let clearImg = document.querySelector('#appendImg')

    if(officalCpuScore === reachThisScore
        || officalCpuScore === reachThisScore2){
        alert('CPU WINS THE GAME');
        numOfGames.disabled = false;
        cpuScore = 0; 
        playerScore = 0; 
        cpuDisplayScore.innerText = '';
        playerDisplayScore.innerText = '';
        getCurrentWinner.innerText = 'Who will win?'
        displayNumber.innerText ='_';
        

        chooseNum.value = ''; 
        cpuChoiceImg.src = '';
        clearImg.src =''

    }else{
        console.log('continue the game')
    }
}


/*



comparing the conditional statements
--clicking the amount of games
--. have to disable button soon after decide amount of games
-- keep in mind to reset game and active the choose number of games
once again 


*/

// cpuChooses();
// cpuChooses(); 
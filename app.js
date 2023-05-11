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
    // console.log(event)
    // beginGame(getValue)

    if(!isNaN(getValue) && getValue > 0){
        numOfGames.disabled = true;
        console.log(getValue)
        return getValue; 
    }

    console.log('getting a very interesting error')
    numOfGames.disabled = false;
    console.log(parseInt(getValue))
    // return getValue; 

    // if(event.isTrusted === true && getValue !== ''){
    //     console.log('testing')
    //     numOfGames.disabled = true;
    //     // beginGame(getValue)
    //     return getValue; 
    //     //best to create
    //     console.log('other testing')
    // }



    // if(numOfGames.disabled === false){
    //     console.log('hello')
    //      
    // } else {
    //     console.log('it is not working')
    // }
    // console.log(getValue); 

    // return getValue; 

    //studying human psychology and the dynamatic 
    
}

// numOfGames.addEventListener('pressdown')

// const numOfGames = () => {

// }


const cpuChooses = () => {
    const cpuChoice = Math.floor(Math.random() * 99);
    let shareCpuChoice; 
    let cpuChoiceImg = document.querySelector('#appendCpuImg');
    cpuChoiceImg.style.width = '70%'
    console.log(cpuChoice);
    // console.log('hello world')

    if(cpuChoice <= 33){
        // console.log('rock');

        cpuChoiceImg.src = "./images/rock-2.jpg";
        shareCpuChoice = 'rock'

    } else if(cpuChoice <= 66){
        // console.log('paper');
        cpuChoiceImg.style.width = '40%'
        cpuChoiceImg.src = "./images/paper.jpg";
        shareCpuChoice = 'paper'
    }else if(cpuChoice <= 99){
        // console.log('scissors');
        cpuChoiceImg.src = "./images/scissors.jpg";
        shareCpuChoice = 'scissors'
    } else{
        console.log('error'); 
    }

    return { 
        option: shareCpuChoice,
        optionImg : cpuChoiceImg
    }
    // const cpuChoice = document.querySelector('#clickRock');
}

// cpuChooses();
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

    // console.log('TESTING: ' + clickForGame)
    // console.log('TESTING2: ' + pressForGame)
}

let cpuScore = 0; 
let playerScore = 0; 

let cpuDisplayScore = document.querySelector('#cpuNumbers');
let playerDisplayScore = document.querySelector('#playerNumbers');
let getCurrentWinner = document.querySelector('#getWinner')

function cpuVsPlayer(playerChoice){

    // let cpuDisplayScore = document.querySelector('#cpuNumbers');
    // let playerDisplayScore = document.querySelector('#playerNumbers');
    
    

    let cpuOption = cpuChooses();

    if(playerChoice === 'rock' && cpuOption.option === 'scissors'
    || playerChoice === 'scissors' && cpuOption.option === 'paper'
    || playerChoice === 'paper' && cpuOption.option === 'rock'){
        // debugger; 
        playerScore = playerScore + 1;
        console.log('player score: ' + playerScore)
        // playerDisplayScore.innerText = parseInt(playerChoice)
        playerDisplayScore.innerText = playerScore
        getCurrentWinner.innerText = 'Player One Wins';

        soHumanPlayer(playerScore)
        return playerChoice
        // getWinner(playerScore)

        // return playerScore
        }else if(cpuOption.option === 'rock' && playerChoice === 'scissors'
        || cpuOption.option === 'scissors' && playerChoice === 'paper'
        || cpuOption.option === 'paper' && playerChoice === 'rock'){
            cpuScore++
            cpuDisplayScore.innerText = cpuScore
            getCurrentWinner.innerText = 'CPU Wins';
            soCpuPlayer(cpuScore)
            // getWinner(cpuScore)
            // getWinner()
            // return cpuScore
            return cpuScore
        }else{
            console.log('tie')
            getCurrentWinner.innerText = "It's a tie";
            // getWinner()
        }

        // return{
        //     humanPlayer: praseInt(playerScore),
        //     cpuPlayer: parseInt(cpuScore)
        // }

}

function soHumanPlayer(getWinner){
    const reachThisScore = parseInt(clickForGames());
    const reachThisScore2 = parseInt(enterForGames());

    // const resetGame = pressForGames.value; 
    // const clickForScore = reachThisScore.click
    // const pressForScore = reachThisScore.press

    console.log(typeof clickForGames())
    console.log(reachThisScore)

    const chooseNum = document.querySelector('#decideGames');
    let getValue = chooseNum.value;

    // console.log('num of Games --->' + getValue)

    // const getTheWinner = cpuVsPlayer(); 
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
    // const clickForScore = reachThisScore.click;
    // const pressForScore = reachThisScore.press;
    // const resetGame = pressForGames.value; 
    // console.log('TRACKING GAME: ' + resetGame)

    // const getTheWinner = getWinner;  
    let officalCpuScore = getWinner; 

    // console.log(typeof beginGame())
    // console.log('what is it:::' + beginGame())
    console.log(reachThisScore)

    const chooseNum = document.querySelector('#decideGames');
    let getValue = chooseNum.value;

    // console.log('num of Games --->' + getValue)

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

// function getWinner(){
//     const reachThisScore = beginGame();
//     const clickForScore = reachThisScore.click
//     console.log(clickForScore)
//     const pressForScore = reachThisScore.press

//     const getTheWinner = cpuVsPlayer(); 
//     let officalPlayerScore = getTheWinner.humanPlayer;
//     let officalCpuScore = getTheWinner.cpuPlayer;

//     if(officalCpuScore === clickForScore){
//         alert('CPU WINS THE GAME');
//     } 
//     // else if(officalPlayerScore === clickForScore || officalPlayerScore === pressForScore){
//     //     alert('PLAYER WINS THE GAME')
//     // } 
    
//     else{
//         console.log('the game is still going')
//     }

// }

/*

lustful sex - let the fuck go

ersioious spot

comparing the conditional statements
--clicking the amount of games
--. have to disable button soon after decide amount of games
-- keep in mind to reset game and active the choose number of games
once again 



--> having a particular aura
--> dealing with them in terms of energy 

*/

// cpuChooses();
// cpuChooses(); 
//emotionally stable, aggreeable, extrovert (being speakable)

const numOfGames = document.querySelector('#clickGamesBtn');



const pressForGames = document.querySelector('#decideGames')
//when pressing the keys for a number
pressForGames.addEventListener('keydown', enterForGames)

function enterForGames(e){
    
    console.log('keydown')
    const displayNumber = document.querySelector('#numOfGames');
    const getNumber = pressForGames.value;
    if(e.key === "Enter"){
        if(!isNaN(getNumber)){
            console.log(getNumber)
            console.log('hello world')
            displayNumber.innerText = getNumber; 
            // return getNumber
            numOfGames.disabled = true;
            beginGame(getNumber)
        }else{
            console.log('not a number')
        }
        
    } 
}
numOfGames.addEventListener('click', clickForGames)

function clickForGames(event){
    
    const chooseNum = document.querySelector('#decideGames');
    const getValue = chooseNum.value;

    const displayNumber = document.querySelector('#numOfGames');
    displayNumber.innerText = getValue; 
    console.log(event)
    // beginGame(getValue)
    if(event.isTrusted === true && getValue !== ''){
        console.log('testing')
        numOfGames.disabled = true;
        beginGame(getValue)
    } else{
        //best to create
        console.log('other testing')
    }



    // if(numOfGames.disabled === false){
    //     console.log('hello')
    //      
    // } else {
    //     console.log('it is not working')
    // }
    console.log(getValue); 

    return getValue; 

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
        console.log('rock');

        cpuChoiceImg.src = "./images/rock-2.jpg";
        shareCpuChoice = 'rock'

    } else if(cpuChoice <= 66){
        console.log('paper');
        cpuChoiceImg.style.width = '40%'
        cpuChoiceImg.src = "./images/paper.jpg";
        shareCpuChoice = 'paper'
    }else if(cpuChoice <= 99){
        console.log('scissors');
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

function cpuVsPlayer(playerChoice){
    let cpuScore = 0;
    let cpuDisplayScore = document.querySelector('#cpuNumbers');
    let playerScore = 0;
    let playerDisplayScore = document.querySelector('#playerNumbers')
    

    let cpuOption = cpuChooses();

    if(playerChoice === 'rock' && cpuOption.option === 'scissors'
    || playerChoice === 'scissors' && cpuOption.option === 'paper'
    || playerChoice === 'paper' && cpuOption.option === 'rock'){
        playerScore++;
        playerDisplayScore.innerText = parseInt(playerChoice)
        }else if(cpuOption.option === 'rock' && playerChoice === 'scissors'
        || cpuOption.option === 'scissors' && playerChoice === 'paper'
        || cpuOption.option === 'paper' && playerChoice === 'rock'){
            cpuScore++
            cpuDisplayScore.innerText = parseInt(cpuScore)
        }



}

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
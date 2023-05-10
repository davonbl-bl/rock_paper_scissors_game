//emotionally stable, aggreeable, extrovert (being speakable)

const numOfGames = document.querySelector('#clickGamesBtn');
numOfGames.addEventListener('click', (event)=> {
    const chooseNum = document.querySelector('#decideGames');
    const getValue = chooseNum.value;

    const displayNumber = document.querySelector('#numOfGames');
    displayNumber.innerText = getValue; 
    console.log(event)
    if(event.isTrusted === true && getValue !== ''){
        console.log('testing')
    } else{
        //best to create
        console.log('other testing')
    }
    // if(numOfGames.disabled === false){
    //     console.log('hello')
    //     numOfGames.disabled = true; 
    // } else {
    //     console.log('it is not working')
    // }
    console.log(getValue); 

    //studying human psychology and the dynamatic 
})

// const numOfGames = () => {

// }

numOfGames

const cpuChooses = () => {
    const cpuChoice = Math.floor(Math.random() * 99);
    let cpuChoiceImg = document.querySelector('#appendCpuImg');
    cpuChoiceImg.style.width = '70%'
    console.log(cpuChoice);
    // console.log('hello world')

    if(cpuChoice <= 33){
        console.log('rock');

        cpuChoiceImg.src = "./images/rock-2.jpg";

    } else if(cpuChoice <= 66){
        console.log('paper');

        cpuChoiceImg.src = "./images/paper.jpg";
    }else if(cpuChoice <= 99){
        console.log('scissors');

        cpuChoiceImg.src = "./images/scissors.jpg";
    } else{
        console.log('error'); 
    }

    return { 
        option: cpuChoice,
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
    console.log('rock');
    const rockImg = document.querySelector('#appendImg');
    rockImg.src = "./images/rock-2.jpg";
    rockImg.style.width = '70%';
}

function clickPaper(){
    console.log('paper');
    const paperImg = document.querySelector('#appendImg');
    paperImg.src = "./images/paper.jpg";
    paperImg.style.width = '40%';
}


function clickScissors(){
    console.log('scissors');
    const scissorsImg = document.querySelector('#appendImg');
    scissorsImg.src = "./images/scissors.jpg"; 
    scissorsImg.style.width = '70%';
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
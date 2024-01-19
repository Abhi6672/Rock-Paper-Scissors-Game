let userScore =0;
let compScore=0;

const choices = document.querySelectorAll(".choice");

const generateCompChoice =() =>{
    const options =["rock","paper","scissor"];
    const randIdx = Math.floor( Math.random()*3);
    return options[randIdx];
};

const drawGame =() =>{
    console.log("game was draw");
}

const showWinner =(userWin) =>{
   if(userWin){
    console.log("You Win!")
   }
   else{
    console.log("You Loose !")
   }
}

const playGame = (userChoice)=> {
    console.log("user choice=",userChoice);
    //generate compChoice
    const compChoice = generateCompChoice();
    console.log("comp choice=",compChoice );
}

    if(userChoice === compChoice){
        //Draw game
        drawGame();
    } else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors , paper  
          userWin =  compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            //rock , scissors
          userWin =   compChoice === "scissors" ? false :true
    } else{
        //rock , paper
        userWin =   compChoice === "rock" ? false :true
    }
    showWinner(userWin);
}

choices.forEach((choice) => {
    choice.addEventListner("click", ()=>{
    const choiceId = getAttribute("id");
    playGame(userChoice);
    });
});
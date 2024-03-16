let userScore = 0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const rancomputerChoice= ()=>{
    let options=["rock","Paper","Scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText="you win!";
        msg.style.backgroundColor="green";
        msg.style.color="white";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText="you lose!"
        msg.style.backgroundColor="red";
        msg.style.color="white";
    }
};

const playGame = (userChoice)=>{
    const compChoice=rancomputerChoice();
    if(userChoice===compChoice){
        msg.innerText="Game is draw. Play again!";
         msg.style.backgroundColor="#081b31";
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin= compChoice==="Paper"?false:true;
        }
        else if(userChoice==="Paper"){
        userWin=compChoice==="Scissor"? false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin)
    }
};




choices.forEach((choice)=> {
    choice.addEventListener(("click"),()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
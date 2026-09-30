let h2 = document.querySelector("h2");
let btns = ["yellow","red","green","purple"];

let gameSeq = [];
let userSeq = [];

let started = false ;
let level = 0;

document.addEventListener ("keypress" ,()=>{
   if(started == false){
    console.log("Game started");
    started = true;

    levelup();
   }
    
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    },250);
}


function levelup(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    console.log(h2.innerText);

    let ranIdx = Math.floor(Math.random()*3);
    let ranColor = btns[ranIdx];
    let ranBtn = document.querySelector(`.${ranColor}`);
    // console.log(ranIdx);
    // console.log(ranColor);
    // console.log(ranBtn);
    gameSeq.push(ranColor);
    console.log(gameSeq);
    gameFlash(ranBtn);
}
function checkAns(idx){
    // console.log("curr level : ",level)

    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelup,1000);
        }
        
    }else{
        h2.innerHTML = `Game over!Your Score was <b>${level}</b> press any key to start.`;
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    // console.log(userColor)
    userSeq.push(userColor);
    // console.log(userSeq);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);   
}

function reset(){
    started = false;
    level = 0; 
    userSeq = [];
    gameSeq =[];

}

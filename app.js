let gameSq=[];
let userSq = [];
let h2 = document.querySelector('h2');
let started = false;
let level = 0;
let score = document.getElementById('#highestScore');

let btns =['red','yellow','green','purple'];
let highestScore = [];

document.addEventListener('keypress',function(){
    if(started==false){
        // console.log('game is started')
        started=true;

        levelUp();

    }
});

function gameFlash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash')
    },100)
}
function userFlash(btn){
    btn.classList.add('userflash');
    setTimeout(function(){
        btn.classList.remove('userflash')
    },100)
}

function levelUp(){
    userSq=[];
    level++;
    h2.innerText = `Level ${level}`;
    // random button needs to be clicked
    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSq.push(randColor);
    // console.log(gameSq)
    gameFlash(randBtn);
}

function checkAns(idx){
     if (userSq[idx]===gameSq[idx]){
        if(userSq.length==gameSq.length){
            setTimeout(levelUp,1000);
        }      
     }else{
        h2.innerHTML=`Game Over! <b>Your score is ${level}</b> <br>Press any key to start`;
        document.querySelector('body').style.backgroundColor='Red';
        setTimeout(function(){
         document.querySelector('body').style.backgroundColor='White';  
        },200);
        reset();
     }
}

function btnPress(){
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute('id');
    userSq.push(userColor);
    checkAns(userSq.length-1);
}
let allBtns = document.querySelectorAll('.btn');
 
for(btn of allBtns){
    btn.addEventListener('click',btnPress);
}



let Reset = 0
function reset(){
    // highestScore.push(level); // Add the level to highestScore array
    //     let max = highestScore.reduce((max, el) => {
    //     if (el > max) {
    //         return el;
    //     } else {
    //         return max;
    //     }
    // }, 0); // Specify an initial value for reduce, e.g., 0
    // score.innerText = `Highest Score = ${max}`; 
    started = false;
    gameSq = [];
    userSq = [];
    level = 0;
    reset++;
    console.log(res)
}

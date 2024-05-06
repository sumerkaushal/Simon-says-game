let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let h2 = document.querySelector('h2');
let btns = ['red', 'yellow','green','purple'];

document.addEventListener('keypress',function(){
   if(started === false){
    console.log("game has started");
    started = true;

    levelUp();
   }
});

function gameFlash(btn){
btn.classList.add("flash");
setInterval(function(){
   btn.classList.remove("flash")
},250)
}

function userFlash(btn){
   btn.classList.add("flash");
   setInterval(function(){
      btn.classList.remove("flash")
   },250)
   }

function levelUp(){
   userSeq = [];
   level++;
   h2.innerText = `Level ${level}`;
   let randomIdx = Math.floor(Math.random()*3);
   let randomCol = btns[randomIdx];
   let randomBtn = document.querySelector(`.${randomCol}`)
   gameSeq.push(randomCol)
   console.log(gameSeq);
   gameFlash(randomBtn);
}

function checkAns(idx){
   console.log("current level : ", level);
   if(gameSeq[idx] === userSeq[idx]){
      if(gameSeq.length === userSeq.length){
       setTimeout(levelUp,500)
      }
   } else{
     h2.innerHTML =  `Game over! Your score was <b>${level}</b> <br> Press any key to start`;
     document.querySelector("body").style.backgroundColor = "red"
     setTimeout(function(){
      document.querySelector("body").style.backgroundColor = "white"
     },150);
     toReset();
   }
}

function btnPressed(){
   let btn = this
   gameFlash(btn);

   userColor = btn.getAttribute("id");
   console.log(userColor);
   userSeq.push(userColor);
   checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
   btn.addEventListener("click",btnPressed)
}

function toReset(){
   level = 0;
   started = false;
   gameSeq = [];
   userSeq = [];

}
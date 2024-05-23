let gameseq =[];
let userseq =[];
let started = false;
let level =0;
let h3 =document.querySelector("h3");
let color =["yellow","blue","green","purple"];
let startbtn= document.querySelector(".startbtn");
startbtn.addEventListener("click",function(){
  if(started == false){
    // console.log("Game Started");
    started = true;
    document.querySelector("h3").style.color="#34A7B2";
    levelup();
  }
});
// document.addEventListener("keypress",function(){
//   if(started == false){
//     // console.log("Game Started");
//     started = true;
//     document.querySelector("h3").style.color="#34A7B2";
//     levelup();
//   }
// });
function btnFlash(btn){
  btn.classList.add("ranflash");
  setTimeout(function(){
    btn.classList.remove("ranflash");
  },200);

}
function userbtnFlash(btn){
  btn.classList.add("userflash");
  setTimeout(function(){
    btn.classList.remove("userflash");
  },200);

}
function levelup(){
  userseq=[];
  level++;
  h3.innerText = `Level ${level}`;
  let idx= Math.floor(Math.random()*3);
  let rancolor = color[idx];
  gameseq.push(rancolor);
  console.log(gameseq);
  // console.log(rancolor);
  let ranbtn = document.querySelector(`.${rancolor}`);
  // console.log(ranbtn);
  btnFlash(ranbtn);
};
function checkans(idx){
  if (userseq[idx]==gameseq[idx]){
    if(userseq.length==gameseq.length){
      setTimeout(levelup,1000);
    }
  }else{
    h3.innerHTML=`Game Over! Your Score is<b> ${level}</b>. <br> Press Start Game to Start again`;
     gameseq =[];
 userseq =[];
 started = false;
 level =0;
document.querySelector("body").style.backgroundColor="red";
setTimeout(function(){
  document.querySelector("body").style.backgroundColor="white";
},150);
document.querySelector("body").style.backgroundColor="red";
  }

}
function btnpress(){
  let btn = this;
  userbtnFlash (btn);
  usercolor = btn.getAttribute("id");
  userseq.push(usercolor);
  console.log(userseq);
  checkans(userseq.length-1);
  
}
let allbtns=document.querySelectorAll(".box");
for (btn of allbtns){
  btn.addEventListener("click",btnpress);
}



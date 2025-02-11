let boxes=document.querySelectorAll(".buttom");
let rstbn=document.querySelector("#rst-bn");
let newbtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msgcontainer");
let turn0=document.querySelector(".turn0");
let turnX=document.querySelector(".turnX");
let hero=document.querySelector(".hero");
let duck1=document.querySelector(".duck");
// let duck1=document.querySelector(".duck1");
// let duck2=document.querySelector(".duck2");
let turnO=true;
let ansh=true;
let f=0;
let count=0;
let draw=false;
let audio22=true;
let musicplayer=false;
const winpattern=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8],];

boxes.forEach((box)=>{
    if(f==0){
        turnX.classList.add("hide");
    }
    f++;
    box.addEventListener("click",()=>{
        // console.log("box was clicked");
        audioTurn.play();
        count++;
        if(turnO){
            box.innerText="0";
            box.style.color="white";
            turn0.classList.add("hide");
            turnX.classList.remove("hide");

          turnO=false;
            
        }else{
            box.innerText="X";
            box.style.color="black";
            turnO=true;
            turnX.classList.add("hide");
            turn0.classList.remove("hide");
        }
        box.disabled=true;
        checkwinner();
        // console.log(count);//dncjdbhfffkmn 
    }
    );
});
const checkwinner=()=>{

    for(let pattern of winpattern){
       let val0= boxes[pattern[0]].innerText;
       let val1= boxes[pattern[1]].innerText;
       let val2= boxes[pattern[2]].innerText;
    if(val0!="" && val1!="" && val2!=""){
    if(val0==val1 && val1==val2){  
        audio22=false;//for pause of audio2 on win2 play
        audio2.pause(); 
        audio3.play();
        winout(val1);
    }}
    }   
}
// if(count==1){
//     console.log(count);//count checking
// }

const winout=(val1)=>{
    ansh=false;
    f=0;
    turnX.classList.add("hide");
    turn0.classList.add("hide");
    msgcontainer.classList.remove("hide");
    rstbn.style.display="none";
    winbox.innerText=`winner is ${val1}`;
    animation();
    disableboxes();

   
  
    // draw=true;    
}
//animation here
function animation(){
hero.classList.add("hide");
duck1.style.display="block";
// duck1.style.background="red";
duck1.getElementsByTagName('img')[0].style.width = "200px";

}
// console.log("jbsc");
// if(count==2){
//     console.log("draw");//dcmfdlfknf 
// }

// if(draw==false){
//    if(count==9){
//     console.log("draw");
//     winbox.innerText="Draw";//fjnfknjf
//    }
// }

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const resetGame=()=>{
    count=0;
    turnO=true;
    f=0;
    enableboxes();
    rstbn.style.display="block";
    msgcontainer.classList.add("hide");
    turnX.classList.add("hide");
    hero.classList.remove("hide");
    duck1.style.display="none";
    fbox();
    if(audio22==false && musicplayer==true){
        audio2.play();
        audio22=true;
    }
};
newbtn.addEventListener("click",resetGame);
rstbn.addEventListener("click",resetGame);
const fbox=()=>{
    turn0.classList.remove("hide");
}
//background=music
let audioTurn = new Audio("ting.mp3");
let audio2 = new Audio("music.mp3");
let audio3 = new Audio("win2.mp3");
let musicbtn=document.querySelector(".music-btn");

musicbtn.addEventListener("click",play_music);
let musicplay=true;
function play_music(){
   if(musicplay==true){
   musicplayer=true;
   musicplay=false;
   musicbtn.style.background="pink";
   audio2.play();
    }else{
        musicbtn.style.background="#7d278a";
        musicplayer=false;
        audio2.pause();
        musicplay=true;
    }
}
//background animation

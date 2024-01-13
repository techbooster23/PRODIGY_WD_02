let min = document.querySelector("#min");
let sec = document.querySelector("#sec");
let microSec = document.querySelector("#m-sec");
let playbtn = document.querySelector("#play");
let pausebtn = document.querySelector("#pause");
let resumebtn = document.querySelector("#resume");
let resetbtn = document.querySelector("#reset");
let totalLaps = document.querySelectorAll(".lap-no");
let lapTimes = document.querySelectorAll(".lap-time");
let lapbtn = document.querySelector("#lapbtn");
let m = 1; // for minutes
let s = 1; // for sec
let mS = 0; // for milli-sec
let lapCount = 0;
let play = false;

playbtn.addEventListener("click",() =>{
      play = true;
      displayBlock(pausebtn);
      displayBlock(resetbtn);
      displayBlock(lapbtn);
      displayNone(playbtn);
       setSec();
       setMicroSec();
       setMin();  
});

pausebtn.addEventListener("click",() =>{
    displayNone(pausebtn); 
     displayBlock(resumebtn);
     play = false ;
});

resumebtn.addEventListener("click",() => {
        play = true;
        displayBlock(pausebtn);
        displayNone(resumebtn); 
});
resetbtn.addEventListener("click",() => {
    window.location.reload(); 
});
lapbtn.addEventListener("click",() => {
    if (lapCount === 10) {
        alert("you reached the max lap limit");
    }
     displayBlock(totalLaps[lapCount]);
    lapTimes[lapCount] .style.display="block";
    totalLaps[lapCount].innerText = `🚩`;
    lapTimes[lapCount].innerText = `${m-1}:${s-1}:${mS-1}`;
    lapCount ++;
     
});

let setSec = () => {
    setInterval(() => {
        if(play === false){
            return 0;
          }
        if (s === 59) {
            s = 1;
        }
        sec.innerText =`${s++}:`;
    }, 1000);
}


let setMicroSec = ()=>{
    setInterval(() => {
        if(play === false){
            return 0;
        }
        if (mS === 100) {
            mS = 0;
        }
        microSec.innerText =`${mS++}`;
    }, 10);
}

let setMin = ()=>{
    setInterval(() => {
        if(play === false){
            return 0;
        }
        if (m === 59) {
            m = 0;
        }
        min.innerText =`${m++}:`;
    }, 59999);
}

const displayNone = (htmlElement) =>{
         htmlElement.style.display = "none";
}

const displayBlock = (htmlElement) =>{
    htmlElement.style.display = "block";
}


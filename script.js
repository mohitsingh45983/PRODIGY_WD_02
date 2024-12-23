const playBtn = document.querySelector(".play");
const resetBtn = document.querySelector(".reset");
const lapBtn = document.querySelector(".lap");
const minute = document.querySelector(".minute");
const second = document.querySelector(".sec");
const miliSecond = document.querySelector(".msec");
const laps = document.querySelector(".laps");
const clrBtn = document.querySelector(".lap-clear-btn");
const bg = document.querySelector(".outer-circle");

let isPlay = false;
let min;
let minCntr = 0;
let sec ;
let secCntr = 0;
let centiSec  ;
let centiSecCntr = 0;
let isReset = false;
let lapItem = 0;

const toggleBtn = () =>{
    resetBtn.classList.remove("hidden");
    lapBtn.classList.remove("hidden");
}

const play = () =>{
    if(!isPlay && !isReset)
    {
        playBtn.innerHTML = "Pause";
        bg.classList.add("animation-bg");
        isPlay = true;
        isReset = true;
        min = setInterval(()=>{
            minute.innerHTML = `${++minCntr} :&nbsp;`;
        },1000*60);
        sec = setInterval(()=>{
            if(secCntr === 60)
            {
                secCntr = 0;
            }
            second.innerHTML = ` ${++secCntr} :&nbsp;`;
        },1000);
        centiSec = setInterval(()=>{
            if(centiSecCntr === 100)
            {
                centiSecCntr = 0;
            }
            miliSecond.innerHTML = ` ${++centiSecCntr}`;
        },10);
        
    }
    else
    {   
        playBtn.innerHTML = "Play";
        clearInterval(min);
        clearInterval(sec);
        clearInterval(centiSec);
        isPlay = false;
        isReset = false;
        bg.classList.remove("animation-bg");
    }
    toggleBtn();
}

const reset =() =>{
    isReset = true;
    play(); 
    resetBtn.classList.add("hidden");
    lapBtn.classList.add("hidden");
    minute.innerHTML = "0 :&nbsp;";
    second.innerHTML = "0 :&nbsp;";
    miliSecond.innerHTML = "0";
    minCntr = 0;
    secCntr = 0;
    centiSecCntr = 0;
    ClearAll();
}

const lap =()=>{
    const li = document.createElement("li");
    const number = document.createElement("span");
    const timeStamp= document.createElement("span");

    li.setAttribute("class","lap-item");
    number.setAttribute("class","number");
    timeStamp.setAttribute("class","time-stamp");

    number.innerText = `#${++lapItem}`;
    timeStamp.innerHTML = `${minCntr} : ${secCntr} : ${centiSecCntr}`

    li.append(number,timeStamp);
    laps.append(li);

    clrBtn.classList.remove("hidden");
};

const ClearAll = () =>{
    laps.innerHTML = ' ';
    laps.append(clrBtn);
    clrBtn.classList.add("hidden");   
    lapItem = 0;
};

playBtn.addEventListener("click",play);
resetBtn.addEventListener("click",reset);
lapBtn.addEventListener("click",lap);
clrBtn.addEventListener("click",ClearAll);


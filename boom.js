let timerEl=document.getElementById("timer");
let defuseEl=document.getElementById("defuser");
let counter=10;
let intervalId=setInterval(function(){
    counter=counter-1; 
    timerEl.textContent=counter;
    if(counter===0){
    timerEl.textContent="BOOM!!!";
    clearInterval(intervalId)
}
},1000);
defuseEl.addEventListener("keydown",function(event){
     let bombdefuseText=defuseEl.value;
     if(event.key=="enter"&&bombdefuseText==="defuse"&&counter!==0){
        timerEl.textContent="Congrats You Did It!!"
        clearInterval(intervalId)
     }
})

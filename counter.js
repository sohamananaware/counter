var increase = document.getElementById("increase")
var reset = document.getElementById("reset")
var decrease = document.getElementById("decrease")
var counternum = document.getElementById("counternum")
var a=0
increase.addEventListener("click", ()=>{
    a=a+1;
    counternum.innerText=a;
})
decrease.addEventListener("click", ()=>{
    a=a-1;
    counternum.innerText=a;
})
reset.addEventListener("click", ()=>{
    a=0;
    counternum.innerText=a;
})

if(a>0){
    counternum.style.color = green;
}
if(a<0){
    counternum.innerText.fontcolor('blue')
}
if(a=0){
    counternum.innerText.color = black;
}


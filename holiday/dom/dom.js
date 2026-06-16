let h2=document.querySelector("h2");
console.dir(h2.innerHTML)
h2.innerText=h2.innerText+" from apna college";
console.dir(h2.innerHTML)
let div=document.querySelectorAll(".box");
console.dir(div)
let idx=1;
for(let divs of div){
    divs.innerHTML=`new value ${idx}`;
    idx++;
}


let butn=document.createElement("button");
butn.innerText="click me!"
butn.style.backgroundColor="red";
butn.style.color="white";
document.querySelector("body").prepend(butn);
console.log(butn);
let para=document.querySelector("p");
para.classList.add("newchar")

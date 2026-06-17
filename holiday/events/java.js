let modebtn=document.querySelector("#btn");
let bdy=document.querySelector("body");
let mode="light";

modebtn.addEventListener("click",(e)=>{
 if(mode==="light"){
  mode="dark";
  bdy.classList.add("dark");
  bdy.classList.remove("light");
 }else{
  mode="light";
  bdy.classList.add("light");
  bdy.classList.remove("dark");
 }
 console.log(mode);
});
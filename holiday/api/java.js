let url = "https://en.wikipedia.org/api/rest_v1/page/summary/NVIDIA";
let button =document.querySelector("#butn");
let lines=document.querySelector("#para");


const getdata=async()=>{
    console.log("getting data");
    let response=await fetch(url);
    console.log(response);
    let result= await response.json();
    lines.innerText=result.extract;
}



//by promise chaining

/* function getdata(){
  fetch(url)
    .then((response)=>{
        return response.json();
    })
     .then((data)=>{
       console.log(data);
       lines.innerText=data.extract; 
     });
    } */
     button.addEventListener("click",getdata);
const btn1= document.querySelector("#ex1_button");
const content1= document.querySelector("#ex1_content");

btn1.addEventListener("click",()=>{
  const numberArray=[];
  for(let i=0;i<10;i++){
    numberArray.push(i);
  }
  content1.innerHTML=numberArray;
})
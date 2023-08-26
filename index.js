const inputText=document.getElementById("textBox");
const btn=document.getElementById("button");
const listContainer=document.getElementById("list-container");//function for adding list elements
btn.addEventListener("click",()=>{
     if(inputText.value === ''){//if entered text is empty;
          alert("enter your task");
     }
     else{
          let li=document.createElement("li");
          li.innerHTML=inputText.value;
          listContainer.appendChild(li);
          let span=document.createElement("span");//creating a cross icon at end
          span.innerHTML="\u00d7";//shape of icon is X;
          li.appendChild(span);// adding at end of text task
     }
     inputText.value="";//after adding task inputBox is should be empty
     saveData();
});

listContainer.addEventListener("click",(e)=>{//when click on tasks
     if(e.target.tagName=== "LI"){//if we click on tasks
          e.target.classList.toggle("checked");
          saveData();
     }
     else if(e.target.tagName==="SPAN"){ //if we click on cross icon(span)
          e.target.parentElement.remove();//remove current task
          saveData();
     }
});
function saveData(){//save the current data
     localStorage.setItem("data",listContainer.innerHTML);
}
function showdata(){ //dispaly the data
     listContainer.innerHTML=localStorage.getItem("data");
}
showdata();//display function to show data


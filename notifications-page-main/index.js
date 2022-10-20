
var currentdate = new Date(); 
var datetime =  currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + "  "+" "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
                

let mySpan = document.getElementById("time").innerText=datetime;
let reads = document.getElementById("mark");
let count = document.getElementById("count");
let clicks = document.getElementById("click");

reads.onclick = function(){

document.querySelectorAll("ul li").
forEach(element=> {
    
    if(element.classList.contains("active")){
        element.classList.remove("active")
        count.innerText="0"
       
        
    }
    

})

};

let unread = document.getElementById("unread");

unread.onclick=function(){
    document.querySelectorAll("ul li").
    forEach(element=>{
        element.classList.add("active")
        count.innerText="7"
    })



}




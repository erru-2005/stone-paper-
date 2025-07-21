let us=0;
let cs=0;


let choices =document.querySelectorAll(".choice");
let msg=document.querySelector(".msg");
const score1=document.querySelector("#user-score");
const score2=document.querySelector("#comp-score");




let compgen=()=>{
    let arr=["Rock","Paper","Scissor"];
    let compch=Math.floor(Math.random()*3);
    return(arr[compch]);
}

let calc = (userch)=>{
    
    let compch= compgen();
    
    let ch=1;
    
    if(userch===compch){
        msg.innerText="This move is draw!try again";
        msg.style.backgroundColor=" rgba(0, 0, 0, 0.927)";
    }
    else
    {

    
        if(userch==="Rock"){
            ch=compch==="Paper"?0:1;
         }
        else if(userch==="Paper"){
             ch=compch==="Rock"?1:0;
         }
        else if(userch==="Scissor"){
            ch=compch==="Paper"?1:0;
        }
     
        scorecal(ch,compch,userch);
    }
    
}
 let scorecal=(ch,compch,userch)=>{
    
    if(ch==1)
        {
            us++;
            msg.innerText=`You own,your ${userch} beats ${compch}`;
            score1.innerText=us;
            msg.style.backgroundColor="green";
        }
        else{
            cs++;
            msg.innerText=`Computer own,${compch} beats your ${userch}`;
            score2.innerText=cs;
            msg.style.backgroundColor="red";
        }
 }
 choices.forEach((ch)=>{
    ch.addEventListener("click",()=>{
        let userch=ch.getAttribute("id");
        calc(userch);
    });
});

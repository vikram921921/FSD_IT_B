const btn1=document.getElementById("addpara");
btn1.addEventListener("click",()=>{
    const para=document.createElement("p");
    para.innerHTML="<h1>this is new paragraph";
    para.style.color="white";
    para.style.backgroundColor="black";
        document.body.appendChild(para);
    
})
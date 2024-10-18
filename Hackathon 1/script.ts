const button=document.getElementById("Skill") as HTMLButtonElement
const skill=document.getElementById("our-skill") as HTMLElement


button.addEventListener("click" ,()=>{
    if(skill.style.display==="none"){
        skill.style.display="block"
    }
    else{
        skill.style.display="none"
    }
})
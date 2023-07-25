
const activeEvent = () =>{
    const btn = document.querySelector(".share button")
    const social = document.querySelector(".share .social")
    btn.addEventListener("click",()=>{
      social.classList.toggle("active")
    })
}

activeEvent();
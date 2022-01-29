const alertCloseBtn = document.querySelector(".alert-close-icon")

alertCloseBtn.addEventListener("click",()=>{
    alertCloseBtn.parentElement.classList.add("hide")
})
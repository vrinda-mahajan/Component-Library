const alertCloseBtn = document.querySelector(".alert-close-icon")

alertCloseBtn.addEventListener("click",()=>{
    alertCloseBtn.parentElement.classList.add("hide")
})

// Modal

const openModal = document.querySelector('.btn-open-modal')
const modal = document.querySelector('.show-modal')
const closeModal = document.querySelector('#modal-close-btn')

openModal.addEventListener('click',()=>{
    modal.style.display = 'flex';
})

closeModal.addEventListener('click',()=>{
    modal.style.display='none';
})

window.addEventListener('click',(event)=>{
    if (event.target === modal){
    modal.style.display='none'}
})

// Toast 

const openToastBtn = document.querySelector('.open-toast-btn')
const toast = document.querySelector('.show-toast')
const closeToastBtn = document.querySelector('.toast-close-btn')

openToastBtn.addEventListener('click',()=>{
    toast.style.display='flex';
    setTimeout(() => {toast.style.display="none"},5000)
})

closeToastBtn.addEventListener("click",()=>{toast.style.display="none"})


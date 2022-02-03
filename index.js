{
  document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre code').forEach((el) => {
      el.innerHTML = el.innerHTML
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
      hljs.highlightElement(el)
    })
  })
}
const barIcon = document.querySelector('.bar-icon');
const sidebar = document.querySelector(".mobile-sidebar");
const documentation = document.querySelector(".doc-content");
let display = true;
barIcon.addEventListener("click",() => {
  if(display==true){
    sidebar.style.display="block";
    display = false;
  }else{
    sidebar.style.display="none";
    display = true;
  }
})

documentation.addEventListener("click", () => {
  if (display===false) {
    sidebar.style.display = "none"
    display = true;
  }
})

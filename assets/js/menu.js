const menuOvrant = document.getElementById("iconeMenuOvrant")
const menuFermant = document.getElementById("iconeMenuFermant")
const nav = document.querySelector("nav")

menuOvrant.addEventListener("click", (e)=>{
    nav.style.left = '0px'
    menuOvrant.style.display = 'none'
})

nav.addEventListener("click", (e)=>{
    nav.style.left = '-150%'
    menuOvrant.style.display = 'block'
})
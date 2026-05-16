const menuOpenButton = document.querySelector("#menu-open-button"); // Fixed with quotes
const menuCloseButton =document.querySelector("#menu-close-button")
menuOpenButton.addEventListener("click", ()=>{
    // toggle mobile menu visibilty
    document.body.classList.toggle("show-mobile-menu")
   
    
})
menuCloseButton.addEventListener("click", ()=>menuOpenButton.click())
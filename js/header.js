const listElements = document.querySelectorAll(".list__button--click")
const mainMenu = document.querySelector(".main-menu-icon")
const header = document.querySelector("header")

listElements.forEach(listElement => {
    listElement.addEventListener("click", () => {
        listElement.classList.toggle("arrow")
        let height = 0;
        let menu = listElement.nextElementSibling; /*toma al hermano adyacente*/
        console.log(menu.scrollHeight)
        if(menu.clientHeight === 0) {
            height = menu.scrollHeight;
        }
        menu.style.height = `${height}px`
        
    })
})

mainMenu.addEventListener("click", () => {
    header.classList.toggle("hide")

})









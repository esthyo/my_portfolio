/**
 * 
 * @param {string} selector 
 * @returns {Element}
 */
const elem = (selector) => {
    return document.querySelector(selector)
}

const sideBar = elem('.sidebar')
const hamburger = elem(".hamburger")
const navBar = elem(".navbar")
const VIEWPORT_RESPONSIVE_WIDTH = 640

hamburger.addEventListener("click", function (ev) {
    const openHB = elem('.hamburger .open')
    const exitHB = elem('.hamburger .exit')
    openHB.classList.toggle('none')
    exitHB.classList.toggle('none')
    sideBar.classList.toggle('open-sidebar')
})

window.addEventListener("scroll", function () {
    if (this.innerWidth <= VIEWPORT_RESPONSIVE_WIDTH) {
        if (this.scrollY) {
            navBar.classList.add('h-2em')
            return
        }
        navBar.classList.remove('h-2em')
    }
})
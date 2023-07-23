
const mobileMenu      = document.querySelector("#mobile-menu")
const openMobileMenu  = document.querySelector("#open-mobile-menu")
const closeMobileMenu = document.querySelector("#close-mobile-menu")

openMobileMenu.addEventListener("click", () => {
	mobileMenu.classList.remove("hidden")
})

closeMobileMenu.addEventListener("click", () => {
	mobileMenu.classList.add("hidden")
})

window.resize = () => mobileMenu.classList.add("hidden")
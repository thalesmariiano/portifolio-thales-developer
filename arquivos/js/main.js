const mobileMenu          = document.querySelector("#mobile-menu")
const openMobileMenu      = document.querySelector("#open-mobile-menu")
const closeMobileMenu     = document.querySelector("#close-mobile-menu")
const mobileMenuContainer = document.querySelector("#mobile-menu-container")

openMobileMenu.addEventListener("click", () => {
	addAnimation(mobileMenuContainer, "animate__fadeIn")
	addAnimation(mobileMenu, "animate__fadeInRight")
})

closeMobileMenu.addEventListener("click", () => {
	removeAnimation(mobileMenuContainer, "animate__fadeOut")
	removeAnimation(mobileMenu, "animate__fadeOutRight")
})

const addAnimation = (element, animation) => {
	element.classList.remove("hidden")
	element.classList.add(animation, "animate__animated")

	element.addEventListener("animationend", () => {
		element.classList.remove(animation, "animate__animated")
	})
}

const removeAnimation = (element, animation) => {
	element.classList.add(animation, "animate__animated")

	element.addEventListener("animationend", () => {
		element.classList.add("hidden")
		element.classList.remove(animation, "animate__animated")
	})
}

window.resize = () => mobileMenuContainer.classList.add("hidden")
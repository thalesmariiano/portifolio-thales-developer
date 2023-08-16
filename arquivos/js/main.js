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
	element.addEventListener("animationend", endAnimation)

	function endAnimation(){
		element.classList.remove(animation, "animate__animated")
		element.removeEventListener("animationend", endAnimation)
	}
}

const removeAnimation = (element, animation) => {
	element.classList.add(animation, "animate__animated")
	element.addEventListener("animationend", endAnimation)

	function endAnimation(){
		element.classList.add("hidden")
		element.classList.remove(animation, "animate__animated")
		element.removeEventListener("animationend", endAnimation)
	}
}

onresize = function(){
	if(innerWidth >= 768) return

	mobileMenu.classList.add("hidden")
	mobileMenuContainer.classList.add("hidden")
	mobileMenu.classList.remove("animate__animated", "animate__fadeIn", "animate__fadeOut")
	mobileMenuContainer.classList.remove("animate__animated", "animate__fadeInRight", "animate__fadeOutRight")
}

const controller = new ScrollMagic.Controller()

const inicio_scene = new ScrollMagic.Scene({triggerElement: "#inicio", duration: "90%"})
.setClassToggle("#inicio-link", "text-red-500")
.addIndicators()
inicio_scene.offset(30)
.addTo(controller)

const sobre_mim_scene = new ScrollMagic.Scene({triggerElement: "#sobre-mim", duration: "90%"})
.setClassToggle("#sobre-mim-link", "text-red-500")
.addIndicators()
sobre_mim_scene.offset(190)
.addTo(controller)

const projetos_scene = new ScrollMagic.Scene({triggerElement: "#projetos", duration: "100%"})
.setClassToggle("#projetos-link", "text-red-500")
.addIndicators()
projetos_scene.offset(240)
.addTo(controller)
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

const projetos = document.querySelector("#projetos")

const controller = new ScrollMagic.Controller()

const navigation_scene = new ScrollMagic.Scene({triggerElement: "#inicio", duration: "90%"})
	navigation_scene.offset(100)
	navigation_scene.setClassToggle("#logo", "w-52")
	navigation_scene.addTo(controller)

const inicio_scene = new ScrollMagic.Scene({triggerElement: "#inicio", duration: "90%"})
	  inicio_scene.setClassToggle("#inicio-link", "text-[#cab6fa]")
	  inicio_scene.offset(30)
	  inicio_scene.addTo(controller)

const sobre_mim_scene = new ScrollMagic.Scene({triggerElement: "#sobre-mim", duration: "90%"})
	  sobre_mim_scene.setClassToggle("#sobre-mim-link", "text-[#cab6fa]")
	  sobre_mim_scene.offset(190)
      sobre_mim_scene.addTo(controller)

const projetos_scene = new ScrollMagic.Scene({triggerElement: "#projetos", duration: projetos.clientHeight - 200})
	  projetos_scene.setClassToggle("#projetos-link", "text-[#cab6fa]")
	  projetos_scene.offset(240)
 	  projetos_scene.addTo(controller)

const contato_scene = new ScrollMagic.Scene({triggerElement: "#contato", duration: "90%"})
	  contato_scene.setClassToggle("#contato-link", "text-[#cab6fa]")
	  contato_scene.offset(40)
	  contato_scene.addTo(controller)
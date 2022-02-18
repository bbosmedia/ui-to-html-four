const input = document.querySelector('.header__input-input')
const form = document.querySelector('.header__input')

const menuToggle = document.querySelector('.menu-toggle')
const navigation = document.querySelector('.navigation')

input.addEventListener('focus', () => {
	form.classList.add('active')
})

menuToggle.addEventListener('click', ()=>{
	menuToggle.classList.toggle('active')
	navigation.classList.toggle('active')
})

const input = document.querySelector('.header__input-input')
const form = document.querySelector('.header__input')

input.addEventListener('focus', () => {
	form.classList.add('active')
})

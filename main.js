const loder = document.querySelector('.loader-wrapper');
window.addEventListener('load', () => {
	loder.style.display = 'none';
})

const options = document.querySelectorAll(".options");
const sections = document.querySelectorAll('.sections');
const container = document.querySelector('.containers');
const welcome = document.querySelector('.welcome');
const footer = document.querySelector('.footer');

welcome.classList.add('well');


setTimeout(() => {
	container.classList.add('abc');
}, 2000);

options[0].addEventListener('click', () => {
	sections[0].classList.add('display');
	container.classList.add('animi');
	sections[1].style.display = 'none';
	sections[2].style.display = 'none';
	sections[3].style.display = 'none';
	sections[0].style.display = 'block';
	welcome.style.display = 'none';	
	footer.style.display = 'none';	
	
})

options[1].addEventListener('click', () => {
	sections[1].classList.add('display');
	container.classList.add('animi');
	sections[1].style.display = 'block';
	sections[0].style.display = 'none';
	sections[2].style.display = 'none';
	sections[3].style.display = 'none';
	welcome.style.display = 'none';
	footer.style.display = 'none';	
})

options[2].addEventListener('click', () => {
	sections[2].classList.add('display');
	container.classList.add('animi');
	sections[2].style.display = 'block';
	sections[1].style.display = 'none';
	sections[0].style.display = 'none';
	sections[3].style.display = 'none';
	welcome.style.display = 'none';
	footer.style.display = 'none';	
})

options[3].addEventListener('click', () => {
	sections[3].classList.add('display');
	container.classList.add('animi');
	sections[1].style.display = 'none';
	sections[2].style.display = 'none';
	sections[0].style.display = 'none';
	sections[3].style.display = 'block';
	welcome.style.display = 'none';	
	footer.style.display = 'none';
});

const emailIcon = document.querySelector('.email-icon');
emailIcon.addEventListener('click', () => {
	const aler = document.querySelector('.alert');
	aler.style.display = 'block';
})

const clsBtn = document.querySelector('.cls-btn');
clsBtn.addEventListener('click', () => {
	const aler = document.querySelector('.alert');
	aler.style.display = 'none';	
})


const whatsApp = document.querySelector('.whatsapp-icon');
var whatsAlert = document.querySelector('.whats-app-alert');
whatsApp.addEventListener('click', () => {
	whatsAlert.style.display = 'block';
})

const whatsClsBtn = document.querySelector('.whats-cls-btn');
whatsClsBtn.addEventListener('click', () => {
	whatsAlert.style.display = 'none';	
});



const singleProject = document.querySelectorAll('.project_link');
const click = document.querySelectorAll('.click');

singleProject.forEach((item) => {
	item.addEventListener('mouseover', () => {
		let ele = item.firstChild;
		ele.style.display = 'block';
	})
})

singleProject.forEach((item) => {
	item.addEventListener('mouseout', () => {
		let ele = item.firstChild;
		ele.style.display = 'none';
	})
})





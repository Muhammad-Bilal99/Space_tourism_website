const hamburger = document.querySelector('.hamburger');
const ul = document.getElementById('ul');

hamburger.addEventListener('click', () => {
  ul.classList.toggle('nav-active')
})
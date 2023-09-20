const hamburger = document.querySelector('.hamburger');
const ul = document.getElementById('ul');

hamburger.addEventListener('click', () => {
  ul.classList.toggle('nav-active');
  if (ul.classList.contains('nav-active')) {
    hamburger.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  }
  else{
    hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>'
  }
})
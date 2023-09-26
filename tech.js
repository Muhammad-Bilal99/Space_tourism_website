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

const name = document.querySelector('.name');
const description = document.querySelector('.description');
const image = document.getElementById('image');
const btnTwo = document.getElementById('btnTwo');
const btnOne = document.querySelector('.btnOne');
const btnThree = document.getElementById('btnThree');

btnTwo.addEventListener('click', () => {
  fetch('./data.json')
  .then(res => res.json())
  .then(data => {
   name.textContent = data.technology[1].name;
   description.textContent = data.technology[1].description;
   image.style.background = 'url("/starter-code/assets/technology/image-spaceport-landscape.jpg") no-repeat';
   if (window.innerWidth > 840) {
    image.style.background = 'url("/starter-code/assets/technology/image-spaceport-portrait.jpg") no-repeat';
   }
   else{
    image.style.background = 'url("/starter-code/assets/technology/image-spaceport-landscape.jpg") no-repeat';
   }
   document.querySelector('.active-btn').classList.remove('active-btn');
   btnTwo.classList.add('active-btn')

  })
})
  


btnThree.addEventListener('click', () => {
  fetch('./data.json')
  .then(res => res.json())
  .then(data => {
   name.textContent = data.technology[2].name;
   description.textContent = data.technology[2].description;
   image.style.background = 'url("/starter-code/assets/technology/image-space-capsule-landscape.jpg") no-repeat';
   if (window.innerWidth > 840) {
    image.style.background = 'url("/starter-code/assets/technology/image-space-capsule-portrait.jpg") no-repeat';
   }
   else{
    image.style.background = 'url("/starter-code/assets/technology/image-space-capsule-landscape.jpg") no-repeat';
   }
  });
 })

btnOne.addEventListener('click', () => {
  fetch('./data.json')
  .then(res => res.json())
  .then(data => {

   name.textContent = data.technology[0].name;
   description.textContent = data.technology[0].description;
   image.style.background = 'url("/starter-code/assets/technology/image-launch-vehicle-landscape.jpg") no-repeat';
   if (window.innerWidth > 840) {
    image.style.background = 'url("/starter-code/assets/technology/image-launch-vehicle-portrait.jpg") no-repeat';
   }
   else{
    image.style.background = 'url("/starter-code/assets/technology/image-launch-vehicle-landscape.jpg") no-repeat';
   }

  });
 })


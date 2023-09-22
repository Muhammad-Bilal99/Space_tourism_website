const profession = document.querySelector('.profession');
const name = document.querySelector('.name');
const description = document.querySelector('.description');
const image = document.getElementById('crew-img');
const btnTwo = document.getElementById('btnTwo');
const btnOne = document.querySelector('.btnOne');
const btnThree = document.getElementById('btnThree');
const btnFour = document.getElementById('btnFour');
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
});

btnTwo.addEventListener('click', () => {
 fetch('./data.json')
 .then(res => res.json())
 .then(data => {
  console.log(data);
  name.textContent = data.crew[1].name;
  description.textContent = data.crew[1].bio;
  image.style.background = 'url("/starter-code/assets/crew/image-mark-shuttleworth.webp") no-repeat';
  if (btnOne.id.contains("active-btn")) {
    btnOne.id.remove('active-btn') && 
    btnTwo.id.add('active-btn')
  }
 });
})

btnThree.addEventListener('click', () => {
 fetch('./data.json')
 .then(res => res.json())
 .then(data => {
  console.log(data);
  name.textContent = data.crew[2].name;
  description.textContent = data.crew[2].bio;
  image.style.backgroundImage = 'url("/starter-code/assets/crew/image-victor-glover.webp") ';
 });
})

btnFour.addEventListener('click', () => {
 fetch('./data.json')
 .then(res => res.json())
 .then(data => {
  console.log(data);
  name.textContent = data.crew[3].name;
  description.textContent = data.crew[3].bio;
  image.style.backgroundImage = 'url("/starter-code/assets/crew/image-anousheh-ansari.webp")';
 });
})

btnOne.addEventListener('click', () => {
 fetch('./data.json')
 .then(res => res.json())
 .then(data => {
  console.log(data);
  name.textContent = data.crew[0].name;
  description.textContent = data.crew[0].bio;
  image.style.backgroundImage = 'url("/starter-code/assets/crew/image-douglas-hurley.webp")';
 });
})






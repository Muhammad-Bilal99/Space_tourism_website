const profession = document.querySelector('.profession');
const name = document.querySelector('.name');
const description = document.querySelector('.description');
const image = document.getElementById('crew-img');
const btn2 = document.getElementById('btnTwo');
const btn1 = document.querySelector('.btnOne');
const btn3 = document.getElementById('btnThree');
const btn4 = document.getElementById('btnFour');
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

btn2.addEventListener('click', () => {
 fetch('./data.json')
 .then(res => res.json())
 .then(data => {
  console.log(data);
  name.textContent = data.crew[1].name;
  description.textContent = data.crew[1].bio;
  image.style.background = 'url("/starter-code/assets/crew/image-mark-shuttleworth.webp") no-repeat';
  document.querySelector('.active-btn').classList.remove('active-btn');
  btn2.classList.add('active-btn')
});
})

btn3.addEventListener('click', () => {
 fetch('./data.json')
 .then(res => res.json())
 .then(data => {
  console.log(data);
  name.textContent = data.crew[2].name;
  description.textContent = data.crew[2].bio;
  image.style.backgroundImage = 'url("/starter-code/assets/crew/image-victor-glover.webp")';
  document.querySelector('.active-btn').classList.remove('active-btn');
  btn3.classList.add('active-btn')
 });
})

btn4.addEventListener('click', () => {
 fetch('./data.json')
 .then(res => res.json())
 .then(data => {
  console.log(data);
  name.textContent = data.crew[3].name;
  description.textContent = data.crew[3].bio;
  image.style.backgroundImage = 'url("/starter-code/assets/crew/image-anousheh-ansari.webp")';
  document.querySelector('.active-btn').classList.remove('active-btn');
  btn4.classList.add('active-btn')
 });
})

btn1.addEventListener('click', () => {
 fetch('./data.json')
 .then(res => res.json())
 .then(data => {
  console.log(data);
  name.textContent = data.crew[0].name;
  description.textContent = data.crew[0].bio;
  image.style.backgroundImage = 'url("/starter-code/assets/crew/image-douglas-hurley.webp") no-repeat';
  document.querySelector('.active-btn').classList.remove('active-btn');
  btn1.classList.add('active-btn')
 });
})




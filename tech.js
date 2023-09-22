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
   if (btnOne.hasAttribute("id")) {
     btnOne.removeAttribute('id');
     btnTwo.setAttribute('id','active-btn');
   }
  });
 })

btnThree.addEventListener('click', () => {
  fetch('./data.json')
  .then(res => res.json())
  .then(data => {
   name.textContent = data.technology[2].name;
   description.textContent = data.technology[2].description;
   image.style.background = 'url("/starter-code/assets/technology/image-space-capsule-landscape.jpg") no-repeat';
   if (btnTwo.hasAttribute("id")) {
    btnTwo.removeAttribute('id');
    btnThree.setAttribute('id','active-btn');
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
   if (btnTwo||btnThree.hasAttribute("id")) {
    btnTwo||btnThree.removeAttribute('id');
    btnOne.setAttribute('id','active-btn');
  }
  });
 })
const name = document.querySelector('.name');
const description = document.querySelector('.description');
const image = document.getElementById('crew-image');
const btnTwo = document.getElementById('btnTwo');
const btnOne = document.querySelector('.btnOne');
const btnThree = document.getElementById('btnThree');

btnTwo.addEventListener('click', () => {
  fetch('./data.json')
  .then(res => res.json())
  .then(data => {
   name.textContent = data.technology[1].name;
   description.textContent = data.technology[1].description;
   image.style.background = data.technology[1].images.portrait;
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
   name.textContent = data.technology[2].name;
   description.textContent = data.technology[2].description;
   image.style.background = data.technology[2].images.portrait;
   if (btnOne.id.contains("active-btn")) {
     btnOne.id.remove('active-btn') && 
     btnTwo.id.add('active-btn')
   }
  });
 })

btnOne.addEventListener('click', () => {
  fetch('./data.json')
  .then(res => res.json())
  .then(data => {

   name.textContent = data.technology[0].name;
   description.textContent = data.technology[0].description;
   image.style.background = data.technology[0].images.portrait;
   if (btnOne.id.contains("active-btn")) {
     btnOne.id.remove('active-btn') && 
     btnTwo.id.add('active-btn')
   }
  });
 })
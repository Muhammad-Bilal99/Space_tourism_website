const profession = document.querySelector('.profession');
const name = document.querySelector('.name');
const description = document.querySelector('.description');
const image = document.getElementById('crew-image');
const btnTwo = document.getElementById('btnTwo');
const btnOne = document.querySelector('.btnOne');
const btnThree = document.getElementById('btnThree');
const btnFour = document.getElementById('btnFour');

btnTwo.addEventListener('click', () => {
 fetch('./data.json')
 .then(res => res.json())
 .then(data => {
  console.log(data);
  name.textContent = data.crew[1].name;
  description.textContent = data.crew[1].bio;
  image.style.background = `url(${data.crew[1].images.webp})`;
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
  image.style.backgroundImage = `url(${data.crew[2].images.webp})`;
 });
})

btnFour.addEventListener('click', () => {
 fetch('./data.json')
 .then(res => res.json())
 .then(data => {
  console.log(data);
  name.textContent = data.crew[3].name;
  description.textContent = data.crew[3].bio;
  image.style.background = `url(${data.crew[3].images.webp})`;
 });
})

btnOne.addEventListener('click', () => {
 fetch('./data.json')
 .then(res => res.json())
 .then(data => {
  console.log(data);
  name.textContent = data.crew[0].name;
  description.textContent = data.crew[0].bio;
  image.style.background = `url(${data.crew[0].images.webp})`;
 });
})






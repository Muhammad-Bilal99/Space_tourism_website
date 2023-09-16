

const profession = document.querySelector('.profession');
const name = document.querySelector('.name');
const description = document.querySelector('.description');
const image = document.getElementById('crew-image');
const btn = document.getElementById('gg');

btn.addEventListener('click', () => {
 fetch('./data.json')
 .then(res => res.json())
 .then(data => {
  console.log(data);
  name.textContent = data.crew[1].name;
  description.textContent = data.crew[1].bio;
  image.style.background = url(data.crew[1].images.webp);
 });
})






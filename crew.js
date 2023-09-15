// const data  = require('./data.json');

const profession = document.querySelector('.profession');
const name = document.querySelector('.name');
const description = document.querySelector('.description');
const image = document.querySelector('.crew-image');
const btn = document.getElementById('gg');

btn.addEventListener('click', () => {
  console.log('Hello');
  name.textContent = "Mark Shuttleworth";
})

// console.log(JSON.stringify(data.crew[1].name));





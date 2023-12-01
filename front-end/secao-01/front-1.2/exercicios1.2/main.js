import Swal from 'sweetalert2';

const button = document.querySelector('#super-hero-button');
const superphoto = document.querySelector('#super-hero-img');
const supername = document.querySelector('#super-hero-name');

const BASE_URL = 'https://akabab.github.io/superhero-api/api';
const MAX_HERO = 100;
const randomNumber = () => Math.floor(Math.random() * MAX_HERO) + 1;

button.addEventListener('click', (event) => {
  event.preventDefault();
  fetch(`${BASE_URL}/id/${randomNumber()}.json`)
    .then((res) => res.json())
    .then((data) => {
      supername.innerHTML = data.name;
      superphoto.src = data.images.md;
    })
    .catch((error) => Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `Aconteceu um erro: ${error.message}`,
    }));
});

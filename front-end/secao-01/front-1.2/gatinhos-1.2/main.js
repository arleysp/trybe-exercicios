import './style.css'

const buttonDog = document.querySelector('#dog')
const buttonCat = document.querySelector('#cat')
const buttonSurp = document.querySelector('#surprise')
const petPhoto = document.querySelector('#pet-photo')

const dogApi = 'https://dog.ceo/api/breeds/image/random';
const catApi = 'https://api.thecatapi.com/v1/images/search';

//Promise.any para surprise me

buttonDog.addEventListener('click', (event) => {
  event.preventDefault();
  fetch(dogApi)
    .then(res => res.json())
    .then(img => {
      petPhoto.src = img.message;
    })
})

buttonCat.addEventListener('click', (event) => {
  event.preventDefault();
  fetch(catApi)
    .then(res => res.json())
    .then(img => {
      const [imagem] = img;
      petPhoto.src = imagem.url;
    })
})

const gerarGatinhos = () => {
  return fetch(catApi)
    .then(res => res.json())
    .then(img => img[0].url)
}

const gerarDoguinhos = () => {
  return fetch(dogApi)
    .then(res => res.json())
    .then(img => img.message)
}

console.log(gerarGatinhos())


buttonSurp.addEventListener('click', (event) => {
  event.preventDefault();
  Promise.any([gerarDoguinhos(), gerarGatinhos()])
    .then(res => petPhoto.src = res);
});
const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


firstLi.classList.add('caixas');
secondLi.classList.add('caixas');
thirdLi.classList.add('caixas');

const caixas = document.querySelectorAll('.caixas');
for (let caixa of caixas) {
  caixa.addEventListener('mouseover', (event) => {
    const caixaSelecionada = document.querySelector('.tech');
    if (caixaSelecionada) {
        caixaSelecionada.classList.remove('tech');
    }
    event.target.classList.add('tech');
  });
};

input.addEventListener("input", () => {
  const textoCaixa = document.querySelector('.tech');
  textoCaixa.innerHTML = input.value;
});
function trocarCor () {
  myWebpage.style.color = 'green';
}
function voltaCor () {
  myWebpage.style.color = 'white';
}
myWebpage.addEventListener("dblclick", (event) => {
  window.open("https://www.mozilla.org/", 'Mozila Webpage')

});
myWebpage.addEventListener("mouseover", trocarCor);
myWebpage.addEventListener("mouseout", voltaCor);


// Segue abaixo um exemplo de uso do event.target.

const resetText = (event) => {
  // O event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na função retornará o objeto 'firstLi'.
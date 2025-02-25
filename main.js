const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado" />';
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';

const notaMinima = parseFloat(prompt('Digite a nota mínima  [1-10]:'));
document.querySelector('h5').innerHTML = `Nota mínima: ${notaMinima}`;

const atividades = [];
const notas = [];
let linhas = '';

form.addEventListener('submit', function(e) {
  e.preventDefault();

  adicionaLinha();
  atualizaTabela();
  atualizaMedia();


});

function adicionaLinha() {
  const inputNomeAtividade = document.getElementById('nome-atividade');
  const inputNotaAtividade = document.getElementById('nota-atividade');

  if (atividades.includes(inputNomeAtividade.value)) {
    alert(`A atividade ${inputNomeAtividade.value} já foi inserida`);
  } else {
    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));
  
    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';
  
    linhas += linha;
  }

  inputNomeAtividade.value = '';
  inputNotaAtividade.value = '';
}

function atualizaTabela() {
  const corpoTabela = document.querySelector('tbody');
  corpoTabela.innerHTML = linhas;
}

function atualizaMedia() {
  const media = calculaMedia();

  document.getElementById('media-valor').innerHTML = media;
  document.getElementById('media-resultado').innerHTML = media >= notaMinima ? spanAprovado : spanReprovado;
}

function calculaMedia() {

  let somaNotas = 0;

  for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i];
  }

  return (somaNotas / notas.length).toPrecision(2);
}
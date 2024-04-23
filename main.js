const form = document.getElementById('form-agenda');
const botaoLimpar = document.getElementById('botao-limpar');

botaoLimpar.addEventListener("click", limparCampos);

let linhas = '';
let count = 0;

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarLinha();
    atualizarTabela();
    atualizarContador();
})

function adicionarLinha() {
    const inputNome = document.getElementById('nome-contato');
    const inputNumero = document.getElementById('numero-contato');

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputNumero.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    count++;

    inputNome.value = "";
    inputNumero.value = "";
}

function atualizarTabela() {
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}

function atualizarContador() {
    document.getElementById('total-cadastros').innerHTML = parseInt(count);
}

function limparCampos() {
    const tabela = document.querySelector("table");
    
    const linhasTabela = document.querySelectorAll('#tabela tr');
    for (let i = 1; i < linhasTabela.length - 1; i++) {
        linhasTabela[i].remove();
    }

    document.getElementById('total-cadastros').innerHTML = 0;
}
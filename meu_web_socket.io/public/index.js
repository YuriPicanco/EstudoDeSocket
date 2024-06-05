import "./socket-front-index.js";
import { emitirAdicionarDocumento } from "./socket-front-index.js";

const listaDocumentos = document.getElementById("lista-documentos");
const form = document.getElementById("form-adiciona-documento");
const inputDoc = document.getElementById("input-documento");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  emitirAdicionarDocumento(inputDoc.value);

  inputDoc.value = "";
});

function inserirLinkDocumento(nomeDocumento) {
  listaDocumentos.innerHTML += `
    <a id="documento-${nomeDocumento}" href="documento.html?nome=${nomeDocumento}" class="list-group-item list-group-item-action">${nomeDocumento}</a>
    `;
}

function removerLinkDocumento(nomeDocumento) {
  const documento = document.getElementById(`documento-${nomeDocumento}`);

  listaDocumentos.removeChild(documento);
}

export { inserirLinkDocumento, removerLinkDocumento };

import { alertarERedirecionar, atualizaTextoEditor } from "./documento.js";

const socket = io();

socket.on("texto_editor_clientes", (texto) => {
  atualizaTextoEditor(texto);
});

socket.on("excluir_documento_sucesso", (nome) => {
  alertarERedirecionar(nome);
});

export function selecionarDocumento(nomeDocumento) {
  socket.emit("selecionar_documento", nomeDocumento, (texto) => {
    atualizaTextoEditor(texto);
  });
}

export function emitirTextoEditor(dados) {
  socket.emit("texto_editor", dados);
}

export function emitirExcluirDocumento(nome) {
  socket.emit("excluir_documento", nome);
}

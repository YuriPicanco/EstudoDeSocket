import { inserirLinkDocumento } from "./index.js";

const socket = io();

socket.emit("obter_documentos", (documentos) => {
  documentos.forEach((documento) => {
    inserirLinkDocumento(documento.nome);
  });
});

socket.on("adicionar_documento_interface", (nome) => {
  inserirLinkDocumento(nome);
});

socket.on("documento_existe", () => {
  alert(`o documento ${nome} já existe`);
});

socket.on("excluir_dcoumento_sucesso", (nome) => {
  removerLinkDocumento(nome);
});

function emitirAdicionarDocumento(nome) {
  socket.emit("adicionar_documento", nome);
}

export { emitirAdicionarDocumento };

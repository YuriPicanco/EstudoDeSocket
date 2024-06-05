import { inserirLinkDocumento, removerLinkDocumento } from "./index.js";
import { obterCookie } from "./util/cookie.js";

const socket = io("/usuarios", {
  auth: {
    token: obterCookie("token"),
  },
});

function emitirAdicionarDocumento(nome) {
  socket.emit("adicionar_documento", nome);
}

socket.emit("obter_documentos", (documentos) => {
  documentos.forEach((documento) => {
    inserirLinkDocumento(documento.nome);
  });
});

socket.on("connect_error", (erro) => {
  alert(erro);
  window.location.href = "/login";
});

socket.on("adicionar_documento_interface", (nome) => {
  inserirLinkDocumento(nome);
});

socket.on("documento_existente", (nome) => {
  alert(`O documento ${nome} já existe!`);
});

socket.on("excluir_documento_sucesso", (nome) => {
  removerLinkDocumento(nome);
});

export { emitirAdicionarDocumento };

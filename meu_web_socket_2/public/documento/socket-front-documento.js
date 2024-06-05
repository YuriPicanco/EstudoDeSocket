import { obterCookie } from "../util/cookie.js";
import {
  alertarERedirecionar,
  atualizaTextoEditor,
  atualizarInterfaceUsuarios,
  tratarAutorizacaoSucessos,
} from "./documento.js";

function selecionarDocumento(dadosEntrada) {
  socket.emit("selecionar_documento", dadosEntrada, (texto) => {
    atualizaTextoEditor(texto);
  });
}

socket.on("usuario_ja_no_documento", () => {
  alert("Documento aberto em outra página");
  window.location.href = "/";
});

function emitirTextoEditor(dados) {
  socket.emit("texto_editor", dados);
}

const socket = io("/usuarios", {
  auth: {
    token: obterCookie("token"),
  },
});

socket.on("autorizacao_sucesso", tratarAutorizacaoSucessos);

socket.on("connect_error", (err) => {
  alert(err);
  window.location.href = "/login/index.html";
});

socket.on("usuarios_no_documento", atualizarInterfaceUsuarios);

socket.on("texto_editor_clientes", (texto) => {
  atualizaTextoEditor(texto);
});

function emitirExcluirDocumento(nome) {
  socket.emit("excluir_documento", nome);
}

socket.on("excluir_documento_sucesso", (nome) => {
  alertarERedirecionar(nome);
});

export { emitirTextoEditor, selecionarDocumento, emitirExcluirDocumento };

import { definirCookie } from "../util/cookie.js";

const socket = io();

function emitirAutenticarUsuario(dados) {
  socket.emit("autenticar_usuario", dados);
}

socket.on("autenticacao_sucesso", (token) => {
  definirCookie("token", token);
  alert("Usuário autenticado com sucesso!");
  window.location.href = "/";
});

socket.on("autenticacao_erro", () => {
  alert("Usuário autenticado erro!");
});

socket.on("usuario_nao_encontrado", () => {
  alert("Usuário não encontrado!");
});

export { emitirAutenticarUsuario };

const socket = io();

function emitirCadastroUsuario(dados) {
  socket.emit("cadastrar_usuario", dados);
}

socket.on("cadastro_sucesso", () => {
  alert("Cadastro realizado com sucesso");
});

socket.on("cadastro_erro", () => {
  alert("Erro ao cadastrar usuário");
});

socket.on("usuario_ja_existente", () => {
  alert("Usuário já existe!");
});
export { emitirCadastroUsuario };

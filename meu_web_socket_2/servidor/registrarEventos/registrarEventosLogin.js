import { encontrarUsuario } from "../db/usuariosDb.js";
import autenticarUsuario from "../utils/autenticarUsuario.js";
import gerarJwt from "../utils/gerarJwt.js";

function registrarEventosLogin(socket, io) {
  socket.on("autenticar_usuario", async ({ nome, senha }) => {
    const usuario = await encontrarUsuario(nome);

    if (!usuario) {
      socket.emit("usuario_nao_encontrado");
    } else {
      const autenticado = autenticarUsuario(senha, usuario);

      if (!autenticado) {
        socket.emit("autenticacao_erro");
      } else {
        const token = gerarJwt({ nomeUsuario: nome });
        socket.emit("autenticacao_sucesso", token);
      }
    }
  });
}

export default registrarEventosLogin;

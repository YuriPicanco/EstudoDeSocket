import jwt from "jsonwebtoken";

function autorizarUsuario(socket, next) {
  const token = socket.handshake.auth.token;

  try {
    const payload = jwt.verify(token, process.env.SEGREDO_JWT);

    socket.emit("autorizacao_sucesso", payload);

    next();
  } catch (err) {
    next(err);
  }
}

export default autorizarUsuario;

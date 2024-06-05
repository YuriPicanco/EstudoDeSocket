import { scryptSync, timingSafeEqual } from "crypto";

function autenticarUsuario(senhaDigitada, usuario) {
  const hashTeste = scryptSync(senhaDigitada, usuario.salSenha, 64);
  const hashReal = Buffer.from(usuario.hashSenha, "hex");

  return timingSafeEqual(hashTeste, hashReal);
}

export default autenticarUsuario;

import jwt from "jsonwebtoken";

function gerarJwt(payload) {
  return jwt.sign(payload, process.env.SEGREDO_JWT, {
    expiresIn: "1h",
  });
}

export default gerarJwt;

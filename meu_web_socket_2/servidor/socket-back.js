import autorizarUsuario from "./middlewares/autorizarUsuario.js";
import registrarEventosCadastrar from "./registrarEventos/registrarEventosCadastro.js";
import registrarEventosDocumento from "./registrarEventos/registrarEventosDocumento.js";
import registrarEventosInicio from "./registrarEventos/registrarEventosInicio.js";
import registrarEventosLogin from "./registrarEventos/registrarEventosLogin.js";
import io from "./servidor.js";
import "dotenv/config";

const nspUsuarios = io.of("/usuarios");

nspUsuarios.use(autorizarUsuario);

nspUsuarios.on("connection", (socket) => {
  registrarEventosInicio(socket, nspUsuarios);
  registrarEventosDocumento(socket, nspUsuarios);
});

io.of("/").on("connection", (socket) => {
  registrarEventosCadastrar(socket, io);
  registrarEventosLogin(socket, io);
});

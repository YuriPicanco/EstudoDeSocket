import { documentos as dbDocumentos } from "./dbConnect.js";

function econtrarDocumento(nome) {
  return dbDocumentos.findOne({ nome: nome });
}

function atualizaDocumento(nome, texto) {
  return dbDocumentos.updateOne({ nome: nome }, { $set: { texto: texto } });
}

function obterDocumentos() {
  return dbDocumentos.find().toArray();
}

function adicionarDocumento(nome) {
  return dbDocumentos.insertOne({ nome: nome, texto: "" });
}

function excluirDocumento(nome) {
  return dbDocumentos.deleteOne({});
}

export {
  econtrarDocumento as encontrarDocumento,
  atualizaDocumento,
  obterDocumentos,
  adicionarDocumento,
  excluirDocumento,
};

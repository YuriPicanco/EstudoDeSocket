import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://websocket-user:senha123@cluster0.ux72cow.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const cliente = new MongoClient(uri);

let documentos;

try {
  await cliente.connect();

  const db = cliente.db("websocket");
  documentos = db.collection("documentos");

  console.log("DB connection is ready!");
} catch (err) {
  console.log(err.message);
}

export { documentos };

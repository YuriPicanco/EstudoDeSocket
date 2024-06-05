import express from "express";
import url from "url";
import path from "path";
import http from "http";
import { Server as SocketIoServer } from "socket.io";

import "./dbConnect.js";

const app = express();
const port = process.env.PORTA || 3000;

const urlThisFile = url.fileURLToPath(import.meta.url);
const __dir = path.join(urlThisFile, "../..", "public");

app.use(express.static(__dir));

const servidorHttp = http.createServer(app);

servidorHttp.listen(port, () => {
  console.log(`Server running on ${port}`);
});

const io = new SocketIoServer(servidorHttp);

export default io;

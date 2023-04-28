const express = require("express");
// const { con } = require("./db/db.js");
const app = express();
const localPort = 3000;

const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(cors());

// con.query(
//   `INSERT INTO Consumos (voltagem, corrente, potencia, dataHora) VALUES (${req.query.voltagem} , ${req.query.corrente} , ${req.query.potencia}, "${dataHora}")`
// );

app.get("/", (req, res) => {
  //trazer denuncias
  res.header("Access-Control-Allow-Origin", "*");
  res.send("FUNCIONA PORRA");
});

app.post("/denuncia", (req, res) => {
  //salvar denuncia em um banco de dados e retornar o status
  console.log("DEnunciaaaaaaa", req.body);
  res.send("denuncia recebida!");
});

app.get("/denuncia", (req, res) => {
  //trazer denuncias
  res.send("denuncias!");
});

app.get("/gerenciamento", (req, res) => {
  //enviar objeto contendo informações de gerenciamento ambiental
  console.log("gerenciamento");
  res.send({ algo: true });
});

app.listen(process.env.PORT ? process.env.PORT : localPort, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

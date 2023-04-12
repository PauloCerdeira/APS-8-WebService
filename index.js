const express = require("express");
const app = express();
const port = 3000;

const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(cors());

app.post("/denuncia", (req, res) => {
  //salvar denuncia em um banco de dados e retornar o status
  console.log("DEnunciaaaaaaa", req.body);
  res.send("denuncia recebida!");
});

app.get("/gerenciamento", (req, res) => {
  //enviar objeto contendo informações de gerenciamento ambiental
  console.log("gerenciamento");
  res.send({ algo: true });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

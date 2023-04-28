const { con } = require("./db/db.js");
const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log("get /");
  // res.header("Access-Control-Allow-Origin", "*");
  res.send("funcionando");
});

app.post("/denuncia", (req, res) => {
  console.log("post denuncia");
  //salvar denuncia em um banco de dados e retornar o status
  console.log("DADOS DENUNCIA: ", req.body);

  let denuncia = req.body.denuncia;
  let denunciante = req.body.denunciante;
  let query

  if (denuncia.anonima) {
    console.log("denuncia anonima inserida");
    query = `INSERT INTO Denuncias (anonima, endereco, titulo, descricao) VALUES (TRUE , "${denuncia.endereco}" , "${denuncia.titulo}", "${denuncia.descricao}")`
  } else {
    console.log("denuncia inserida");
    query = `INSERT INTO Denuncias VALUES (Null, FALSE, "${denunciante.nome}" , "${denunciante.endereco}", "${denunciante.contato}", "${denuncia.endereco}" , "${denuncia.titulo}", "${denuncia.descricao}")`
  }
  
  con.query(query, (err, result) => {
    if (err) res.send({error: err})
    res.send({success: true});
  });
});

app.get("/denuncia", (req, res) => {
  console.log("get denuncia");
  //trazer denuncias
  con.query(`SELECT * FROM Denuncias`, (err, result) => {
    if (err) res.send(err);
    res.send(result);
  });
});

app.get("/gerenciamento", (req, res) => {
  console.log("get gerenciamento");
  //enviar objeto contendo informações de gerenciamento ambiental
  res.send({ algo: true });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server rodando na porta ${PORT}...`);
});

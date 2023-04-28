const mysql = require("mysql");
const con = mysql.createConnection({
  host: "34.151.240.37",
  user: "root",
  password: "Batfino-04",
  database: "aps-8-db",
});
con.connect(function (err) {
  if (err) throw err;
  console.log("DB Connected!");
});

module.exports = { con };

const mysql = require("mysql");

const DB = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "UserAuthDb",
});
DB.connect((err) => {
  if (err) throw err;
  console.log("Connected to the MySQL server");
})

module.exports = DB;

const { Pool, Client } = require("pg"); //postgresSql

//localhost ฐานข้อมูล
const db = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "",
  database: "db_non_helmet",
});

db.connect();
module.exports = db;

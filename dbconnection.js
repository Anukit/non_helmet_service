const { Pool, Client } = require("pg"); //postgresSql

//localhost ฐานข้อมูล
const db = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "",
  database: "db_non_helmet",
});

//Database จริง
/* const db = new Client({
  host: "128.199.96.80",
  user: "postgres",
  port: 5432,
  password: "postgres",
  database: "db_non_helmet",
  ssl: { rejectUnauthorized: false },
}); */

db.connect();
module.exports = db;

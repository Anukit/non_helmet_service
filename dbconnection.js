const { Client } = require("pg"); //postgresSql

//Database จริง heroko
// const db = new Client({
//   host: "ec2-34-203-182-172.compute-1.amazonaws.com",
//   database: "dc27g5poueu9a1",
//   user: "ulqywgttpyykaq",
//   port: 5432,
//   password: "74970c0b04e7cf39c93e8ef13a1962064aac6e92dbcb9289bc6fe58f71f1ac7b",
//   ssl: { rejectUnauthorized: false },
// });

//Database จริง
const db = new Client({
  host: "128.199.96.80",
  database: "db_non_helmet",
  user: "postgres",
  port: 5432,
  password: "postgres",
  ssl: { rejectUnauthorized: false },
});

//localhost ฐานข้อมูล
// const db = new Client({
//   host: "localhost",
//   user: "postgres",
//   port: 5432,
//   password: "Junior084444",
//   database: "db_non_helmet",
// });

db.connect();
module.exports = db;

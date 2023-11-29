const pkg = require("pg");
const { Pool } = pkg;
require("dotenv").config();

const connection = new Pool({
  user: process.env.PG_user,
  host: process.env.PG_host,
  database: process.env.PG_database_name,
  password: process.env.PG_pass,
  port: process.env.PG_port,
});
module.export = connection;

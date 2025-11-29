const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  user: "postgres",
  password: "2004",
  database: "todos",
  port: 5432,
});

client.connect()
  .then(() => {
    console.log("PostgreSQL connected");

    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS tasks (
        id SERIAL PRIMARY KEY,
        task TEXT NOT NULL
      );
    `;

    return client.query(createTableQuery);
  })
  .then(() => {
    console.log("Table 'tasks' created");
  })
  .catch((err) => console.error("DB Error:", err));

module.exports = client;

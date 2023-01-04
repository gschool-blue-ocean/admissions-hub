const { Client } = require("pg");
import connectionStrings from "../../../lib/connection";

const client = new Client({
  // Format: postgres://user:password@host:5432/database
  connectionString: process.env.NODE_ENV === "production" ? connectionStrings.production : connectionStrings.dev,
  ...(process.env.NODE_ENV === "production"
    ? { ssl: { rejectUnauthorized: false } }
    : {}),
});

client.connect((err) => {
  //Connected Database
  if (err) {
    console.log(err);
  } else {
    console.log("PostgresSQL Connected");
  }
});

export default function handler(req, res) {
  const query = req.query;
  const { id } = query;

  if (req.method === "GET") {
    client.query("SELECT * FROM interviews WHERE id = $1", [id])
    //.then(results => results.json())
    .then(data => {
        res.status(200)
        res.send(data.rows)
    })
    .catch(error => {
        res.status(500)
        res.send(error)
    })
  }
}

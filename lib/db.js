import { Pool } from 'pg';

let pool;

if (!pool) {
  pool = new Pool({
    connectionString: process.env.NEXT_PUBLIC_CONNECTION_STRING,
  });
}

pool.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Connected to Database');
  }
});

export default pool;

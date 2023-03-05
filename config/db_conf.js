import mysql from 'mysql2';
const conn = mysql.createConnection({
  host: 'www.db4free.net',
  user: 'phonebook',
  password: 'Heslo987',
  database: 'phonebook_test',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

conn.connect((err) => {
    if(err) {
        console.error("Chyba pripojovani k DB: ", err)
        return;
    }
    console.log("Pripojeno k DB");
})


export default conn;
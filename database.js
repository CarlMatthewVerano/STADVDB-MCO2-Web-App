import dotenv from 'dotenv'
import express from 'express'
import mysql from 'mysql2'
dotenv.config()

const app = express();

app.use(express.static('src'));

const pool = mysql.createPool(
    {
        host: process.env.MYSQL_HOST,
        database: process.env.MYSQL_DATABASE,
        user: process.env.MYSQL_USER,
        port: process.env.MYSQL_PORT,
        // password: process.env.MYSQL_PASSWORD
    }
).promise()

// app.get('/', (req, res) => {
//     res.render('index');
// });


// HOW TO CHANGE PORTS DYNAMICALLY
// function refreshPool() {
//     pool = mysql.createPool({
//       host: process.env.MYSQL_HOST,
//       user: process.env.MYSQL_USER,
//       database: process.env.MYSQL_DATABASE,
//       port: process.env.MYSQL_PORT
//     });
//   }
// Call refreshPool() whenever you need to change the port, especially after the first cluster fails.


//CREATE (working)
// export async function read(name, value1) {
//     const [rows] = await pool.query(`
//     INSERT INTO test_table (name, value)
//     VALUES ("${name}", "${value1}")
//     `)
//     return rows
// }
// const tests = await read("Jiwoo", "Kim Jiwoo")
// console.log(tests)



//READ (working)
export async function read() {
    // returns an array of objects
    const [rows] = await pool.query("SELECT * FROM test_table")
    return rows
}
const tests = await read()
console.log(tests)


//UPDATE (working)
// export async function updater(param, value1) {
//     // returns an array of objects
//     const [rows] = await pool.query(`
//     UPDATE test_table
//     SET value = "${value1}"
//     WHERE name = "${param}";
//     `)
//     return rows
// }
// const tests = await updater("Tzuyu", "Chou Tzuyu")
// console.log(tests)


//DELETE (working)
// export async function deleter(param) {
//     // returns an array of objects
//     const [rows] = await pool.query(`
//     DELETE FROM test_table WHERE name = "${param}"
//     `)
//     return rows
// }

// const tests = await deleter("hanz")
// console.log(tests)
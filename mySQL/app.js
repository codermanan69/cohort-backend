const mysql = require("mysql2/promise");

async function connectDB() {

    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password@11",
        database: "mysql_db",

    });

    console.log("Connected to MySQL");

    // show databases
    const [rows] = await connection.execute("SHOW DATABASES");
    console.log(rows);

    // create database
    await connection.execute("CREATE DATABASE mysql_db");

    console.log("Database created");

}

connectDB();

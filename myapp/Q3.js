const express = require("express");
const { open } = require("sqlite");
const path = require("path");
const sqlite3 = require("sqlite3");
const bcrypt = require("bcrypt");

const connection = sqlite3.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "my_database",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to database!");
});

const insertOrUpdateData = (dataArray) => {
  dataArray.forEach((data) => {
    const { name, email } = data;
    const selectQuery = `SELECT * FROM customers WHERE email = ?`;
    connection.query(selectQuery, (err, result) => {
      if (err) throw err;
      if (result.length > 0) {
        const updateQuery = `UPDATE customers SET name = ? WHERE email = ?`;
        connection.query(updateQuery, [name, email], (err, result) => {
          if (err) throw err;
          console.log(`Updated customer with email: ${email}`);
        });
      } else {
        const insertQuery = `INSERT INTO customers (name, email) VALUES (?, ?, ?, ?, ?, ?)`;
        connection.query(insertQuery, [name, email], (err, result) => {
          if (err) throw err;
          console.log(`Inserted data with ID: ${result.insertId}`);
        });
      }
    });
  });
};

const customers = [
  {
    email: "anurag11@yopmail.com",
    name: "anurag",
  },
  {
    email: "sameer11@yopmail.com",
    name: "sameer",
  },
  {
    email: "ravi11@yopmail.com",
    name: "ravi",
  },
  {
    email: "akash11@yopmail.com",
    name: "akash",
  },
  {
    email: "anjali11@yopmail.com",
    name: "anjai",
  },
  {
    email: "santosh11@yopmail.com",
    name: "santosh",
  },
];

insertOrUpdateData(data);

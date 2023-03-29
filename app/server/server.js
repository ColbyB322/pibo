const express = require("express")
const mysql = require("mysql2")
const app = express()

const dotenv = require("dotenv");
dotenv.config();


const db = mysql.createConnection({
    host: process.env.REACT_APP_HOST,
    user: process.env.REACT_APP_USER,
    password: process.env.REACT_APP_PASSWORD,
    database: process.env.REACT_APP_DB
})

app.listen(5000, () => {console.log("Server started on port 5000.")})

db.connect(error => { //opening connection
    if (error) throw error;
    console.log("Successfully connected to the database.");
  });


app.get("/user_register_view", (req, res)=>{ //Returns records from user register
    db.query("SELECT * FROM USER_REGISTER", (err, result) => {
        if (err){
            console.log("Error selecting.")
        }
        res.send(result);
    })
})

app.post("/user_register", (req, res)=>{ //Add user's register info to the database
    db.query("INSERT INTO user_register (email, user_password, guardian_name) VALUES ('?','?','?')",
    [email, user_password, guardian_name],
    (err, result) => {
    if (err){
        console.log("Error inserting.")
    }
    res.send(result);
  })   
})


db.end; //closing connection



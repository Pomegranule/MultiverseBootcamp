'use strict';

const sqlite3 = require("sqlite3");

const db = new sqlite3.Database("./database.db", sqlite3.OPEN_READWRITE, (err)=>{ // Creating a new database that we can read and write to.
    if(err){
        return console.error(err.message);
    } else{
        console.log("Success!!");
    }
});

const express = require('express')

const app = express();
const port = 3002;

app.use(express.static('public'));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.listen(port, ()=> {
    console.log(`Server listening at http://localhost:${port}`);
});

// This is my GET method.
app.get("/restaurants", (request, response)=>{
    
    const selectSql = "SELECT * FROM restaurants;";

    db.all(selectSql, (err, rows)=>{
        if(err){
            return console.error(err.message);
        }else{
            response.send(rows);
        };
    });

});

// app.post("/restaurants", (request, response)=>{
//     console.log(request.body.Imagelink); // use the data in req.body to add a new restaurant to the database
//     response.sendStatus(201);
// });

// app.delete("/restaurants/:id", (request, response)=>{
//     const index = request.params.id;
//     console.log("Deleting Restaurant " + index);
// });



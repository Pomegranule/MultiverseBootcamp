'use strict';

//////////////////////////////// Express Server////////////////////////////
const express = require('express')

const app = express();
const port = 6969;
//////////////////////////////// Express Server////////////////////////////


////////////////////// Connecting Server to Database///////////////////////
const sqlite3 = require('sqlite3');

const db = new sqlite3.Database("./Database/database.db", sqlite3.OPEN_READWRITE, (err)=>{ // Creating a new database that we can read and write to.
    if(err){
        return console.error(err.message);
    } else{
        console.log("Successfully connected to database.");
    }
});
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, ()=> {
    console.log(`Server listening at http://localhost:${port}`);
});
////////////////////// Connecting Server to Database///////////////////////
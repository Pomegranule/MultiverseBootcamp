'use strict';

// //////////////////Express Server/////////////////////////
const express = require('express');

const app = express();
const port = 3003;

app.use(express.static('public'));

///Add Access Control Allow Origin headers

app.use((request, response, next) => {
    response.setHeader("Access-Control-Allow-Origin", " ");
    
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
// //////////////////Express Server/////////////////////////


// app.get("/getpeeps", (request, response)=>{
//     const selectSql = "SELECT * FROM peeps";

//     db.all(selectSql, (err, rows)=>{
//         if(err){
//             return console.log(err.message);
//         }else{
//             response.send(rows);
//         };
//     });
// });

// app.post("/postpeeps", (request, response)=>{
//     console.log(request.body.FAVFRUIT);
//     response.sendStatus(201);
// });

// app.delete("/deletepeeps", (request, response)=>{
//     const index = request.params.id;
//     console.log("Deleting Restaurant " + index);
// });
// ///////////////////GET POST DELETE///////////////////////


//////////sqlite3 Database////////////////////////
const sqlite3 = require("sqlite3");

const db = new sqlite3.Database("./database.db", sqlite3.OPEN_READWRITE, (err) => { // Creating a new database that we can read and write to.
    if (err) {
        return console.error(err.message);
    } else {
        console.log("Success!!");
    }
});
//////////sqlite3 Database////////////////////////


/////////////////CREATE TABLE////////////////////
// db.run("CREATE TABLE defaultPeeps(ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT NOT NULL, FAVFRUIT TEXT NOT NULL, FAVCOLOUR TEXT NOT NULL, DATE INTEGER);");
/////////////////CREATE TABLE////////////////////


/////////////////INSERT ROWS/////////////////////
// const sql = "INSERT INTO peeps(NAME, FAVFRUIT, FAVCOLOUR, DATE) VALUES('Her', 'Apples', 'Orange', '21.12.20')";

// db.run(sql, (err) => {
//     if (err) {
//         return console.error(err.message);
//     } else {
//         console.log("Peep Created!");
//     }
// });
/////////////////INSERT ROWS/////////////////////


////////////////SELECT///////////////////////////
// const selectSql = "SELECT * FROM peeps";


// db.all(selectSql, (err, rows) => {
//     if (err) {
//         return console.error(err.message);
//     } else {

//         rows.forEach((row) => {
//             console.log(row);
//         });
//     };
// });
////////////////SELECT///////////////////////////


////////////////DELETE///////////////////////////
// const sql = "DROP TABLE peeps";
// db.run(sql, (err)=>{    
//     if(err)
//     {
//         return console.error(err.message);
//     }
//     else{
//         console.log("Table deleted!");
//     }
// });
////////////////DELETE///////////////////////////


////////////////CLOSING THE DATABASE//////////////////
// db.close((err)=>{
//     if(err){
//         return console.error(err.message);
//     }else{
//         console.log("Database Closed.");
//     };
// });
////////////////CLOSING THE DATABASE//////////////////




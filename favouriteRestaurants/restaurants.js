const sqlite3 = require("sqlite3");

const db = new sqlite3.Database("./database.db", sqlite3.OPEN_READWRITE, (err)=>{ // Creating a new database that we can read and write to.
    if(err){
        return console.error(err.message);
    } else{
        console.log("Success!!");
    }
});


//////////////////////SELECT////////////////////////////////////////

// const selectSql = "SELECT MENUS.name as 'Menus Name', MENUITEMS.Name as 'Menu Items Name' FROM MENUS JOIN MENUITEMS ON MENUS.id = MENUITEMS.ID_Menu WHERE MENUS.id = 2;";

// db.all(selectSql, (err, rows)=>{
//     if(err){
//         return console.error(err.message);
//     }else{

//         rows.forEach((row)=>{
//             console.log(row);
//         });
//     };
// });

// const selectSql = "SELECT * FROM MENUITEMS";


// db.all(selectSql, (err, rows)=>{
//     if(err){
//         return console.error(err.message);
//     }else{

//         rows.forEach((row)=>{
//             console.log(row);
//         });
//     };
// });

//////////////////////SELECT///////////////////////////////////////


// db.run("CREATE TABLE COMPANY(ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT NOT NULL, AGE INTEGER NOT NULL, ADDRESS, SALARY REAL);");

// const sql = "INSERT INTO COMPANY(NAME,AGE,ADDRESS,SALARY) VALUES('Jon', 29, 'New York', 35000.00)";

// db.run(sql, (err)=>{
//     if(err){
//         return console.error(err.message);
//     } else {
//         console.log("Row Created!");
//     }
// });

// const sql = "DELETE FROM users WHERE first_name=‘Samantha';"
// db.run(sql, (err)=>{    
//     if(err)
//     {
//         return console.error(err.message);
//     }
//     else{
//         console.log("Deleted!");
//     }
// });

// const sql = "ALTER TABLE MENUS DROP COLUMN PRICE";
// db.run(sql, (err)=>{    
//     if(err)
//     {
//         return console.error(err.message);
//     }
//     else{
//         console.log("Column deleted!");
//     }
// });

// db.run("CREATE TABLE RESTAURANTS(ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT NOT NULL, IMAGELINK);");

// const sql = "INSERT INTO RESTAURANTS(NAME, IMAGELINK) VALUES('Jazzgir','https://www.thefoodaholic.co.uk/wp-content/uploads/2017/08/DSC_0104.jpg')";

// db.run(sql, (err)=>{
//     if(err){
//         return console.error(err.message);
//     } else {
//         console.log("Rows Created!");
//     }
// });

// const sql = "INSERT INTO RESTAURANTS(NAME, IMAGELINK) VALUES('Zaibatsu','https://www.visitgreenwich.org.uk/imageresizer/?image=%2Fdmsimgs%2FZaibatsu_Japanese_Fusion_606265686.jpg&action=ProductDetailProFullWidth')";

// db.run(sql, (err)=>{
//     if(err){
//         return console.error(err.message);
//     } else {
//         console.log("Row Created!");
//     }
// });

// const sql = "INSERT INTO RESTAURANTS(NAME, IMAGELINK) VALUES('Wagamama','https://www.peterboroughtoday.co.uk/webimg/T0FLMTI5NzU5MTMw.jpg?width=2048&enable=upscale')";

// db.run(sql, (err)=>{
//     if(err){ 
//         return console.error(err.message);
//     } else {
//         console.log("Row Created!");
//     }
// });

// db.run("CREATE TABLE MENUITEMS(ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT NOT NULL, PRICE REAL, ID_Menu INTEGER, FOREIGN KEY (ID_Menu) REFERENCES MENUS(ID));");

// const sql = "INSERT INTO MENUITEMS(NAME, PRICE, ID_Menu) VALUES('Coca Cola', 2.50, 2 )";

// db.run(sql, (err)=>{
//     if(err){
//         return console.error(err.message);
//     } else {
//         console.log("Item Created!");
//     }
// });


// db.run("CREATE TABLE MENUS(ID INTEGER PRIMARY KEY AUTOINCREMENT, NAME TEXT NOT NULL, PRICE REAL, ID_rest INTEGER, FOREIGN KEY (ID_rest) REFERENCES RESTAURANTS(ID));");

// const sql = "INSERT INTO MENUS(NAME, ID_rest) VALUES('Drinks', 1)";

// db.run(sql, (err)=>{
//     if(err){
//         return console.error(err.message);
//     } else {
//         console.log("Row Created!");
//     }
// });



db.close((err)=>{
    if(err){
        return console.error(err.message);
    }else{
        console.log("DB Closed");
    };
});
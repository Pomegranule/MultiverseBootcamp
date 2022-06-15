'use strict';

const api = require("/Users/egreen/Desktop/Multiverse Bootcamp/MultiverseBootcamp/peepTracker3.0/API");

const 


function userLogin(){
    // This function will get the user's input from the form and the saved username and pin in the database and compare them to make sure that they match.

    // It will use app.get on the userDatabase table to retrieve data from the "userName" and "userPin" comlumns.

    // If the user fails to give the correct userPin and userName, they will receive a pop-up "You have failed the vibe check. :c" and the function will return a falsy value, stopping the user from progressing any further.


    //Login.html will have a form with username and pin fields and submit button
    //When submit button clicked call userLogin()
    //DO A POST TO /checkUser and pass in username and PIN

    let userNameInput = document.getElementById("userNameInput").value;

    let userPinInput = document.getElementById("userPinInput").value;


};

function userSignUp(){
    // This function will take the user's input from the form and POST the userName and userPin to their respective columns in the userDatabase table.
    //It will then take the user back to the homepage where they can finally login.
};

function peepCreation(){
    // This function will take the user's input from a form, and when the user is finished creating their "peep", they will need to press the "save and finish" button which will POST all of their changes to the "userPeeps" table within the iconDatabase; each piece of data to their respective columns.

    // This function will include an await function that waits for the user to press the save button before POSTing the data to the "userPeeps" table within the iconDatabase.
};

function loadPreviousPeeps(){
    userLogin();

    if (userLogin() == false){
        alert("You have failed the vibe check. :c");
    }else{
        // Go to the database and display all of the various peeps.
    };
};


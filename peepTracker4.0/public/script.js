'use strict';


import userAccount from "../backend";

// const { getAllUsers } = require("../../backend");


const newUserSubmitButton = document.getElementById("newUserSubmitButton");

newUserSubmitButton.addEventListener(click, userAccount.getAllUsers());

// const sql = `SELECT * FROM userAccount WHERE userName = '${userNameInput}'`
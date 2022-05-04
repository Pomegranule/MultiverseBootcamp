'use strict';

let timeout;

function sayHello(){
    timeout = setTimeout(yo, 3000);
};

function yo(){
    console.log("Hello Pom!");
};

sayHello();
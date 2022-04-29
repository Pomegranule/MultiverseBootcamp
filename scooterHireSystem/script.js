"use strict";
const nanoid = require("nanoid");

const app = {
    loggedInUsers: [],
    
}

class User{
    constructor(age){
        this.userID=nanoid.nanoid();
        this.age=age;
    };
    logIn(){
        if (age>=18){
            app.loggedInUsers.push(this);
        }else{
            throw new Error("You have failed the vibe check. :c");
        }
    };
};



class Customer extends User{
    constructor(bankBalance){

        //super(userID);
        if(!bankBalance){// if statements must be declared within the constructor

 
       } 
       
       this.bankBalance=bankBalance;
    };

    
   
    rentScooter(){

        ChargingDock.availableScooters.pop([]);
    };

    returnScooter(){
        ChargingDock.chargingScooters.shift();
        
    };
    
    reportBrokenScooter(){
        ChargingDock.brokenScooters.shift()


        
    };

};

const testCustomer = new Customer('0');

class maintW extends User{
    
};

class Scooter {
    static scooters = [];
    maxRange = 32;
    charged = true;
    broken = false;
    constructor(scooter){
        this.scooter = scooter;
        this.scooterID = nanoid.nanoid();
    };
};


class ChargingDock{
    chargingScooters=[];
    
    availableScooters=[];
    
    brokenScooters=[];

    chargeAScooter(){
        
        .push(this)
        
    };
    
};




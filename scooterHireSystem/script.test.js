const {User,Customer,MaintWorker,Scooter,ChargingDock,app} =require("./script");

const scooter1 = new Scooter(); //To appease the DOM gods we put the const at the top
const scooter2 = new Scooter();
const scooter3 = new Scooter();

//ChargingDocks
const londonDock = new ChargingDock();

/*describe("bank account",()=>{
    test
})*/

//Users
//refrences customer 'ali' from script.js to be tested


test('scooter being fixed', ()=>{//declartion of test with comments
    const eleanor = new MaintWorker();
    const brokenScooter = new Scooter(); 
    brokenScooter.broken=true;

    eleanor.fix(brokenScooter);
    expect(brokenScooter.broken).toBe(false);
});

test('money in bank', ()=>{//declartion of test with comments
    const ali = new Customer(18,1);//if only use in one test delcare within the test function
    expect(ali.getBankBalance()).toBe(1)//pass through values 3 and 7 with return 10 to pass//maths. as we retirive function from maths class
    
    //expect customer(18,0) to be "no money"

})

    test('Vibe checked?', ()=>{
        const ali = new Customer(17,1);
        expect(ali.getUserAge()).toBe(17);
    });

    test('You have failed the vibe check. :c', ()=>{
        const ali = new Customer(17, 7);
        //expect(ali.getUserAge()).toBe(17);
        

    try{
        ali.logIn();
        }
        catch(error){
            expect(error.toString()).toBe("Error: You have failed the vibe check. :c");
        }
    });

test('charging the scooter',()=>{
    const chargingScooter= new Scooter();
    chargingScooter.charged= true

    chargingScooter.startCharging(chargingScooter)
    expect(chargingScooter.charged).toBe(true);

});

//Scooters
// describe('not enough scooters',()=>{
//     test
// })


/**test for 
 * Age Limit
 * Fundings issue
 * Charging
 * 
 * 
 */
//npm test -- --coverage     this for the test coverage 

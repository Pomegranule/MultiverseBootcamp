// class Bag

class Traveller {
    bags = []
    constructor(travellerName, ppNO){
        this.travellerName = travellerName;
        this.ppNO = ppNO;
    }
    addBag(Bag){
        this.bags.push(Bag)
    }
    
}


const eleanor = new Passenger("Eleanor", "1234A");
const eleanorBag = new Bag (14);

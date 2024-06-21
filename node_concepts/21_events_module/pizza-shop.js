const EventEmitter = require('events');

class PizzaShop extends EventEmitter {
    constructor(){
        super();
        this.orerNumber = 0;
    }

    order(size, topping){
        this.orerNumber++;
        this.emit("order", size, topping);
    }

    displayOrderNumber(){
        console.log("Current orderNumber: ",this.orerNumber);
    }
}

module.exports = PizzaShop;
// const EventEmitter = require("events");
// const emitter = new EventEmitter();

// emitter.on("order-pizza", (size, topping)=>{
    //     console.log("Order received, baking a " +size+ " pizza!! with "+ topping);
    // })
    // emitter.emit("order-pizza", "large", "capsicum");
    
const PizzaShop = require('./pizza-shop');
const DrinkMachine = require('./drink-machine');
const drinkMachine = new DrinkMachine();
const pizzaShop = new PizzaShop();

pizzaShop.on('order', (size, topping)=>{
    console.log("Order received, baking a " +size+ " pizza!! with "+ topping);
    drinkMachine.serveDrink(size);
})
pizzaShop.order("large", "capsicum");
pizzaShop.displayOrderNumber();
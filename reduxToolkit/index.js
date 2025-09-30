const store = require("./app/store");
const { fetchProducts } = require("./features/products/productSlice");

const pizzaActions = require("./features/pizza/pizzaSlice").pizzaActions;

const burgerActions = require("./features/burger/burgerSlice").burgerActions;


console.log("Initial state ", store.getState());

const unSubscribe = store.subscribe(() =>{
    console.log("Update State ", store.getState());
})

// store.dispatch(pizzaActions.pizza_order());

// store.dispatch(burgerActions.burger_order())

store.dispatch(fetchProducts()).then(() => console.log(store.getState()))

unSubscribe();
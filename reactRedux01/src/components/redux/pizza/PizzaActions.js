import { ORDER_PIZZA } from "./PizzaTypes";

export const orderPizza = (number = 1) =>{
    return {
        type: ORDER_PIZZA,
        payload: number
    }
}
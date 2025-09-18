import { useSelector, useDispatch } from "react-redux"
import { orderPizza } from "./redux";
import { useState } from "react";

useSelector

function CustomerChoice() {

    const [number, setNumber] = useState(1);

    const pizzaBase = useSelector(state => state.pizza.pizzaBase);
    const dispatch = useDispatch();

  return (
    <div className='pizza-container'>
        <div className="box">
            <h2>Number of pizza base available - {pizzaBase}</h2>
            <input type="text" className="inp-field" placeholder="Enter your number" value={number} onChange={e => setNumber(e.target.value)}/>
            <button className='btn' onClick={() => dispatch(orderPizza(number))}>Order Pizza</button>
        </div>
    </div>
  )
}

export default CustomerChoice;
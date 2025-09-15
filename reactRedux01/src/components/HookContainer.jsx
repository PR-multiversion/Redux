import { useSelector, useDispatch } from "react-redux"
import { orderPizza } from "./redux";

useSelector

function HookContainer() {

    const pizzaBase = useSelector(state => state.pizza.pizzaBase);
    const dispatch = useDispatch();

  return (
    <div className='pizza-container'>
        <div className="box">
            <h2>Number of pizza base available - {pizzaBase}</h2>
            <button className='btn' onClick={() => dispatch(orderPizza())}>Order Pizza</button>
        </div>
    </div>
  )
}

export default HookContainer;
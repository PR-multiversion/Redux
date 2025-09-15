import { useSelector, useDispatch } from "react-redux"
import { orderBurger } from "./redux";

function BurgerBox() {

    const burgerBuns = useSelector(state => state.burger.burgerBuns);
    const dispatch = useDispatch();

  return (
    <div className='pizza-container'>
        <div className="box">
            <h2>Number of Burger base available - {burgerBuns}</h2>
            <button className='btn' onClick={() => dispatch(orderBurger())}>Order BurgerBuns</button>
        </div>
    </div>
  )
}

export default BurgerBox;
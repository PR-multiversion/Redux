import React from 'react'
// import { orderPizza } from './redux';
import { connect } from 'react-redux';
import { orderPizza } from '../components/redux/pizza/PizzaActions';

function PizzaBox(props) {
    console.log(props)
  return (
    <div className='pizza-container'>
        <div className="box">
            <h2>Number of pizza base available - {props.pizzaBase}</h2>
            <button className='btn' onClick={ props.orderPizza}>Order Pizza</button>
        </div>
    </div>
  )
}

const mapStateToProps = (state) =>{
    return {
        pizzaBase: state.pizza.pizzaBase
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        orderPizza : () => dispatch(orderPizza())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PizzaBox)
import './App.css';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import PizzaBox from './components/PizzaBox';
import HookContainer from './components/HookContainer';
import BurgerBox from './components/BurgerBox';
import CustomerChoice from './components/CustomerChoice';
import ProductContainer from './components/ProductContainer';

function App() {

  return (
    <>
      <Provider store={store}>
          {/* <PizzaBox></PizzaBox> */}
          <HookContainer />
          <CustomerChoice/>
          <BurgerBox />
          <ProductContainer/>
      </Provider>
    </>
  )
}

export default App

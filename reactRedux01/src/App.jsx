import './App.css';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import PizzaBox from './components/PizzaBox';
import HookContainer from './components/HookContainer';
import BurgerBox from './components/BurgerBox';

function App() {

  return (
    <>
      <Provider store={store}>
          {/* <PizzaBox></PizzaBox> */}
          <HookContainer />
          <BurgerBox />
      </Provider>
    </>
  )
}

export default App

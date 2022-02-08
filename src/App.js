import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
function App() {
  const cartState = useSelector(state => state.cart.cartIsShown)
  return (
    <>
      {cartState && <Cart/>}
      <Header/>
      <Meals/>
    </>
  );
}

export default App;

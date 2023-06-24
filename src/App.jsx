import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import CheckOut from './components/CheckOut/CheckOut';
import OrderConfirm from './components/OrderConfirm/OrderConfirm';
import DisplayMessage from './components/DisplayMessage/DisplayMessage';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/order-confirmation/:orderId" element={<OrderConfirm />} />
            <Route path="*" element={<DisplayMessage title="Error 404" message="Página no encontrada" /> } />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App;

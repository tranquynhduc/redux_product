import { Routes, Route } from 'react-router-dom'
import { ProductDetail } from './component/Products/ProductDetail';
import { ProductList } from './component/Products/ProductList';
import { Header } from './component/Header';
import { Footer } from './component/Footer';
import { Provider } from 'react-redux';
import store from './redux/Store';
function App() {
  return (
    <Provider store={store}>
     <Header /> 
      <Routes>
        <Route path='/'  element={<ProductList />} />
        <Route path='/ProductList/:productId'  element={<ProductDetail />} />
      </Routes>

    </Provider>
  );
}

export default App;

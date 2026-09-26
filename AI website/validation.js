import { Route, Routes } from 'react-router-dom';
import GrainOverlay from './components/GrainOverlay.jsx';
import Header from './components/Header.jsx';
import CatalogPage from './pages/CatalogPage.jsx';
import ProductDetailPage from './pages/ProductDetailPage.jsx';
import CartPage from './pages/CartPage.jsx';
import CheckoutPage from './pages/CheckoutPage.jsx';

export default function App() {
  return (
    <div className="page">
      <GrainOverlay />
      <Header />

      <div className="page__content">
        <Routes>
          <Route path="/" element={<CatalogPage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </div>

      <footer className="site-footer">
        <p>Fieldstone Supply Co. · Mail order since 1958 · Returns accepted within 30 days</p>
      </footer>
    </div>
  );
}

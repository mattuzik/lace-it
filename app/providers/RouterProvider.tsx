import { Routes, Route, Outlet } from 'react-router-dom'
import { Breadcrumbs } from '@/widgets/breadcrumbs';
import MissingPage from '@/pages/missing-page'
import Catalog from '@/pages/catalog';
import Main from '@/pages/main'
import ProductPage from '@/pages/product-page';
import CartPage from '@/pages/cart-page';
import Favourites from '@/pages/favorites';

const WithBreadcrumbs = () => (
  <div className="container breadcrumbs">
    <Breadcrumbs />
    <Outlet />
  </div>
);

const RouterProvider = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/cart" element={<CartPage />} />  
      <Route path="/favorites" element={<Favourites />} />  
      <Route path="*" element={<MissingPage />} />  

      <Route element={<WithBreadcrumbs />}>
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:category" element={<Catalog />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Route>

    </Routes>
  );
};

export default RouterProvider
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// style(注意样式优先级)
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

// components
const Layout = lazy(() => import('./pages/Layout'));
const Home = lazy(() => import('./pages/Home'));
const Catalog = lazy(() => import('./pages/Catalog'));
const Detail = lazy(() => import('./pages/detail/Detail'));
// import Layout from './pages/Layout';
// import Home from './pages/Home';
// import Catalog from './pages/Catalog';
// import Detail from './pages/detail/Detail';

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":category" element={<Catalog />} />
          <Route path=":category/:id" element={<Detail />} />
          <Route path=":category/search/:keyword" element={<Catalog />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;

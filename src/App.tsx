import { Routes, Route } from 'react-router-dom';
// components
import Layout from './pages/Layout';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Detail from './pages/detail/Detail';
// style
import './App.scss';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path=':category' element={<Catalog />} />
        <Route path=':category/:id' element={<Detail />} />
        <Route path=':category/search/:keyword' element={<Catalog />} />
      </Route>
    </Routes>
  );
}

export default App;
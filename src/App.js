import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Routes } from 'react-router';

import Layout from './components/layout/layout';
import Home from './components/Home/home';
import Product from './components/product/product';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/product" element={<Product />} />
        </Routes>
      </Layout>
    </Router>

  );
}

export default App;

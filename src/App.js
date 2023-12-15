import './App.css';
import { Home, Navbar, Products, About, Cart, Product, Footter, Blog } from './component';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<Product />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footter />
        </>
    );
}

export default App;

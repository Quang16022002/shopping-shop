import './App.css';
import { Home, Contact, Navbar, Products, About, Product, Cart } from './component';
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
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </>
    );
}

export default App;

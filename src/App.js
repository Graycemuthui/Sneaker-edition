import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Navbar from "./components/Nav";
import Product from "./components/Product";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

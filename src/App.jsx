import "./styles/global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Register from "./pages/Register";
import CartProvider from "./contexts/CartContext";
import PageNav from "./components/PageNav";

function App() {
  return (
    <main className="main-container">
      <PageNav />
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </CartProvider>
    </main>
  );
}

export default App;

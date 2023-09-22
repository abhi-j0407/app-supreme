import "./styles/global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Register from "./pages/Register";
import CartProvider from "./contexts/CartContext";
import PageNav from "./components/PageNav";
import Tube from "./pages/Tube";

function App() {
  return (
    <main className="main-container">
      <PageNav />
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/register" element={<Register />} />
            <Route path="/tube" element={<Tube />} />
          </Routes>
        </Router>
      </CartProvider>
    </main>
  );
}

export default App;

import "./styles/global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Register from "./pages/Register";
import CartProvider from "./contexts/CartContext";
import PageNav from "./components/PageNav";
import Tube from "./pages/Tube";
// import VideoMain from "./components/Tube/VideoMain";
// import ChannelMain from "./components/Tube/ChannelMain";
// import SearchFeed from "./components/Tube/SearchFeed";
import { VideoMain, ChannelMain, SearchFeed } from "./components/Tube"

function App() {
  return (
    <main className="main-container">
      <PageNav />
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/register" element={<Register />} />
            <Route path="/tube" element={<Tube />} >
              <Route path="video/:id" element={<VideoMain />} />
              <Route path="channel/:id" element={<ChannelMain />} />
              <Route path="search/:searchTerm" element={<SearchFeed />} />
            </Route>
          </Routes>
        </Router>
      </CartProvider>
    </main>
  );
}

export default App;

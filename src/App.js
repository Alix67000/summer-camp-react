import "./styles/index.scss";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Informations from "./pages/Informations";
import Notfound from "./pages/Notfound";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Register from "./pages/Register";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/informations" element={<Informations />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

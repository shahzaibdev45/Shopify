import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Product from "./pages/product";
import Slider1 from "./pages/slider";
import Slider2 from "./pages/slider2";
import Slider from "./pages/slider";
import Slider3 from "./pages/slider3";
import Scroll from "./pages/scroll";
import Contact from "./pages/contact";
import Shop from "./pages/shop";
import Blog from "./pages/blog";
import Localstorage from "./pages/localstorage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/scroll" element={<Scroll />} />
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Slider1" element={<Slider1 />} />
        <Route path="/Slider2" element={<Slider2 />} />
        <Route path="/slider" element={<Slider />} />
        <Route path="/slider3" element={<Slider3 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/localstorage" element={<Localstorage/>} />
      </Routes>
    </div>
  );
}

export default App;

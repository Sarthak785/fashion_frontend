import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './page/Home';
import Register from './page/Register.js'
import Login from './page/Login';
import About from './page/About.js'
import FAQ from './page/FAQ.js'
import Blog from './page/Blog.js'
import Checkout from './page/Checkout.js'
import Contact from './page/FAQ.js'
import Payment from './page/Payment.js'
import Shop from './page/Shop.js'
import ProductCollection from './page/ProductCollection.js'



function App() {
  return (
    <div>
      <BrowserRouter>

    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/faq" element={<FAQ/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/productCollection" element={<ProductCollection/>}/>
    </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;

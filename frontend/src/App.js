import Private1 from './Components/privete/privet.js';
import Private from './Components/privete/PrivatComp.js';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav/Nav.js';
import Footer from './Components/footer/Footer.js';
import Signup from './Components/signup/Signup.js';
import Login from './Components/Login/Login.js';
import Products from './Components/products/Product.js';
import Addproducts from './Components/productAdd/AddProduct.js';
import Errorsvr from './Components/erros/Errors.js';
import { paste } from '@testing-library/user-event/dist/paste.js';
function App() {
  return (
    <div id='app' className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
<Route  element={<h1>hello  home</h1>} path='/'/> 
 <Route element={<Private/>} >
<Route  element={<Addproducts/>} path='/add'/> 
<Route  element={<div >
  {/* <Products data={{ name: "aanand", price: 100,img:"https://source.unsplash.com/random/200x200?sig=1" }} /> */}
<Products/>
</div>
} path='/products'/> 
<Route  element={<h1>hello update</h1>} path='/update'/> 
<Route  element={<h1>hello profile</h1>} path='/Profile'/> 
  </Route>       
  <Route  element={<Private1/>}>
<Route element={<Errorsvr/>} path="/Error"/>
<Route  element={<Login/>} path='/Login'/> 
<Route  element={<Signup/>} path='/Signup'/> 
  </Route>


      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
// style={{display:"flex" ,flexWrap:'wrap'}}
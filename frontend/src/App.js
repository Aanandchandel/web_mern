import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav/Nav.js';
import Footer from './Components/footer/Footer.js';
import Signup from './Components/signup/Signup.js';
function App() {
  return (
    <div id='app' className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
<Route  element={<h1>hello  home</h1>} path='/'/> 
<Route  element={<h1>hello addd </h1>} path='/add'/> 
<Route  element={<h1>hello update</h1>} path='/update'/> 
<Route  element={<h1>hello profile</h1>} path='/Profile'/> 
<Route  element={<h1>hello  Login</h1>} path='/Login'/> 
<Route  element={<Signup/>} path='/Signup'/> 


      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;


import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";


import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Footer from './Component/footer/Footer';
import Buiness from './Component/Business/Buiness';
import Contact from './Component/Contact-Us/Contact';
import BusinessPage from './Component/Business/component/BusinessPage';

// import About from './Component/About/About';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/about' exact element={<About/>}/>
        <Route path='/business' exact element={<Buiness/>}/>
        <Route path ='/contact'exact element={<Contact/>} />
        <Route path='/business/businesspage' element={<BusinessPage/>}/>
      </Routes>

      <Footer/>

    </BrowserRouter>
    
  );
}

export default App;

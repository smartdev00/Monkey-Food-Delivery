
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Test from "./pages/Test";
import Home from "./pages/Home";
import Menu from './pages/Menu'
import Profile from './pages/Profile'
import Offers from './pages/Offers'
import More from './pages/More'

const App = () => {
  return (
    // <div className="bg-sky-900 h-full min-h-screen">
    <div className="container bg-gray-200 min-h-screen">
      <BrowserRouter>

          <Routes>
     
            <Route path="/" element={<Home />} />

            <Route path="/Menu" element={<Menu />} />
            <Route path="/More" element={<More />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Offers" element={<Offers />} />
           
 
          </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;


import { BrowserRouter, Route, Routes } from "react-router-dom";
import ButtonShow from "./pages/ButtonShow";
import IconsRef from "./components/Icons/IconsRef";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./pages/Profile";

import Home from "./pages/Home";
import Menu from './pages/Menu'
import Profile from './pages/Profile'
import Offers from './pages/Offers'
import More from './pages/More'
const App = () => {
  return (
    <div className="container bg-slate-100 min-h-screen">
      <StatusBar/>
      <BrowserRouter>
        <Routes>
          <Route path="/button" element={<ButtonShow />} />
          <Route path="/icon" element={<IconsRef />} />
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

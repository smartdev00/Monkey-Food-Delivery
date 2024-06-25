
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ButtonShow from "./pages/ButtonShow";
import IconsRef from "./components/Icons/IconsRef";
import Home from "./pages/Home";
import Menu from './pages/Menu'
import Offers from './pages/Offers'
import More from './pages/More/More'
const App = () => {
  return (
    <div className="bg-[#999999]">
      <div className="container min-h-screen bg-white">
      <BrowserRouter>
        <Routes>
          <Route path="/button" element={<ButtonShow />} />
          <Route path="/icon" element={<IconsRef />} />
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/More" element={<More />} />
          <Route path="/Offers" element={<Offers />} />
        </Routes>
      </BrowserRouter>
      </div>
    </div>
    
  );
};

export default App;

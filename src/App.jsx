
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ButtonShow from "./pages/ButtonShow";
import IconsRef from "./components/Icons/IconsRef";
import StatusBar from "./components/Navbar/StatusBar";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./pages/Profile/Profile";

import Home from "./pages/Home";
import Menu from './pages/Menu'
import Offers from './pages/Offers'
import More from './pages/More'
const App = () => {
  return (
    <div className="container bg-white min-h-screen">
      <StatusBar/>
      <BrowserRouter>
        <Routes>
          <Route path="/button" element={<ButtonShow />} />
          <Route path="/icon" element={<IconsRef />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/More" element={<More />} />
          <Route path="/Offers" element={<Offers />} />
          <Route path="/profile" element={<Profile />} />
            {/* <Route path="/auth" element={<Authentication />} />
            <Route path="/" element={<Home />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/update/:id" element={<UpdatePost />} /> */}
          </Routes>
        {/* </AuthProvider> */}
      </BrowserRouter>
    </div>
  );
};

export default App;

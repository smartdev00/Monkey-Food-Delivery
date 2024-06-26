
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ButtonShow from "./pages/ButtonShow";
import IconsRef from "./components/Icons/IconsRef";
<<<<<<< HEAD
 
import StatusBar from './components/Navbar/StatusBar'
=======
import StatusBar from "./components/Navbar/StatusBar";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./pages/Profile/Profile";
>>>>>>> cd687a54e8c4ca120342161f5a84ca6cc5d0f1f0

import Land from "./pages/Land";
import Home from "./pages/Home";
import Menu from './pages/Menu'
import Offers from './pages/Offers'
import More from './pages/More'
const App = () => {
  return (
<<<<<<< HEAD
    <div className="container bg-gray-100 min-h-screen">
=======
    <div className="container bg-white min-h-screen">
>>>>>>> cd687a54e8c4ca120342161f5a84ca6cc5d0f1f0
      <StatusBar/>
      <BrowserRouter>
        <Routes>
          <Route path="/button" element={<ButtonShow />} />
          <Route path="/icon" element={<IconsRef />} />
<<<<<<< HEAD
          <Route path="/" element={<Home />} />
          <Route path="/Land" element={<Land />} />
=======
>>>>>>> cd687a54e8c4ca120342161f5a84ca6cc5d0f1f0
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
